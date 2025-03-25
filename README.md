# @nsis/language-data

[![npm](https://flat.badgen.net/npm/license/@nsis/language-data)](https://www.npmjs.org/package/@nsis/language-data)
[![npm](https://flat.badgen.net/npm/v/@nsis/language-data)](https://www.npmjs.org/package/@nsis/language-data)
[![CI](https://img.shields.io/github/actions/workflow/status/NSIS-Dev/language-data/default.yml?style=flat-square)](https://github.com/NSIS-Dev/language-data/actions)

## Description

Data for contributed [NSIS language files](https://github.com/kichik/nsis/tree/master/Contrib/Language%20files) in JSON format

*Current version: NSIS v3.11*

## Installation

 Use your preferred package manager to install this generator

```sh
yarn add @nsis/language-data || npm i @nsis/language-data
```

## Usage

Use ESM imports or `require()` to include the module:

```js
// ES Module
import { languages } from '@nsis/language-data';

// CommonJS
const { languages } = require('@nsis/language-data');
```

Several exports are available: `default`, `meta`, `languages` and individual languages (names are matching the original `.nlf` files):

```js
// Import default
import languageData from '@nsis/language-data';

// Import by type
import { meta, languages } from '@nsis/language-data';

// Import by language
import { English, PortugueseBR, SimpChinese } from '@nsis/language-data';
```

## Related

- [nlf](https://www.npmjs.com/package/@nsis/nlf) - Parser and stringifier for NSIS Language Files

## License

This work is licensed under the [zlib/libpng License](https://opensource.org/licenses/Zlib)
