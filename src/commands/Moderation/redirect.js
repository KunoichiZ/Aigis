const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Redirect discussion to another channel.',
            usage: "<channel:channel>"
        });
    }

    run(msg, [channel]) {
        msg.send(`This is not the place for this type of discussion. Please go to ${channel} to continue this conversation.`)
    }
    
};