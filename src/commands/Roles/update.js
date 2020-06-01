const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Change an existing role\'s color value.',
            usage: '(rolename:string) (hex:regex/#?([\\da-f]{6})/i)',
            usageDelim: ',',
            extendedHelp: 'This is the same as Aigis\' old \`update color` command'
        });
    }

    run(msg, [rolename, [, hex]]) {
        let myRole = msg.guild.roles.find(role => role.name === rolename);
        if(myRole != undefined) {
            myRole.edit({ color: hex })
            .then(msg.send(`Edited role \`${rolename}\` hex color to \`#${hex}\``))
        } else {
            msg.send("That role doesn't exist!")
        }
    }
    
};