function numberToWords(number) {


  var bils = [
    '',
    'satu ',
    'dua ',
    'tiga ',
    'empat ',
    'lima ',
    'enam ',
    'tujuh ',
    'delapan ',
    'sembilan ',
    'sepuluh ',
  ];

  if (number === 11) {
    return 'Sebelas ';
  } else if (number < 11) {
    return bils[number];
  } else if (number < 20) {
    return numberToWords(number % 10) + 'belas '; // as dikurangi dengan 10
  } else if (number < 100) {
    return (bils[Math.floor(number / 10)] + 'puluh ' + numberToWords(number % 10));
  } else if (number < 1000) {
    if (String(number)[0] === '1') {
      return 'Seratus ' + numberToWords(number - 100);
    } else {
      return (bils[Math.floor(number / 100)] + 'ratus ' + numberToWords(number % 100));
    }
  } else if (number < 1000000) {
    if (String(number)[0] === '1' && String(number).length === 4) {
      return 'Seribu ' + numberToWords(number % 1000);
    } else {
      return (numberToWords(Math.floor(number / 1000)) + 'ribu ' + numberToWords(number % 1000));
    }
  } else if (number < 1000000000) {
    return (numberToWords(Math.floor(number / 1000000)) + 'juta ' + numberToWords(number % 1000000));
  }

}


// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(100000));
console.log(numberToWords(102011845));
