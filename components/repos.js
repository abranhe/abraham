'use strict';

const {h, Component, Color} = require('ink');
const axios = require('axios');
const terminalLink = require('terminal-link');
const BigText = require('ink-big-text');
const Ora = require('ora');
const helper = require('../helper');

const spinner = new Ora();

class Repos extends Component {
	constructor(props) {
    super(props);

    this.state = {
    	repos: [],
    	connection: true
    };
	}

	componentDidMount() {
    spinner.start();
    spinner.indent = 2;
    spinner.text = 'Loading Repositories';
    axios
    	.get('https://latest-repos.abranhe.now.sh')
    	.then(res => {
        this.setState({repos: res.data.reverse()});
        spinner.clear();
        spinner.stop();
    	})
    	.catch(err => {
        this.setState({connection: false});
        setTimeout(() => {
        	spinner.color = 'red';
        	spinner.text = 'Trying to fetch repositories';
        }, 2000);

        setTimeout(() => {
          spinner.fail('Unable to fetch latest repostories');
        }, 4000);
    	});
	}

	isIterm() {
		return Boolean(process.env.ITERM_PROFILE);
	}

	renderRepoLanguage(language) {
		return <Color hex={language.color}>{language.name}</Color>;
	}

	renderRepositoriesInfo(repo) {
		if (this.isIterm()) {
			return (
				<span>
					<Color blue>{terminalLink(repo.name, repo.url)}</Color>
					{helper.indent()}
          ({this.renderRepoLanguage(repo.primaryLanguage)})
					<Color gray>: {repo.description}</Color>
				</span>
			);
		}
		return (
			<span>
				<Color blue>{repo.name}</Color>
				{helper.indent()}
          ({this.renderRepoLanguage(repo.primaryLanguage)})
			</span>
		);
	}

	renderRepos() {
		const {repos} = this.state;

		return (
			<div>
				<BigText font="chrome" text="Latest Repos"/>
				{repos.map(repo => {
					return (
						<div>
							{helper.indent()}
							{this.renderRepositoriesInfo(repo)}
						</div>
					);
				})}
			</div>
		);
	}

	renderErrorConnecting() {
		return <Color red>We couldn't fetch any repositories</Color>;
	}

	render() {
		const {connection} = this.state;
		return <div>{connection ? this.renderRepos() : null}</div>;
	}
}

module.exports = Repos;
