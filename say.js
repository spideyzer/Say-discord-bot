const { PermissionsBitField } = require("discord.js");

module.exports = {
    name: "say",
    async execute(message) {
        // Check if the user has the required permission
        if (
            !message.member.permissions.has(
                PermissionsBitField.Flags.ManageMessages,
            )
        ) {
            return message.reply(
                "âŒ You do not have permission to use this command.",
            );
        }

        // Extract arguments from the message, removing the command name from the start
        const args = message.content
            .slice(message.content.indexOf(" ") + 1)
            .trim()
            .split("--image");
        const text = args[0].trim();
        const imageUrl = args[1] ? args[1].trim() : null;

        // Check if text content is provided
        if (!text) {
            return message.reply("âš ï¸ Please provide a message to send.");
        }

        // Validate the image URL format if provided
        if (imageUrl && !isValidImageUrl(imageUrl)) {
            return message.reply(
                "âš ï¸ Please provide a valid image URL (png, jpg, jpeg, gif, or webp).",
            );
        }

        try {
            // Send the message as plain text with optional image
            await message.channel.send({
                content: text,
                files: imageUrl ? [imageUrl] : [],
            });
            // Attempt to delete the original command message
            await message.delete();
        } catch (error) {
            console.error("Failed to delete message:", error);
            message.reply(
                "âš ï¸ Could not delete the original message. Please check my permissions.",
            );
        }
    },
};

// Function to validate if the provided URL is a valid image link
function isValidImageUrl(url) {
    return /^(https?:\/\/.*\.(png|jpg|jpeg|gif|webp))$/i.test(url);
}
