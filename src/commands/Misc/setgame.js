const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Change the Currently Playing text',
            usage: "<game:string>"
        });
    }

    run(msg, [game]) {
        this.client.user.setPresence({ 
            activity: { 
                name: game
            }})
            .then(msg.send(`Set my currently playing status to ${game}`))
            .catch(console.error);
    }
    
};