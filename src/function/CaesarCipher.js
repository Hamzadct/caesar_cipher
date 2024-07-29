export const caesarCipher = (text, shift, encode = true) => {
  if (!encode) shift = -shift;
  return text.split('').map(char => {
          if (char.match(/[a-z]/i)) {
              let code = char.charCodeAt();
              let base = code < 97 ? 65 : 97;
              return String.fromCharCode(((code - base + shift) % 26 + 26) % 26 + base);
          }
          return char;
      })
      .join('');
};
