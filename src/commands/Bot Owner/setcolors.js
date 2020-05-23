const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, { 
            description: 'Sets the colored roles for the guild'
        });
    }

    run(msg) {
        let colors = ["Dark Hour Clock Blue", "Aigis' Hair", "Aigis' Eyes", "Sweet Indigo", "Cyan", "Pink", "haha gae", "P5 Red", "Potato Gold", "ShrinePink", "Fuuka's Hair", "Invisible", "P1 Purple", "Peachy", "dark red", "Velvet Room Blue"]
        msg.guild.settings.set('colors', colors)
    }
    
};