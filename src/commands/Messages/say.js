const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            aliases: ['copycat', 'repeat', 'echo', 'parrot'],
            description: 'Replies with the text you provide',
            usage: "<text:string>"
        });
    }

    run(msg, [text]) {
        const saydata = {
            memberHexColor: msg.member.displayHexColor,
            commandPrefix: msg.guild.settings.get('prefix'),
            authorTag: msg.author.tag,
            authorID: msg.author.id,
            avatarURL: msg.author.displayAvatarURL({format: 'png'}),
            messageDate: msg.createdAt,
            argString: text
          };
      
          msg.guild.settings.set('saydata', saydata);
          console.log(msg.guild.settings.get('saydata'))
      
          if (msg.deletable) {
            msg.delete();
          }
      
          return msg.send(text);
    }
};