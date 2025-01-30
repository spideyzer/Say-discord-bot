
# Discord Say Command Bot

This Discord bot allows users to send a custom message to the server, optionally with an image. The bot checks if the user has the required permission (`ManageMessages`), sends the specified message, and deletes the original command message to keep the chat clean.

## Features

- **Custom Message Sending**: Users can send a custom message with or without an image.
- **Permission Check**: Only users with the `Manage Messages` permission can use the command.
- **Ephemeral Responses**: The bot uses ephemeral messages to send private responses to users for more discretion.
- **Automatic Message Deletion**: After sending the message, the bot attempts to delete the original command message to keep the channel tidy.
- **Image Support**: Optionally include an image with the message by appending `--image <image_url>`.

## Prerequisites

Before using this bot, ensure you have the following:

- Node.js installed (version 16.9.0 or higher).
- A Discord bot token. You can get one by creating a bot on the [Discord Developer Portal](https://discord.com/developers/applications).
- A Discord server with a text channel where the bot has permission to send messages and delete messages.
- The `Manage Messages` permission for users who will issue the `!say` command.

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/discord-say-command-bot.git
cd discord-say-command-bot
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Set up your `.env` file with the following environment variable:

```env
TOKEN=your_discord_bot_token
```

### 4. Start the bot:

```bash
node index.js
```

## Usage

Once the bot is online, users can use the `!say` command to send a custom message:

- **Message with text only**:

  ```
  !say Hello, everyone!
  ```

  This will send the message "Hello, everyone!" in the channel.

- **Message with text and an image**:

  ```
  !say Check out this cool image! --image https://example.com/cool-image.png
  ```

  This will send the message "Check out this cool image!" along with the image at the provided URL.

### Permissions

- The bot checks if the user has the `Manage Messages` permission before allowing them to use the command. If the user does not have the required permission, the bot will send a private message informing them of this.

- After sending the message, the bot will attempt to delete the original command message to maintain a clean chat.

## Customization

To customize the bot, you can edit the following in the `say.js` file:

- `ROLE_ID`: Define the role that can access the command (if you want to restrict it).
- Customize the text message or commands by modifying the `execute` method in `say.js`.

## Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- `discord.js`: A powerful library for interacting with the Discord API.
- `dotenv`: A module to load environment variables from a `.env` file.
