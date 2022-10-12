const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Development Roles')
	// .setDescription('')
	.addFields(
		{ name: 'DEV Team', value: 'Heavy Scripting, Game Mechanics', inline: false },
		{ name: '3D Team', value: '3D Modelling, Rigging, Map Design', inline: false },
		{ name: 'SFX Team', value: 'Minor Scripting, Visual Effects, Audio Effects', inline: false },
		{ name: 'ART Team', value: '2D Art, Texture Creation', inline: false },
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
			channel.send({ embeds: [exampleEmbed], components: [{ type: 1, components: [
				{ type: 2, style: 1, label: 'Join DEV', custom_id: 'BtnDEV' },
				{ type: 2, style: 1, label: 'Join 3D', custom_id: 'Btn3D' },
				{ type: 2, style: 1, label: 'Join SFX', custom_id: 'BtnSFX' },
				{ type: 2, style: 1, label: 'Join ART', custom_id: 'BtnART' },
				{ type: 2, style: 1, label: 'Join QA', custom_id: 'BtnQA' }] }] });
		} else {
			return interaction.reply('Insufficient Permissions');
		}
	},
};