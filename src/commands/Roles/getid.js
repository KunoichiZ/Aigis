const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Get the ID of a role without pinging it',
            usage: '(rolename:string)',
            extendedHelp: 'This is the same as Aigis\' old \`get id` command'
        });
    }

    run(msg, [rolename]) {
        let myRole = msg.guild.roles.find(role => role.name === rolename);
        if(myRole != undefined) {
            msg.send(`The ID for the role \`${rolename}\` is \`${myRole.id}\`.`)
        } else {
            msg.send("That role doesn't exist!")
        }
    }
    
};