const textColorFromBackgroundColor = color => {
	if (color.length < 5) {
		color += color.slice(1);
	}

	return parseInt(color.replace('#', '0x'), 16) > 0xFFFFFF / 2 ?
		'#333' :
		'#fff';
};

const indent = () => {
	return ' ';
};

module.exports = {
	textColorFromBackgroundColor,
	indent
};
