const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Remove the specified role from yourself.',
            usage: '(rolename:string)',
            extendedHelp: 'This is the same as Aigis\' old \`remove color` command'
        });
    }

    run(msg, [rolename]) {
        let myRole = msg.guild.roles.find(role => role.name === rolename);
        if(myRole != undefined) {
            if(msg.member.roles.has(myRole.id)) {
                msg.member.roles.remove(myRole).catch(console.error);
                msg.channel.send(`\`${rolename}\` role removed successfully!`);
            } else {
                 msg.send('I cannot remove a role you don\'t have!')
            }
        } else {
            msg.send("That role doesn't exist!")
        }
    }
    
};