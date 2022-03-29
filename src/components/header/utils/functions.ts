import languageEn from './dictionary/language_en.json';
import languageEs from './dictionary/language_es.json';

/**
 * Returns the dictionary structure according to the current language
 * @param {String} lang
 */
export const getDictionary = (lang:string) => {
  switch (lang) {
    case 'en':
      return languageEn;

    case 'es':
      return languageEs;

    default:
      return languageEn;
  }
};

export const testFunction = () => 'Hello world';
