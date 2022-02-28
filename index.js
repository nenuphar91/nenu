const {CommandoClient} = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: '-',
    owner: '391959610400964610',
    invite:  'https://discord.gg/9AhxrqaJkk'
});

client.registry
    .registerDefaultTypes()
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerGroup('mookavibe', 'MOOKAVIBE')
    .registerCommandsIn(path.join(__dirname, 'commands'));


client.once('ready', () => {
    console.log(`connecté en tant que ${client.user.tag} - (${client.user.id})`);
})

client.on('error', (error) => console.error(error));

client.login('OTQ3ODMxMTc1MjQwNjM4NTE0.Yhy-kg.rfmqgJrbf4TCTdPwdHEYGY3S9wI');