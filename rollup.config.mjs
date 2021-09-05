import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';

const plugins = [
  commonjs(),
  json()
];

const compilerOptions = {
  allowSyntheticDefaultImports: true,
  moduleResolution: "node",
  resolveJsonModule: true,
  strictNullChecks: true,
  typeRoots: ['./types', './node_modules/@types']
};

const external = [
];

export default [
  {
    external,
    input: 'src/index.ts',
    output: {
      file: 'dist/index.cjs',
      format: 'cjs'
    },
    plugins: [
      ...plugins,
      typescript(compilerOptions)
    ]
  },
  {
    external,
    input: 'src/index.ts',
    output: {
      file: 'dist/index.mjs',
      format: 'esm'
    },
    plugins: [
      ...plugins,
      typescript({
        ...compilerOptions,
        module: "ES2020",
        moduleResolution: "node"
      })
    ]
  }
];
