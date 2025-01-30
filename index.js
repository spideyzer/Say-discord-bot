const { Client, Intents, Collection } = require("discord.js");
const fs = require("fs");
const path = require("path");

// Create a new client instance
const client = new Client({ 
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] 
});

// Store commands in a collection
client.commands = new Collection();

// Read all command files in the commands folder
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

// Loop through each command file and add it to the commands collection
for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.name, command);
}

// When the bot is ready
client.once("ready", () => {
    console.log(`${client.user.tag} is now online!`);
});

// When a message is received
client.on("messageCreate", (message) => {
    // Ignore messages from the bot itself
    if (message.author.bot) return;

    // Get command and arguments
    const args = message.content.slice(1).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    // Check if the command exists
    if (!client.commands.has(commandName)) return;

    // Get the command and execute it
    const command = client.commands.get(commandName);
    try {
        command.execute(message);
    } catch (error) {
        console.error(error);
        message.reply("An error occurred while executing the command.");
    }
});

// Log in to Discord with your app's token
client.login("YOUR_DISCORD_BOT_TOKEN");
