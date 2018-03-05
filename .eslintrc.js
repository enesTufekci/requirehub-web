module.exports = {
	"extends": [
		"standard",
		"standard-react",
		"prettier-standard",
	],
	"plugins": [
		"jest"
	],
	"rules": {
		"jest/no-disabled-tests": "warn",
		"jest/no-focused-tests": "error",
		"jest/no-identical-title": "error",
		"jest/prefer-to-have-length": "warn",
		"jest/valid-expect": "error",
		'import/no-unresolved': 'error',
	},
	"env": {
		"jest/globals": true
	},
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"settings": {
		"import/resolver": {
			"node": {
				"moduleDirectory": ["node_modules", "/"]
			}
		}
}
};