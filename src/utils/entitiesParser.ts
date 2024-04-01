import {decodeEntity} from 'html-entities';

export default function entitiesParser(text) {
  let decodedSymbol = '';
  let encodedSymbol = '';
  let decodedText = '';
  let isSymbol = false;
  let entitiesChecker = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;

  if (entitiesChecker.test(text)) {
    for (let i = 0; i < text.length; i++) {
      if (text[i] === '&') {
        if (!encodedSymbol.length) {
          isSymbol = true;
          encodedSymbol += text[i];
        } else {
          decodedText += encodedSymbol;
          encodedSymbol = '&';
        }
      } else if (text[i] === ';' && isSymbol) {
        isSymbol = false;
        encodedSymbol += text[i];

        decodedSymbol = decodeEntity(encodedSymbol, {level: 'html5'});
        encodedSymbol = '';
      } else if (isSymbol) {
        encodedSymbol += text[i];
      }

      if (text[i] === ';' && !isSymbol) {
        decodedText += decodedSymbol;
      } else if (!isSymbol) {
        decodedText += text[i];
      }
    }
  }

  return decodedText || text;
}
