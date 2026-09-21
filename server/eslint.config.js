import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import { LintRules } from "../lint-rules.js";

export default defineConfig([
	globalIgnores(["dist", "node_modules"]),
	{
		files: ["**/*.{ts,tsx,js}"],
		extends: [
			eslint.configs.recommended,
			tseslint.configs.strict,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
		],
		languageOptions: {
			globals: globals.browser,
			parserOptions: { ecmaFeatures: { tsx: true } },
		},
		rules: LintRules,
	},
]);
