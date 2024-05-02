function ceasarEncrypt() {
  let result = ''; 
  let text = document.getElementById('ceasarText').value; // чтобы не писать "document.getElementById('ceasarText').value" несколько раз 
  for (let i = 0; i < text.length; i++) {
    let char = text[i]; // 
    if (char.match(/[a-zA-Z]/)) { // чекаем на наличие в англ алфавите
      let code = text.charCodeAt(i); // получаем значение символа в юникоде
      if (char === char.toUpperCase()) {
        code = ((code - 62)  % 26) + 65; // фомула для смены заглавных(алфавит заглавных букв начинаеться с 65 поэтому +65)
      } else {
        code = ((code - 94)  % 26) + 97; // формула для смены обычных букв на 3ши арипке после него 
      }
      result += String.fromCharCode(code); // ковертация юникода в символ и добавляем его в стринг результа
    }
    else{
      result += char; // оставляем символ нетронутым если не являеться буквой
    }
  }
  document.getElementById("ceasarResult").value = result; // вывод
}

const alphabetLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const alphabetUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
function atbashEncrypt(){
  let result = '';
  let text = document.getElementById('atbashText').value;/* достаем текст который юзер хочет зашифровать*/
  for( let i=0; i < text.length; i++){
    let char = text[i];
    if(alphabetLower.includes(char)){/* проверяем если нужно зашифровать символ */
      result += alphabetLower[25 - alphabetLower.indexOf(char)];/*25тый индекс у Z, если отнят значение индекса символа то получим нужный сивол */
    }
     else if(alphabetUpper.includes(char)){/* проверяем если нужно зашифровать символ */
      result += alphabetUpper[25 - alphabetUpper.indexOf(char)];
    }
    else{
      result += char;/* если символ не входит в алфавит*/
    }
  }
  document.getElementById('atbashResult').value = result;/*вывод*/
}

function showAtbash(){/* думаю понятно*/
  document.getElementById('atbashUI').style.visibility = 'visible';
  document.getElementById('ceasarUI').style.visibility = 'hidden';
}

function showCeasar(){
  document.getElementById('ceasarUI').style.visibility = 'visible';
  document.getElementById('atbashUI').style.visibility = 'hidden';
}