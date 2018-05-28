function numberToWords(number) {
  var specialCase = {0: '', 1: 'satu', 2: 'dua', 3: 'tiga', 4: 'empat', 5: 'lima', 6: 'enam', 7: 'tujuh', 8: 'delapan', 9: 'sembilan', 10: 'sepuluh', 11: 'sebelas'}
  var convert = ''

  if (number < 12 ){
    return convert += specialCase[number]
  } else if(number < 20){
    return convert += specialCase[number % 10] + ' belas'
  } else if(number < 100){
    return convert += specialCase[Math.floor(number/10)] + ' puluh ' + specialCase[number % 10]
  } else if (number < 200){
    return convert += 'Seratus ' + numberToWords(number % 100)
  } else if (number < 1000){
    convert += specialCase[Math.floor(number / 100)] + ' ratus '
    return convert + numberToWords(number % 100)
  } else if(number < 2000){
    convert += 'Seribu '
    return convert + numberToWords(number % 1000)
  } else if(number < 1000000){
    return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000)
  } else if(number < 10000000){
    return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number % 1000000)
  } else if(number < 100000000){
    return numberToWords(Math.floor(number / 10000000)) + ' miliar ' + numberToWords(number % 10000000)
  } else if(number < 1000000000){
    return numberToWords(Math.floor(number / 100000000)) + ' triliun ' + numberToWords(number % 100000000)
  }
}

// Driver code
console.log(numberToWords(4))
console.log(numberToWords(15));
console.log(numberToWords(155));
console.log(numberToWords(705))
//console.log(numberToWords(1000000));
//console.log(numberToWords(2011845));
