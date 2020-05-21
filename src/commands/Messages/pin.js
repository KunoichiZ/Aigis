const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Pins the selected message to the channel\'s pinned messages.',
            usage: "<message:string>",
            permissionLevel: 5
        });
    }

    run(msg, [message]) {
        msg.channel.messages.fetch(message)
            .then(result => {
                result.pin();
                msg.send(`Pinned message ID \`${message}\` to this channel.`)
            });
    }
};