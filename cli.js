#!/usr/bin/env node

'use strict';

const color = require('./colors');

const help = (`
  Usage
    $ abraham <options> …
    Options:
      -help     -h              print this message
      -version  -v              print the package version information and exit
      -social	-s <social>     select social network  avilables [github, twitter, linkedin]
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

const pkgVersion = require('./package').version;

const args = process.argv.slice(2);

switch (args[0]) {
	case '-help':
	case '-h':
		console.log(help);
		break;

	case '-version':
	case '-v':
		console.log(pkgVersion);
		break;

	case '-social':
	case '-s':
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
