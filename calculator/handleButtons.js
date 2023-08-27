const { evaluate } = require('mathjs');
const { Collection } = require('discord.js');
const interaction = require('../events/interaction');

const collection = new Collection();

module.exports = function handleButton(button){

    const value = button.customId.split('n')[1];
   // if(["+","-"].includes(value) && collection.has(button.message.id) && collection.get(button.message.id).endsWith("+"))return interaction.reply('no operstor ')

    collection.set(button.message.id, collection.has(button.message.id)?collection.get(button.message.id)+value:value)
    if(["="].includes(value)) {
        var question = collection.get(button.message.id);
        question = question.replace('=', '');
        const result = evaluate(question);
        collection.set(button.message.id, result.toString())

    }

    button.reply(collection.get(button.message.id));
}