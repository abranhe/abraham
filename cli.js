#!/usr/bin/env node
'use strict';
const meow = require('meow');
const importJsx = require('import-jsx');
const {h, render} = require('ink');

const app = importJsx('./lib/app');

meow(`
	Usage
	  $ abraham
`);

render(h(app));
