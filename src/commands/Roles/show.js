const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Lists all color roles that you can assign to yourself',
            usage: '<colors>'
        });
    }

    run(msg) {
        let colors = msg.guild.settings.get('colors')
        let colorEmbed = new MessageEmbed()
            .setTitle('Color Roles')
            .setColor(msg.member.displayHexColor)
            .setDescription(colors.join(", "))
        msg.send(colorEmbed)
    }
    
};