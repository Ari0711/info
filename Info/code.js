function caesarEncrypt(text) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.match(/[a-zA-Z]/)) {
      let code = text.charCodeAt(i);
      if (char === char.toUpperCase()) {
        code = ((code - 65)  % 26) + 65;
      } else {
        code = ((code - 97)  % 26) + 97;
      }
      result += String.fromCharCode(code);
    } else {
      result += char;
    }
  }
  return result;
}

function encrypt() {
  const salad = document.getElementById("ceasarText").value;
  const encryptedText = caesarEncrypt(salad);
  document.getElementById("ceasarText").value = encryptedText;
}
