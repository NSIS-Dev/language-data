import { defineConfig } from 'tsdown';
import Macros from 'unplugin-macros/rollup';

export default defineConfig({
	clean: true,
	dts: true,
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
	plugins: [Macros()],
});
