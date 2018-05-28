function numberToWords(number) {
  var strNum = String(number);

  var arrHuruf = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
  var hasil = '';

  if (number <= 11) {
    hasil = hasil + arrHuruf[number];
  }
  else if (number > 11 && number < 20) {
    hasil = hasil + arrHuruf[String(number)[1]] + ' belas'
  }
  else if (number < 100) {
    hasil = hasil + numberToWords((Math.floor(number/10))) + ' puluh ' + numberToWords(number % 10)
  }
  else if (number < 200) {
    hasil = hasil + 'seratus ' + numberToWords (number - 100)
  }
  else if (number < 1000) {
    hasil = hasil + numberToWords((Math.floor(number/100))) + ' ratus ' + numberToWords(number % 100);
  }
  else if (number < 2000) {
    hasil = hasil + 'seribu' + numberToWords(number - 1000);
  }
  else if (number < 1000000) {
    hasil = hasil + numberToWords((Math.floor(number/1000))) + ' ribu ' + numberToWords(number % 1000);
  }
  else if (number < 1000000000) {
    hasil = hasil + numberToWords((Math.floor(number/1000000))) + ' juta ' + numberToWords(number % 1000000);
  }
  else if (number < 1000000000000) {
    hasil = hasil + numberToWords((Math.floor(number/1000000000))) + ' miliar ' + numberToWords(number % 1000000000);
  }
  else if (number < 1000000000000000) {
    hasil = hasil + numberToWords((Math.floor(number/1000000000000))) + ' triliun ' + numberToWords(number % 1000000000000);
  }
  return hasil
  // Your code here
}


// Driver code

console.log(numberToWords(705));
console.log(numberToWords(100000));
console.log(numberToWords(2011845));
