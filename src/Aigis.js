const { Client } = require('klasa');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, 'data/.env')});

Client.use(require('klasa-dashboard-hooks'));

Client.defaultGuildSchema.add('quoteChannel', 'textchannel')

Client.defaultGuildSchema.add('logChannel', 'textchannel')

Client.defaultGuildSchema.add('saydata', 'any')

Client.defaultGuildSchema.add('colors', 'any')

Client.defaultGuildSchema.add('bans', 'any')

Client.defaultUserSchema.add('warns', 'any')

Client.defaultClientSchema
	.add('commandUses', 'integer', { 'default': 0, 'configurable': false })

Client.defaultPermissionLevels
    .add(5, ({ guild, member }) => guild && member.permissions.has('MANAGE_MESSAGES'))

const AigisClient = new Client ({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    fetchAllMembers: false,
    createPiecesFolders: false,
    prefix: process.env.PREFIX,
    commandEditing: true,
    disableEveryone: true,
    ignoreBots: false,
    presence: { activity: { name: 'Persona 3', type: 'PLAYING' } },
    typing: false,
    prefixCaseInsensitive: true,
    owner: '147800635046232064',
    dashboardHooks: {
        apiPrefix: '',
		port: 3333
    },
    readyMessage: (client) => `Successfully initialized. Ready to serve ${client.guilds.size} guilds.`});

AigisClient.login(process.env.TOKEN);