const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, InteractionCollector, InteractionResponse } = require('discord.js');

module.exports = function createButton(){
    const add = new ButtonBuilder()
				.setCustomId('n+')
				.setLabel('+')
				.setStyle(ButtonStyle.Primary);

			const sub = new ButtonBuilder()
				.setCustomId('n-')
				.setLabel('-')
				.setStyle(ButtonStyle.Primary);

			const mul = new ButtonBuilder()
				.setCustomId('n*')
				.setLabel('x')
				.setStyle(ButtonStyle.Primary);
			
			const div = new ButtonBuilder()
				.setCustomId('n/')
				.setLabel('/')
				.setStyle(ButtonStyle.Primary);
		
			const equal = new ButtonBuilder()
				.setCustomId('n=')
				.setLabel('=')
				.setStyle(ButtonStyle.Primary);
	
			const num1 = new ButtonBuilder()
				.setCustomId('n1')
				.setLabel('1')
				.setStyle(ButtonStyle.Secondary);

			const num2 = new ButtonBuilder()
				.setCustomId('n2')
				.setLabel('2')
				.setStyle(ButtonStyle.Secondary);
			
			const num3 = new ButtonBuilder()
				.setCustomId('n3')
				.setLabel('3')
				.setStyle(ButtonStyle.Secondary);
		
			const num4 = new ButtonBuilder()
				.setCustomId('n4')
				.setLabel('4')
				.setStyle(ButtonStyle.Secondary);
		
			const num5 = new ButtonBuilder()
				.setCustomId('n5')
				.setLabel('5')
				.setStyle(ButtonStyle.Secondary);
		
			const num6 = new ButtonBuilder()
				.setCustomId('n6')
				.setLabel('6')
				.setStyle(ButtonStyle.Secondary);
		
			const num7 = new ButtonBuilder()
				.setCustomId('n7')
				.setLabel('7')
				.setStyle(ButtonStyle.Secondary);
		
			const num8 = new ButtonBuilder()
				.setCustomId('n8')
				.setLabel('8')
				.setStyle(ButtonStyle.Secondary);
		
			const num9 = new ButtonBuilder()
				.setCustomId('n9')
				.setLabel('9')
				.setStyle(ButtonStyle.Secondary);
		
			const num0 = new ButtonBuilder()
				.setCustomId('n0')
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

            return [row1,row2,row3,row4]
}