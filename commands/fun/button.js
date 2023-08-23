const { ButtonBuilder, ButtonStyle} = require('discord.js');

const button = new ButtonBuilder({
	style: ButtonStyle.Secondary,
	label: 'Click Me',
})
	.setEmoji({ name: '🙂' })
	.setCustomId('another cool button');


module.exports = {button};