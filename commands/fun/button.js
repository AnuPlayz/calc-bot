const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, InteractionCollector, InteractionResponse } = require('discord.js');
const createButton = require("../../calculator/makeButtons")
module.exports = {
	data: new SlashCommandBuilder()
	.setName('calculate')
	.setDescription('Starts the calculator'),
		async execute(interaction) {
			//const target = interaction.options.getUser('target');
			//const reason = interaction.options.getString('reason') ?? 'No reason provided';
			
			await interaction.reply({
				content: `Calculator Bot : `,
				components: createButton()
			});
	},
}