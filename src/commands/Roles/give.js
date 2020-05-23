const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Assigns yourself a role with a specific color',
            usage: '(rolename:string)',
            extendedHelp: 'This is the same as Aigis\' old \`give color` command'
        });
    }

    run(msg, [rolename]) {
        
        let myRole = msg.guild.roles.find(role => role.name === rolename);
        if(myRole != undefined) {
            if(msg.member.roles.has(myRole.id)) {
                msg.channel.send(`You already have the ${rolename} role!`);
             } else {
                 msg.member.roles.add(myRole).catch(console.error);
                 msg.channel.send(`You've been given the ${rolename} role!`);
             }
        } else {
            msg.send("That role doesn't exist!")
        }
    }
    
};