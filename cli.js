#!/usr/bin/env node
'use strict';

const importJsx = require('import-jsx');
const { h, render } = require('ink');
const meow = require('meow');

const Ui = importJsx('./ui');

const cli = meow(`
	Usage
	  $ abraham
`);

render(h(Ui, cli.flags));
