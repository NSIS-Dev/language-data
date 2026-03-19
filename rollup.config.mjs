import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';

const plugins = [commonjs(), json()];

const compilerOptions = {
	allowSyntheticDefaultImports: true,
	moduleResolution: 'node',
	resolveJsonModule: true,
	strictNullChecks: true,
	typeRoots: ['./types', './node_modules/@types'],
};

const external = [];

const input = {
	index: 'src/index.ts',
	codepages: 'src/codepages.ts',
	meta: 'src/meta.ts',
	languages: 'src/languages.ts',
};

export default [
	{
		external,
		input,
		output: {
			dir: 'dist',
			format: 'cjs',
			entryFileNames: '[name].cjs',
			chunkFileNames: '_chunks/[name]-[hash].cjs',
		},
		plugins: [...plugins, typescript(compilerOptions)],
	},
	{
		external,
		input,
		output: {
			dir: 'dist',
			format: 'esm',
			entryFileNames: '[name].mjs',
			chunkFileNames: '_chunks/[name]-[hash].mjs',
		},
		plugins: [
			...plugins,
			typescript({
				...compilerOptions,
				module: 'ES2020',
				moduleResolution: 'node',
			}),
		],
	},
];
