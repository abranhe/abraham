'use strict';

const {h, Text} = require('ink'); // eslint-disable-line no-unused-vars
const SelectInput = require('ink-select-input'); // eslint-disable-line no-unused-vars
const open = require('opn');

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
		value: 'http://github.com/abranhe'
	},
	{
		label: 'Twitter',
		value: 'https://twitter.com/abranhe'
	},
	{
		label: 'Linkedin',
		value: 'https://linkedin.com/in/abranhe'
	},
	{
		label: 'Website',
		value: 'https://abranhe.com/'
	},
	{
		label: 'Blog',
		value: 'https://blog.abranhe.com/'
	},
	{
		label: 'Contact',
		value: 'mailto:abraham@abranhe.com'
	},
	{
		label: 'Resume',
		value: 'https://resume.abranhe.com'
	},
	{
		label: 'Feedback',
		value: 'https://feedback.abranhe.com/?project=abraham cli&message=I kinda (do/don\'t) like this website because ...'
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
			<Text>i am Carlos Abraham Hernandez an open sourcerer and maker from Miami, Florida</Text>
		</div>
		<div>
			<SelectInput items={items} onSelect={handleSelect}/>
		</div>
	</div>
);
