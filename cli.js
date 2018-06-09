#!/usr/bin/env node

const color = require('./colors');

const help = (`
  Usage
    $ abraham <Option> …
    Options:
      -help               View Information
      -version            Know the version of the package
      -social <media>     Social Network
               github
               twitter
               linkedin
`);

const ERROR = color.red + 'ERROR' + color.reset + help;

const INFO = (`
  Name: Carlos Abraham
  Website: www.19cah.com
  Email: abraham@19cah.com
  Github: @19cah
  Twitter: @19cah
  linkedin: @19cah
`);

const version = require('./package').version;

const args = process.argv.slice(2);

switch (args[0]) {
	case '-help':
		console.log(help);
		break;

	case '-version':
		console.log(versio);
		break;

	case '-social':
		switch (args[1]) {
			case 'github':
				openURL('https://www.github.com/19cah');
				break;
			case 'twitter':
				openURL('https://twitter.com/19cah');
				break;
			case 'linkedin':
				openURL('https://www.linkedin.com/in/19cah');
				break;
			default:
				console.log(INFO);
		}
		break;
	default:
		console.log(ERROR);
}

function openURL(url) {
	const start = (process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open');
	require('child_process').exec(start + ' ' + url);
}
