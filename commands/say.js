const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('say')
    .setDescription('Reply with your message.')
    .addStringOption(option =>
      option.setName('message')
        .setDescription('The message to reply with.')
        .setRequired(true)),
  async execute(interaction) {
    await interaction.reply(`${interaction.options.getString('message')}`)
  },
}
