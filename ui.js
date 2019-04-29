'use strict';

const {h, Component} = require('ink');
const importJsx = require('import-jsx');

const Repos = importJsx('./components/repos');
const Social = importJsx('./components/social');

class UI extends Component {
	render() {
		return (
			<div>
				<Repos/>
				<Social/>
			</div>
		);
	}
}

module.exports = UI;
