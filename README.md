# HeinLein Ai 🤖
<img src="https://i.ibb.co/674V4T9z/Frame-73-2.png" alt="Alt text">

## 🚀 Quick Start

### Prerequisites

- [Python 2.7+](https://www.python.org/downloads/)
- [Node.js 23+](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [pnpm](https://pnpm.io/installation)

> **Note for Windows Users:** [WSL 2](https://learn.microsoft.com/en-us/windows/wsl/install-manual) is required.

### Use the Starter (Recommended)

```bash
git clone https://github.com/yktalks/heinlein.git
cd heinlein_agent
cp .env.example .env
pnpm i && pnpm build && pnpm start
```

Once the agent is running, you should see the message to run "pnpm start:client" at the end.
Open another terminal and move to same directory and then run below command and follow the URL to chat to your agent.

```bash
pnpm start:client
```

### Edit the .env file

Copy .env.example to .env and fill in the appropriate values.

```
cp .env.example .env
```

Note: To Run your Agent on X(twitter) you need to change the following in the .env file.

```bash
TWITTER_USERNAME=  Account username
TWITTER_PASSWORD=  Account password
TWITTER_EMAIL=     Account email
TWITTER_ENDPOINT_DB_URL= URL of the API endpoint (e.g., http://localhost:3000/api/endpoint)

DATABASE_URL= # PostGreSQL database URL
```

Note: .env is optional. If you're planning to run multiple distinct agents, you can pass secrets through the character JSON

### Automatically Start Agent

This will run everything to set up the project and start the bot with the default character.

```bash
sh scripts/start.sh
```

### Edit the character file

1. Open `agent/character.ts` to modify the default character. Uncomment and edit.

2. To load custom characters:
   - Use `pnpm start --characters="path/to/your/character.json"`
   - Multiple character files can be loaded simultaneously
3. Connect with X (Twitter)
   - change `"clients": []` to `"clients": ["twitter"]` in the character file to connect with X

### Manually Start Agent

```bash
pnpm i
pnpm build
pnpm start

# The project iterates fast, sometimes you need to clean the project if you are coming back to the project
pnpm clean
```

<img src="https://i.ibb.co/YTwM32Wt/Grok-1.png" alt="Alt text">


#### Additional Requirements

You may need to install Sharp. If you see an error when starting up, try installing it with the following command:

```
pnpm install --include=optional sharp
```
