// 'use strict'

function in_words(number) {
  const bilangan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
  var tempNum = '';

  if (number < 12) {
    tempNum += bilangan[number] + " ";
  } else if (number < 20) {
    tempNum += in_words(number - 10) + "belas ";
  } else if (number < 100) {
    tempNum += in_words(Math.floor(number / 10)) + "puluh " + in_words(number % 10);
  } else if (number < 200) {
    tempNum += "seratus " + in_words(number - 100);
  } else if (number < 1000) {
    tempNum += in_words(Math.floor(number / 100)) + "ratus " + in_words(number % 100);
  } else if (number < 2000) {
    tempNum += "seribu " + in_words(number - 1000);
  } else if (number < 1000000) {
    tempNum += in_words(Math.floor(number / 1000)) + "ribu " + in_words(number % 1000);
  } else if (number < 1000000000) {
    tempNum += in_words(Math.floor(number / 1000000)) + "juta " + in_words(number % 1000000);
  } else if (number < 1000000000000) {
    tempNum += in_words(Math.floor(number / 1000000000)) + "milyar " + in_words(number % 1000000000);
  } else if(number < 1000000000000000) {
    tempNum += in_words(Math.floor(number / 1000000000000)) + "triliun " +in_words(number % 1000000000000);
  }

  return tempNum
  // console.log(words);
}

console.log(in_words(4));
console.log(in_words(27));
console.log(in_words(102));
console.log(in_words(38079));
console.log(in_words(82102713));
console.log(in_words(999999999999999));