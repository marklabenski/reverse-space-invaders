import path from 'path';

module.exports = {
	debug: true,
	devtool: '#inline-source-map',
	entry: {
	  main: './target/main.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '../dist/scripts/',
		filename: '[name].bundle.js',
		chunkFilename: '[id].bundle.js'
	}
};
