#!/usr/bin/env node

'use strict';

const readline = require('readline');
const color = require('./lib/colors');
const data = require('./lib/data');

const ncah =
(`           __                           __
          /  |                         /  |
  ______  $$ |____    ______   ______  $$ |____    ______   _____  ____
 /      \\ $$      \\  /      \\ /      \\ $$      \\  /      \\ /     \\/    \\
 $$$$$$  |$$$$$$$  |/$$$$$$  |$$$$$$  |$$$$$$$  | $$$$$$  |$$$$$$ $$$$  |
 /    $$ |$$ |  $$ |$$ |  $$/ /    $$ |$$ |  $$ | /    $$ |$$ | $$ | $$ |
\u001B[31;1m/$$$$$$$ |$$ |__$$ |$$ |     /$$$$$$$ |$$ |  $$ |/$$$$$$$ |$$ | $$ | $$ |
$$    $$ |$$    $$/ $$ |     $$    $$ |$$ |  $$ |$$    $$ |$$ | $$ | $$ |\u001B[0m
 \u001B[31m$$$$$$$/ $$$$$$$/  $$/       $$$$$$$/ $$/   $$/  $$$$$$$/ $$/  $$/  $$/\u001B[0m

Usage: abraham -help`
);

const USAGE = (`
  Usage: abraham <options>

  where <option> is:
      -help     -h              print this message
      -info     -i <property>   select information: [name, email, web]
      -version  -v              print the package version information and exit
      -social	-s <social>     select social network: [github, twitter, linkedin] or -all
      -contact  -c              contact me by email
      -resume                   view resume
`);

const pkgVersion = require('./package').version;

const args = process.argv.slice(2);

switch (args[0]) {
	case '-help':
	case '-h':
		console.log(USAGE);
		break;

	case '-info':
	case '-i':
		switch (args[1]) {
			case 'name':
				console.log(data.name);
				break;
			case 'email':
				console.log(data.email);
				break;
			case 'web':
				console.log(data.web);
				break;
			default:
				console.log('Usage: abraham -info <property>  select information about me:  [name, email, web]');
		}
		break;
	case '-version':
	case '-v':
		console.log(pkgVersion);
		break;

	case '-social':
	case '-s':
		switch (args[1]) {
			case 'github':
				console.log('Github: ' + color.orange + data.github + color.reset);
				openURL(data.github);
				break;
			case 'twitter':
				console.log(' Twitter: ' + color.cyan + data.twitter + color.reset);
				openURL(data.twitter);
				break;
			case 'linkedin':
				console.log('Linkedin: ' + color.blue + data.linkedin + color.reset);
				openURL(data.linkedin);
				break;
			case '-all':
				console.log('Github: ' + color.orange + data.github + color.reset + '\n' +
							'Twitter: ' + color.cyan + data.twitter + color.reset + '\n' +
							'Linkedin: ' + color.blue + data.linkedin + color.reset
				);
				break;
			default:
				console.log('Usage: abraham -social	-s <social>     select social network: [github, twitter, linkedin]');
		}
		break;
	case '-contact':
	case '-c':
		openURL('mailto:' + data.email);
		break;
	case '-resume':
		console.log(`
Resume Usage:

abraham -resume online           view resume hosted online
abraham -resume here             view command line interface resume
`);
		const rl = readline.createInterface(process.stdin, process.stdout);
		rl.question('>>> ', answer => {
			console.log(`your answer is ${answer}`);

			rl.close();
		});
		break;
	default:
		console.log(ncah);
}

function openURL(url) {
	const start = (process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open');
	require('child_process').exec(start + ' ' + url);
}
