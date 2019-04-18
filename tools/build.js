const MUI = require('@nsis/mui-language-strings');
const NLF = require('@nsis/nlf');
const fs = require('fs');
const globby = require('globby');
const rimraf = require('rimraf');
const sortKeys = require('sort-keys');
const { basename, extname, join } = require('path');
const { nsisDir } = require('makensis');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const rimrafAsync = promisify(rimraf);
const mkdir = promisify(fs.mkdir);

(async () => {
  try {
    await rimrafAsync('./data');
    await mkdir('./data');
    await mkdir('./data/languages');
  } catch(e) {
    throw new Error(e);
  }

  const output = {};
  const languageDir = join(await nsisDir(), 'Contrib', 'Language files');
  let languageFiles = await globby(`${languageDir}/*.nlf`);

  languageFiles = languageFiles.sort();

   for (languageFile of languageFiles) {
    const langExtname = extname(languageFile);
    const langBasename = basename(languageFile, langExtname);

    const nlfFile = await readFile(`${languageDir}/${langBasename}.nlf`, 'utf8');
    const nlfContent = NLF.parse(nlfFile);


    const nshFile = await readFile(`${languageDir}/${langBasename}.nsh`, 'utf8');
    const nshContent = await MUI.parse(nshFile, { looseQuotes: true });

    output[nshContent.file] = {
      id: nlfContent.id,
      code_page: nlfContent.code_page,
      rtl: nlfContent.rtl,
      english: nshContent.english,
      native: nshContent.native,
      native_ascii: nshContent.nativeASCII,
    };

    try {
      await writeFile(`data/languages/${nshContent.file}.json`, JSON.stringify(nlfContent, null, 2), 'utf8');
    } catch (e) {
      throw new Error(e);
    }
  }

  try {
    await writeFile(`data/languages/${nshContent.file}.json`, JSON.stringify(nlfContent, null, 2), 'utf8');
  } catch (e) {
    await writeFile('data/meta.json', JSON.stringify(output, null, 2), 'utf8');
  }
})();
