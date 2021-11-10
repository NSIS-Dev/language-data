/**
 * Language Meta Data
 */
export { default as meta } from '../data/meta.mjs';

/**
 * Language Data
 */
import { default as Afrikaans } from '../data/languages/Afrikaans.mjs';
import { default as Albanian } from '../data/languages/Albanian.mjs';
import { default as Arabic } from '../data/languages/Arabic.mjs';
import { default as Armenian } from '../data/languages/Armenian.mjs';
import { default as Asturian } from '../data/languages/Asturian.mjs';
import { default as Basque } from '../data/languages/Basque.mjs';
import { default as Belarusian } from '../data/languages/Belarusian.mjs';
import { default as Bosnian } from '../data/languages/Bosnian.mjs';
import { default as Breton } from '../data/languages/Breton.mjs';
import { default as Bulgarian } from '../data/languages/Bulgarian.mjs';
import { default as Catalan } from '../data/languages/Catalan.mjs';
import { default as Corsican } from '../data/languages/Corsican.mjs';
import { default as Croatian } from '../data/languages/Croatian.mjs';
import { default as Czech } from '../data/languages/Czech.mjs';
import { default as Danish } from '../data/languages/Danish.mjs';
import { default as Dutch } from '../data/languages/Dutch.mjs';
import { default as English } from '../data/languages/English.mjs';
import { default as Esperanto } from '../data/languages/Esperanto.mjs';
import { default as Estonian } from '../data/languages/Estonian.mjs';
import { default as Farsi } from '../data/languages/Farsi.mjs';
import { default as Finnish } from '../data/languages/Finnish.mjs';
import { default as French } from '../data/languages/French.mjs';
import { default as Galician } from '../data/languages/Galician.mjs';
import { default as Georgian } from '../data/languages/Georgian.mjs';
import { default as German } from '../data/languages/German.mjs';
import { default as Greek } from '../data/languages/Greek.mjs';
import { default as Hebrew } from '../data/languages/Hebrew.mjs';
import { default as Hindi } from '../data/languages/Hindi.mjs';
import { default as Hungarian } from '../data/languages/Hungarian.mjs';
import { default as Icelandic } from '../data/languages/Icelandic.mjs';
import { default as Indonesian } from '../data/languages/Indonesian.mjs';
import { default as Irish } from '../data/languages/Irish.mjs';
import { default as Italian } from '../data/languages/Italian.mjs';
import { default as Japanese } from '../data/languages/Japanese.mjs';
import { default as Korean } from '../data/languages/Korean.mjs';
import { default as Kurdish } from '../data/languages/Kurdish.mjs';
import { default as Latvian } from '../data/languages/Latvian.mjs';
import { default as Lithuanian } from '../data/languages/Lithuanian.mjs';
import { default as Luxembourgish } from '../data/languages/Luxembourgish.mjs';
import { default as Macedonian } from '../data/languages/Macedonian.mjs';
import { default as Malay } from '../data/languages/Malay.mjs';
import { default as Mongolian } from '../data/languages/Mongolian.mjs';
import { default as Norwegian } from '../data/languages/Norwegian.mjs';
import { default as NorwegianNynorsk } from '../data/languages/NorwegianNynorsk.mjs';
import { default as Pashto } from '../data/languages/Pashto.mjs';
import { default as Polish } from '../data/languages/Polish.mjs';
import { default as Portuguese } from '../data/languages/Portuguese.mjs';
import { default as PortugueseBR } from '../data/languages/PortugueseBR.mjs';
import { default as Romanian } from '../data/languages/Romanian.mjs';
import { default as Russian } from '../data/languages/Russian.mjs';
import { default as ScotsGaelic } from '../data/languages/ScotsGaelic.mjs';
import { default as Serbian } from '../data/languages/Serbian.mjs';
import { default as SerbianLatin } from '../data/languages/SerbianLatin.mjs';
import { default as SimpChinese } from '../data/languages/SimpChinese.mjs';
import { default as Slovak } from '../data/languages/Slovak.mjs';
import { default as Slovenian } from '../data/languages/Slovenian.mjs';
import { default as Spanish } from '../data/languages/Spanish.mjs';
import { default as SpanishInternational } from '../data/languages/SpanishInternational.mjs';
import { default as Swedish } from '../data/languages/Swedish.mjs';
import { default as Tatar } from '../data/languages/Tatar.mjs';
import { default as Thai } from '../data/languages/Thai.mjs';
import { default as TradChinese } from '../data/languages/TradChinese.mjs';
import { default as Turkish } from '../data/languages/Turkish.mjs';
import { default as Ukrainian } from '../data/languages/Ukrainian.mjs';
import { default as Uzbek } from '../data/languages/Uzbek.mjs';
import { default as Vietnamese } from '../data/languages/Vietnamese.mjs';
import { default as Welsh } from '../data/languages/Welsh.mjs';

