import { defineConfig } from 'tsdown';

export default defineConfig({
	clean: true,
	deps: {
		alwaysBundle: ['@nsis/dent', '@nsis/nlf', 'makensis', 'micromatch', 'open', 'vscode-get-config', 'which'],
		neverBundle: ['vscode'],
		onlyBundle: false,
	},
	entry: {
		index: 'src/index.ts',
		codepages: 'src/codepages.ts',
		meta: 'src/meta.ts',
		languages: 'src/languages.ts',
	},
	format: ['cjs', 'esm'],
	minify: true,
	platform: 'node',
	target: 'es2020',
	treeshake: true,
});
