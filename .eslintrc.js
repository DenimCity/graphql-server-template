module.exports = {
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module',
		allowImportExportEverywhere: false,
		codeFrame: false
	},
	extends: [ 'airbnb', 'prettier' ],
	env: {
		browser: true,
		jest: true
	},
	rules: {
		'max-len': [ 'error', { code: 100 } ],
		'prefer-promise-reject-errors': [ 'off' ],
		'react/jsx-filename-extension': [ 'off' ],
		'react/jsx-curly-newline': [ 'off' ],
		'no-param-reassign': [ 'off' ],
		'no-shadow': [ 'off' ],
		'import/export': [ 'off' ],
		camelcase: [ 'off' ],
		'react/prop-types': [ 'warn' ],
		'no-return-assign': [ 'off' ]
	}
};
