const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('calculate')
	.setDescription('Starts the calculator'),
		async execute(interaction) {
			const target = interaction.options.getUser('target');
			const reason = interaction.options.getString('reason') ?? 'No reason provided';

			const add = new ButtonBuilder()
				.setCustomId('add')
				.setLabel('+')
				.setStyle(ButtonStyle.Primary);

			const sub = new ButtonBuilder()
				.setCustomId('sub')
				.setLabel('-')
				.setStyle(ButtonStyle.Primary);

			const mul = new ButtonBuilder()
				.setCustomId('mul')
				.setLabel('x')
				.setStyle(ButtonStyle.Primary);
			
			const div = new ButtonBuilder()
				.setCustomId('div')
				.setLabel('/')
				.setStyle(ButtonStyle.Primary);
		
			const equal = new ButtonBuilder()
				.setCustomId('equal')
				.setLabel('=')
				.setStyle(ButtonStyle.Primary);
	
			const num1 = new ButtonBuilder()
				.setCustomId('num1')
				.setLabel('1')
				.setStyle(ButtonStyle.Secondary);

			const num2 = new ButtonBuilder()
				.setCustomId('num2')
				.setLabel('2')
				.setStyle(ButtonStyle.Secondary);
			
			const num3 = new ButtonBuilder()
				.setCustomId('num3')
				.setLabel('3')
				.setStyle(ButtonStyle.Secondary);
		
			const num4 = new ButtonBuilder()
				.setCustomId('num4')
				.setLabel('4')
				.setStyle(ButtonStyle.Secondary);
		
			const num5 = new ButtonBuilder()
				.setCustomId('num5')
				.setLabel('5')
				.setStyle(ButtonStyle.Secondary);
		
			const num6 = new ButtonBuilder()
				.setCustomId('num6')
				.setLabel('6')
				.setStyle(ButtonStyle.Secondary);
		
			const num7 = new ButtonBuilder()
				.setCustomId('num7')
				.setLabel('7')
				.setStyle(ButtonStyle.Secondary);
		
			const num8 = new ButtonBuilder()
				.setCustomId('num8')
				.setLabel('8')
				.setStyle(ButtonStyle.Secondary);
		
			const num9 = new ButtonBuilder()
				.setCustomId('num9')
				.setLabel('9')
				.setStyle(ButtonStyle.Secondary);
		
			const num0 = new ButtonBuilder()
				.setCustomId('num0')
				.setLabel('0')
				.setStyle(ButtonStyle.Secondary);
			
			const cancel = new ButtonBuilder()
				.setCustomId('cancel')
				.setLabel('Exit')
				.setStyle(ButtonStyle.Danger);
	
			const row1 = new ActionRowBuilder()
				.addComponents(num1, num2, num3, add);

			const row2 = new ActionRowBuilder()
				.addComponents(num4, num5, num6, sub);

			const row3 = new ActionRowBuilder()
				.addComponents(num7, num8, num9, mul);
			
			const row4 = new ActionRowBuilder()
				.addComponents(cancel, num0, div, equal);
			
			await interaction.reply({
				content: `Calculator Bot : `,
				components: [row1,row2,row3,row4]	
			});
	},
};