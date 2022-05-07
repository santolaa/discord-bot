const { Client, Collection, Intents } = require('discord.js')
const fs = require('node:fs')

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.commands = new Collection()

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
  const command = require(`../commands/${file}`)
  client.commands.set(command.data.name, command)
}

module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    if (!interaction.isCommand()) return

    const command = client.commands.get(interaction.commandName)

    if (!command) return

    try {
      await command.execute(interaction)
    } catch (error) {
      console.error(error)
      await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
    }
  },
}
