const alphabetOptions = {
  english: [
      'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G',
      'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N',
      'o', 'O', 'p' ,'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U',
      'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z'
  ],
  kazakh: [
    'а', 'А', 'ә', 'Ә', 'б', 'Б', 'в', 'В', 'г', 'Г', 'ғ', 'Ғ', 'д', 'Д', 'е', 'Е', 'ё', 'Ё', 'ж', 'Ж',
    'з', 'З', 'и', 'И', 'й', 'Й', 'к', 'К', 'қ', 'Қ', 'л', 'Л', 'м', 'М',
    'н', 'Н', 'ң', 'Ң', 'о', 'О', 'ө', 'Ө', 'п', 'П', 'р', 'Р', 'с', 'С',
    'т', 'Т', 'у', 'У', 'ұ', 'Ұ', 'ү', 'Ү', 'ұ̈', 'Ұ̈', 'ф', 'Ф', 'х', 'Х',
    'һ', 'Һ', 'ц', 'Ц', 'ч', 'Ч', 'ш', 'Ш', 'щ', 'Щ', 'ъ', 'Ъ', 'ы', 'Ы',
    'і', 'І', 'ь', 'Ь', 'э', 'Э', 'ю', 'Ю', 'я', 'Я'
]
};

function ceasarEncrypt() {
  const language = document.querySelector('input[name="language"]:checked').value;//.value дает "индекс" выбранного языка
  const alphabet = alphabetOptions[language]; // достаем нужный массив  
  let result = ''; 

  for (let i = 0; i < document.getElementById('ceasarText').value.length; i++) {// итерация всех символов написанного юзером текста 
    let char = document.getElementById('ceasarText').value[i];//даем char-у значение символа
    if (alphabet.includes(char)) {//провека на наличе символа в выбранном алфавите
      result += alphabet[(alphabet.indexOf(char) + 6) % alphabet.length];/* если входит то добавляем индексу символа 3 чтобы поменять на нужную букву по методу Цезаря
       и еще 3 поскольку в массиве находяться и заглавные и маленькие буквы, чтобы не выйти за предел массива юзаем % alphabet.length */
    } else {
      result += char; // не трогаем символы не входящие в алфавит
    }
  }

  document.getElementById("ceasarResult").value = result; // Output
}


function atbashEncrypt(){
  const language = document.querySelector('input[name="language"]:checked').value;//.value дает "индекс" выбранного языка
  const alphabet = alphabetOptions[language];// достаем нужный массив 
  let result = ''; 

  for (let i = 0; i < document.getElementById('atbashText').value.length; i++) {// итерация всех символов написанного юзером текста 
    let char = document.getElementById('atbashText').value[i];//даем char-у значение символа
    if (alphabet.includes(char)) {//провека на наличе символа в выбранном алфавите
      char = alphabet[(alphabet.length-1 - alphabet.indexOf(char))];/* если входит то используем указанную формулу чтобы "считать" с конца массива */
      if (char === char.toLowerCase()) {/* поскольку в массиве по паре одной буквы то вышеуказзаная формула будет 
      выдавать заглавную букву вместо обычной и наоборот  поэтому учитывая что буква правильна то можно данным выражением менять результат на нужный */
        result += char.toUpperCase();
      } else {
        result += char.toLowerCase();
      }
    } else {
      result += char; // не трогаем символы не входящие в алфавит
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