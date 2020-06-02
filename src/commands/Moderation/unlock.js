const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Unlock a channel',
            aliases: ['ul'],
            requiredPermissions: ['MANAGE_CHANNELS'],
            permissionLevel: 6
        });
    }

    async run(msg) {
        const unlockEmbed = new MessageEmbed();
        const modlogsChannel = msg.guild.settings.get('logChannel')
        const overwrite = await msg.channel.overwritePermissions({
            permissionOverwrites: [
              {
                allow: ['SEND_MESSAGES'],
                id: msg.channel.guild.roles.everyone
              }
            ],
            reason: 'Channel Lockdown',
        });
      
        msg.channel.overwritePermissions(msg.guild.id, overwrite)

        unlockEmbed
            .setColor(msg.member.displayHexColor)
            .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
            .setDescription(`**Action:** 🔓 unlocked the \`${msg.channel.name}\` channel.
            **Details:** This channel can now be used by everyone again. Use \`${msg.guild.settings.get('prefix')}lockdown\` in this channel to (re)-lock it.`)
            .setTimestamp();

        this.client.channels.get(modlogsChannel).send(unlockEmbed);

        if (msg.deletable) {
            msg.delete();
        }
    }
    
};