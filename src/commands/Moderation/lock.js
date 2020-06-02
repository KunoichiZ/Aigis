const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Lock a channel',
            aliases: ['ld', 'lockdown'],
            requiredPermissions: ['MANAGE_CHANNELS'],
            permissionLevel: 6,
        });
    }

    async run(msg) {
        const lockEmbed = new MessageEmbed();
        const modlogsChannel = msg.guild.settings.get('logChannel')
        const overwrite = await msg.channel.overwritePermissions({
            permissionOverwrites: [
                {
                    allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                    id: msg.member.roles.highest.id
                },
                {
                    deny: ['SEND_MESSAGES'],
                    id: msg.channel.guild.roles.everyone
                }
            ],
            reason: 'Channel Lockdown',
          });
        msg.channel.overwritePermissions(msg.guild.id, overwrite)
        lockEmbed
            .setColor(msg.member.displayHexColor)
            .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
            .setDescription(`**Action:** 🔒 locked the \`${msg.channel.name}\` channel.\n
                **Details:** Only staff can now access this channel. Use \`${msg.guild.settings.get('prefix')}unlock\` in this channel to unlock the channel`)
            .setTimestamp();
        this.client.channels.get(modlogsChannel).send(lockEmbed);

        if (msg.deletable) {
            msg.delete();
        }
        
        // return msg.channel.send(lockEmbed);
    }
    
};