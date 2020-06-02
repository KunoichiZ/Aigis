const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Change an existing color role\'s name.',
            usage: '(rolename:string) (newname:string)',
            usageDelim: ',',
            extendedHelp: 'This is the same as Aigis\' old \`rename color` command',
            permissionLevel: 6,
            requiredPermissions: 'MANAGE_ROLES'
        });
    }

    run(msg, [rolename, newname]) {
        let myRole = msg.guild.roles.find(role => role.name === rolename);
        if(myRole != undefined) {
            myRole.edit({ name: newname })
            .then(msg.send(`Edited role \`${rolename}\` name to \`${newname}\``))
        } else {
            msg.send("That role doesn't exist!")
        }
    }
    
};