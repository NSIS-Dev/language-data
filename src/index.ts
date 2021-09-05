/**
 * Language Meta Data
 */
export { default as meta } from '../data/meta.json';

/**
 * Language Data
 */
import { default as Afrikaans } from '../data/languages/Afrikaans.json';
import { default as Albanian } from '../data/languages/Albanian.json';
import { default as Arabic } from '../data/languages/Arabic.json';
import { default as Armenian } from '../data/languages/Armenian.json';
import { default as Asturian } from '../data/languages/Asturian.json';
import { default as Basque } from '../data/languages/Basque.json';
import { default as Belarusian } from '../data/languages/Belarusian.json';
import { default as Bosnian } from '../data/languages/Bosnian.json';
import { default as Breton } from '../data/languages/Breton.json';
import { default as Bulgarian } from '../data/languages/Bulgarian.json';
import { default as Catalan } from '../data/languages/Catalan.json';
import { default as Corsican } from '../data/languages/Corsican.json';
import { default as Croatian } from '../data/languages/Croatian.json';
import { default as Czech } from '../data/languages/Czech.json';
import { default as Danish } from '../data/languages/Danish.json';
import { default as Dutch } from '../data/languages/Dutch.json';
import { default as English } from '../data/languages/English.json';
import { default as Esperanto } from '../data/languages/Esperanto.json';
import { default as Estonian } from '../data/languages/Estonian.json';
import { default as Farsi } from '../data/languages/Farsi.json';
import { default as Finnish } from '../data/languages/Finnish.json';
import { default as French } from '../data/languages/French.json';
import { default as Galician } from '../data/languages/Galician.json';
import { default as Georgian } from '../data/languages/Georgian.json';
import { default as German } from '../data/languages/German.json';
import { default as Greek } from '../data/languages/Greek.json';
import { default as Hebrew } from '../data/languages/Hebrew.json';
import { default as Hindi } from '../data/languages/Hindi.json';
import { default as Hungarian } from '../data/languages/Hungarian.json';
import { default as Icelandic } from '../data/languages/Icelandic.json';
import { default as Indonesian } from '../data/languages/Indonesian.json';
import { default as Irish } from '../data/languages/Irish.json';
import { default as Italian } from '../data/languages/Italian.json';
import { default as Japanese } from '../data/languages/Japanese.json';
import { default as Korean } from '../data/languages/Korean.json';
import { default as Kurdish } from '../data/languages/Kurdish.json';
import { default as Latvian } from '../data/languages/Latvian.json';
import { default as Lithuanian } from '../data/languages/Lithuanian.json';
import { default as Luxembourgish } from '../data/languages/Luxembourgish.json';
import { default as Macedonian } from '../data/languages/Macedonian.json';
import { default as Malay } from '../data/languages/Malay.json';
import { default as Mongolian } from '../data/languages/Mongolian.json';
import { default as Norwegian } from '../data/languages/Norwegian.json';
import { default as NorwegianNynorsk } from '../data/languages/NorwegianNynorsk.json';
import { default as Pashto } from '../data/languages/Pashto.json';
import { default as Polish } from '../data/languages/Polish.json';
import { default as Portuguese } from '../data/languages/Portuguese.json';
import { default as PortugueseBR } from '../data/languages/PortugueseBR.json';
import { default as Romanian } from '../data/languages/Romanian.json';
import { default as Russian } from '../data/languages/Russian.json';
import { default as ScotsGaelic } from '../data/languages/ScotsGaelic.json';
import { default as Serbian } from '../data/languages/Serbian.json';
import { default as SerbianLatin } from '../data/languages/SerbianLatin.json';
import { default as SimpChinese } from '../data/languages/SimpChinese.json';
import { default as Slovak } from '../data/languages/Slovak.json';
import { default as Slovenian } from '../data/languages/Slovenian.json';
import { default as Spanish } from '../data/languages/Spanish.json';
import { default as SpanishInternational } from '../data/languages/SpanishInternational.json';
import { default as Swedish } from '../data/languages/Swedish.json';
import { default as Tatar } from '../data/languages/Tatar.json';
import { default as Thai } from '../data/languages/Thai.json';
import { default as TradChinese } from '../data/languages/TradChinese.json';
import { default as Turkish } from '../data/languages/Turkish.json';
import { default as Ukrainian } from '../data/languages/Ukrainian.json';
import { default as Uzbek } from '../data/languages/Uzbek.json';
import { default as Vietnamese } from '../data/languages/Vietnamese.json';
import { default as Welsh } from '../data/languages/Welsh.json';

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
