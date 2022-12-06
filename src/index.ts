import { Client, GatewayIntentBits } from 'discord.js'
import express from 'express'

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user!.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
})
const server = express()

server.get('/', async (req, res)=>{
    res.send("Hello! Welcome to this awesome server!")
})

server.listen(80,()=>{
    console.log("Web Server")
})
// process.env['discordToken']
client.login("OTcxNTI2MjA4MjU0Nzk1ODM5.Gn9Pc5.f-NdrwtETnR7NLQHc1SfEMZtRhvh1on3VK0uRI");