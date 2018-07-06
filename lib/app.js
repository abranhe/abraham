'use strict'
const {h, Colors, Text} = require('ink');
const SelectInput = require('ink-select-input');
const Image = require('ink-image');
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
				process.exit();
		}
	}
];

module.exports = () => (
		<div>
			<br/>
				<Image src='./resources/abraham.png'/>
			<br/>
				<div>
					<Text>You can check dates on your calendar. I type $ date on bash 😎 </Text>
				</div>
				<div>
					<SelectInput items={items} onSelect={handleSelect}/>
				</div>
			<br/>
		</div>
);
