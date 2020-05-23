const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Create a role with a specific color',
            usage: '(hex:regex/#?([\\da-f]{6})/i) (name:string)',
            usageDelim: ',',
            permissionLevel: 6
        });
    }

    run(msg, [[, hex], name]) {
        
        let myRole = msg.guild.roles.find(role => role.name === name);
        if(myRole == undefined) {
            msg.guild.roles.create({
                data: {
                    name: name,
                    color: hex,
                }
            })
            .then(msg.send(`Created a role named ${name} with the color of #${hex}`))
            .catch(console.error);
        } else {
            msg.send('That role already exists!')
        }
    }
    
};