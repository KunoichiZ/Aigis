const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['del'],
            description: 'Deletes the message',
            usage: "<amount:integer>",
            permissionLevel: 5
        });
    }

    run(msg, [amount]) {
        msg.channel.bulkDelete(amount + 1)
            .then(messages => msg.send(`Bulk deleted ${messages.size} messages`))
            .catch(console.error);
    }
};