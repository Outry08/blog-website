export const LintRules = {
	"prefer-const": "error",
	"@typescript-eslint/no-explicit-any": "error",
	"react-hooks/rules-of-hooks": "error",
	"semi": ["error", "always"],
	"no-trailing-spaces": "error",
	"eol-last": "error",
	"quotes": ["error", "double"],
	"comma-dangle": ["error", {
		"arrays": "always-multiline",
		"objects": "always-multiline",
		"imports": "always-multiline",
		"exports": "always-multiline",
		"functions": "never",
	}],
	"indent": ["error", "tab"],
};
