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
		label: 'abranhe.com',
		value: 'https://abranhe.com'
	},
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
		label: 'Blog',
		value: 'https://blog.abranhe.com'
	},
	{
		label: 'npm',
		value: 'https://npmjs.com/~abranhe'
	},
	{
		label: 'pip',
		value: 'https://pypi.org/user/abranhe'
	},
	{
		label: 'maven',
		value: 'https://search.maven.org/search?q=abranhe'
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
		value: 'https://feedback.abranhe.com'
	},
	{
		label: 'View Source Code',
		value: 'https://github.com/abranhe/abraham'
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
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
