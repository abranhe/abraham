import {h, renderToString} from 'ink';
import importJsx from 'import-jsx';
import test from 'ava';

const Ui = importJsx('./ui');
const Repos = importJsx('./components/repos');
const Social = importJsx('./components/social');

test('output', t => {
	const actual = renderToString(<Ui/>);
	const expected = renderToString(
		<div>
			<Repos/>
			<Social/>
		</div>,
  );

  t.is(actual, expected);
});
