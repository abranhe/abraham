#!/usr/bin/env node
'use strict';
const path = require('path');
const meow = require('meow');
const termImg = require('term-img');
const importJsx = require('import-jsx');
const {h, render} = require('ink');

const app = importJsx('./lib/app');

meow(`
	Usage
	  $ abraham
`);

termImg(path.join(__dirname, './resources/abraham.png'));

render(h(app));
