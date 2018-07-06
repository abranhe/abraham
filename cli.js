#!/usr/bin/env node
'use strict';
const path = require('path');
const meow = require('meow');
const termImg = require('term-img');
const terminalImage = require('terminal-image');
const importJsx = require('import-jsx');
const {h, render} = require('ink');

const app = importJsx('./lib/app');

meow(`
	Usage
	  $ abraham
`);

const fallback = async () => {
	const image = await terminalImage.file(path.join(__dirname, './resources/abraham-short.png'));
	console.log(image);
};

termImg(path.join(__dirname, './resources/abraham.png'), {fallback});

render(h(app));
