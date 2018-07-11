'use strict';

const {h, Text} = require('ink'); // eslint-disable-line no-unused-vars
const SelectInput = require('ink-select-input'); // eslint-disable-line no-unused-vars
const open = require('open');

const handleSelect = item => {
	if (item.value) {
		open(item.value);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Github',
		value: 'http://github.com/19cah'
	},
	{
		label: 'Twitter',
		value: 'https://twitter.com/19cah'
	},
	{
		label: 'Linkedin',
		value: 'https://linkedin.com/in/19cah'
	},
	{
		label: 'Website',
		value: 'https://19cah.com/'
	},
	{
		label: 'Blog',
		value: 'https://blog.19cah.com/'
	},
	{
		label: 'Contact',
		value: 'mailto:abraham@19cah.com'
	},
	{
		label: 'Resume',
		value: 'https://19cah.com/resume'
	},
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>I am a computer science student from Miami.<br/>Most of the time in creating open source projects on Github.</Text>
		</div>
		<div>
			<SelectInput items={items} onSelect={handleSelect}/>
		</div>
	</div>
);
