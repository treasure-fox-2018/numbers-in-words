function numberToWords(number) {
  const words = [
        '',
        'satu',
        'dua',
        'tiga',
        'empat',
        'lima',
        'enam',
        'tuju',
        'delapan',
        'sembilan',
        'sepuluh',
        'sebelas'
                ];

  let output = ''

  if (number < 0) {
    return 'invalid number';
  }
  //ones
  if (number < 12) {
    output += words[number];
  }
  //elevens
  else if (number < 20) {
    output += words[number - 10] + ' belas'
  }

  //tens
  else if (number < 100) {
    let frontDigit = Math.floor(number / 10);
    let backDigit = number % 10;
    output += words[frontDigit] + ' puluh ' + words[backDigit];
  }
  // hundreds (seratus)
  else if (number < 200) {
    output += 'seratus ' + numberToWords(number - 100);
  }
  // hundreds (remaining)
  else if (number < 1000) {
    let frontDigit = Math.floor(number / 100);
    output += words[frontDigit] + ' ratus ' + numberToWords(number % 100);
  }
  // thousands (seribu)
  else if (number < 2000) {
    output += 'seribu ' + numberToWords(number - 1000)
  }
  // thousands (remaining)
  else if (number < 1000000) {
    let frontDigit = Math.floor(number / 1000);
    output += numberToWords(frontDigit) + ' ribu ' + numberToWords(number % 1000);
  }
  // millions
  else if (number < 1000000000) {
    let frontDigit = Math.floor(number / 1000000);
    output += numberToWords(frontDigit) + ' juta ' + numberToWords(number % 1000000);
  }
  // billions
  else if (number < 1000000000000) {
    let frontDigit = Math.floor(number/1000000000);
    output += numberToWords(frontDigit) + ' milyar ' + numberToWords(number % 1000000000);
  }
  //trillions
  else if (number < 1000000000000000) {
    let frontDigit = Math.floor(number/1000000000000);
    output += numberToWords(frontDigit) + ' triliun ' + numberToWords(number % 1000000000000);
  }

  return output;
}

// Driver code
console.log(numberToWords(112223456789012))
//seratus dua belas triliun dua ratus dua puluh tiga milyar empat ratus lima puluh enam juta tuju ratus delapan puluh sembilan ribu dua belas
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
