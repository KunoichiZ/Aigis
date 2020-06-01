const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Grant yourself the specified opt-in role',
            usage: '(rolename:string)',
            extendedHelp: 'This is the same as Aigis\' old \`grant` command'
        });
    }

    run(msg, [rolename]) {
        let roles = ['Spoilers', 'spoilers', 'Vent', 'vent', 'Brave Space', 'brave space']
        if(roles.includes(rolename)) {
            switch(rolename) {
                case 'Spoilers':
                case 'spoilers':
                    let spoilersRole = msg.guild.roles.find(role => role.name === 'Spoilers');
                    if(msg.member.roles.has(spoilersRole.id)) {
                        msg.channel.send(`You already have the \`Spoilers\` role!`);
                    } else {
                         msg.member.roles.add(spoilersRole).catch(console.error);
                         msg.channel.send(`You've been given the \`Spoilers\` role!`);
                    }
                    break;
                case 'Vent':
                case 'vent':
                    let ventRole = msg.guild.roles.find(role => role.name === 'Vent');
                    if(msg.member.roles.has(ventRole.id)) {
                        msg.channel.send(`You already have the \`Vent\` role!`);
                    } else {
                         msg.member.roles.add(ventRole).catch(console.error);
                         msg.channel.send(`You've been given the \`Vent\` role!`);
                    }
                    break;
                case 'Brave Space':
                case 'brave space':
                    let bsRole = msg.guild.roles.find(role => role.name === 'Brave Space');
                    if(msg.member.roles.has(bsRole.id)) {
                        msg.channel.send(`You already have the \`Brave Space\` role!`);
                    } else {
                         msg.member.roles.add(bsRole).catch(console.error);
                         msg.channel.send(`You've been given the \`Brave Space\` role!`);
                    }
                    break;
            }
        } else {
            msg.send("That is not one of the opt-in roles!")
        }
    }
    
};