const languages = {
  Afrikaans,
  Albanian,
  Arabic,
  Armenian,
  Asturian,
  Basque,
  Belarusian,
  Bosnian,
  Breton,
  Bulgarian,
  Catalan,
  Corsican,
  Croatian,
  Czech,
  Danish,
  Dutch,
  English,
  Esperanto,
  Estonian,
  Farsi,
  Finnish,
  French,
  Galician,
  Georgian,
  German,
  Greek,
  Hebrew,
  Hindi,
  Hungarian,
  Icelandic,
  Indonesian,
  Irish,
  Italian,
  Japanese,
  Korean,
  Kurdish,
  Latvian,
  Lithuanian,
  Luxembourgish,
  Macedonian,
  Malay,
  Mongolian,
  Norwegian,
  NorwegianNynorsk,
  Pashto,
  Polish,
  Portuguese,
  PortugueseBR,
  Romanian,
  Russian,
  ScotsGaelic,
  Serbian,
  SerbianLatin,
  SimpChinese,
  Slovak,
  Slovenian,
  Spanish,
  SpanishInternational,
  Swedish,
  Tatar,
  Thai,
  TradChinese,
  Turkish,
  Ukrainian,
  Uzbek,
  Vietnamese,
  Welsh
};

function codepages(): number[] {
  const codePages: number[] = [];

  Object
    .values(languages)
    .map(key => {
      const codePage = Number(key['code_page']);

      if (!isNaN(codePage) && !codePages.includes(codePage)) {
        codePages.push(codePage);
      }
    });

  return codePages
    .filter(cp => cp)
    .sort();
}

export {
  languages,
  codepages,

  Afrikaans,
  Albanian,
  Arabic,
  Armenian,
  Asturian,
  Basque,
  Belarusian,
  Bosnian,
  Breton,
  Bulgarian,
  Catalan,
  Corsican,
  Croatian,
  Czech,
  Danish,
  Dutch,
  English,
  Esperanto,
  Estonian,
  Farsi,
  Finnish,
  French,
  Galician,
  Georgian,
  German,
  Greek,
  Hebrew,
  Hindi,
  Hungarian,
  Icelandic,
  Indonesian,
  Irish,
  Italian,
  Japanese,
  Korean,
  Kurdish,
  Latvian,
  Lithuanian,
  Luxembourgish,
  Macedonian,
  Malay,
  Mongolian,
  Norwegian,
  NorwegianNynorsk,
  Pashto,
  Polish,
  Portuguese,
  PortugueseBR,
  Romanian,
  Russian,
  ScotsGaelic,
  Serbian,
  SerbianLatin,
  SimpChinese,
  Slovak,
  Slovenian,
  Spanish,
  SpanishInternational,
  Swedish,
  Tatar,
  Thai,
  TradChinese,
  Turkish,
  Ukrainian,
  Uzbek,
  Vietnamese,
  Welsh
};
