const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['add'],
            description: 'Quote a message using a message ID',
            usage: "<quote:string>"
        });
    }

    run(msg, [quote]) {
        let quoteChannel = msg.guild.settings.get('quoteChannel');
        console.log(quoteChannel)
        if(!quoteChannel) {
            msg.send("No quote channel has been configured!" + ` Use \`${msg.guild.settings.get('prefix')}conf set quoteChannel\` to set the quote channel.`)
        } else {
            msg.channel.messages.fetch(quote)
            .then(message => {
                const fetchdMsg = message;
                const user = this.client.users.get(fetchdMsg.author.id);
                const member = msg.guild.members.get(fetchdMsg.author.id);
                const timestamp = fetchdMsg.createdTimestamp;
                const formatted = moment(timestamp).format('L');

                const quoteEmbed = new MessageEmbed()
                    .setAuthor(fetchdMsg.author.username + "#" + fetchdMsg.author.discriminator, user.displayAvatarURL())
                    .setColor(member.displayHexColor)
                    .setDescription(fetchdMsg.content)
                    .setFooter(formatted);
                const channel = this.client.channels.get(msg.guild.settings.get('quoteChannel'));
                return channel.send(quoteEmbed);
                // return quoteChannel.send(quoteEmbed)    
            });
        }
    }
};