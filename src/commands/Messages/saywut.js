const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['saywat'],
            description: 'Shows who used the say command last'
        });
    }

    run(msg) {
        const saycontents = msg.guild.settings.get('saydata');

        if (msg.deletable) {
            msg.delete();
        }

        if (saycontents) {
            const wutEmbed = new MessageEmbed()
              .setColor(saycontents.memberHexColor)
              .setTitle('Wrote')
              .setAuthor(`${saycontents.authorTag}`, saycontents.avatarURL)
              .setFooter(`Last ${saycontents.commandPrefix}say message author | ${moment(saycontents.messageDate).format('dddd, MMMM Do YYYY, h:mm:ss a')}`, this.client.user.avatarURL)
              .setDescription(saycontents.argString);
      
            return msg.send(wutEmbed);
          }

    }
};