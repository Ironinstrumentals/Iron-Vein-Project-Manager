const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { TextChannel } = require('discord.js');
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Development Roles')
	// .setDescription('')
	.addFields(
		// { name: '\u200B', value: '\u200B' },
		{ name: 'Management', value: 'Task Assignment, Priority Management, Crisis Management, Conflict Management', inline: false },
		{ name: 'DEV Team', value: 'Heavy Scripting, Game Mechanics', inline: false },
		{ name: '3D Team', value: '3D Modelling, Rigging, Map Design', inline: false },
		{ name: 'SFX Team', value: 'Minor Scripting, Visual Effects, Audio Effects', inline: false },
		{ name: 'ART Team', value: '2D Art, Texture Creation', inline: false },
		{ name: 'UI Team', value: 'Minor Scripting, UI Design', inline: false },
		{ name: 'QA Team', value: 'PC Testing, Console Testing, Mobile Testing, VR Testing', inline: false },
	);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('embed-roles')
		.setDescription('Create the role embeds'),
	async execute(interaction) {
		if (interaction.user.id === '145750364279406592') {
			const channelId = interaction.channelId;
			const channel = interaction.guild.channels.cache.find(i => i.id === channelId);
			channel.send({ embeds: [exampleEmbed] });
		} else {
			return interaction.reply('Insufficient Permissions');
		}
	},
};