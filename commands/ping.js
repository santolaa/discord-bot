const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Reply with the difference between sending and replying the message.'),
  async execute(interaction) {
    await interaction.reply({ content: `Latency is ${Date.now() - interaction.createdTimestamp}ms.`, ephemeral: true })
  },
}
