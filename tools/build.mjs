import MUI from '@nsis/mui-language-strings';
import * as NLF from '@nsis/nlf';
import fs from 'fs';
import globby from 'globby';
import { rimraf } from 'rimraf';
import { basename, extname, join } from 'path';
import { nsisDir } from 'makensis';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);

  try {
    await rimraf('./data');
    await mkdir('./data');
    await mkdir('./data/languages');
  } catch(e) {
    throw new Error(e);
  }

  const output = {};
  const languageDir = join(await nsisDir(), 'Contrib', 'Language files');
  let languageFiles = await globby(`${languageDir}/*.nlf`);

  languageFiles = languageFiles.sort();

   await Promise.all(languageFiles.map(async languageFile => {
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
      native_ascii: nshContent.nativeASCII
    };

    try {
      await writeFile(`data/languages/${nshContent.file}.json`, JSON.stringify(nlfContent, null, 2), 'utf8');
    } catch (e) {
      throw new Error(e);
    }
  }));

  try {
    await writeFile(`data/languages/${nshContent.file}.json`, JSON.stringify(nlfContent, null, 2), 'utf8');
  } catch (e) {
    await writeFile('data/meta.json', JSON.stringify(output, null, 2), 'utf8');
  }
