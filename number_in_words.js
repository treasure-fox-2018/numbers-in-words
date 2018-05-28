function numberToWords(number) {
  // Your code here
  var satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']
  var satuanUnik = {
    triliun: 1000000000000,
    miliar: 1000000000,
    juta: 1000000,
    ribu: 1000,
    ratus: 100,
    puluh: 10
  }
  var valueFinalNumber = 0
  var containNum = ''
  if (number === 0) {
    return ''
  } else if (number <= 11) {
    valueFinalNumber = number - number
    containNum += satuan[number]
    return containNum + numberToWords(valueFinalNumber)
  } else if (number >= 12 && number <= 19){
    valueFinalNumber = number % 10
    containNum += satuan[valueFinalNumber] + ' belas'
    valueFinalNumber = 0
    return containNum + numberToWords(valueFinalNumber)
  } else {
    for (var key in satuanUnik) {
      if (number % satuanUnik[key] === 0) {
        // if (number % satuanUnik[key] === 0) {
          valueFinalNumber = number / satuanUnik[key]
          containNum += satuan[valueFinalNumber] + ' ' + key
          valueFinalNumber = 0
          return containNum + numberToWords(valueFinalNumber)
        // }
      }// else if (number >= 20 && number <= 99) {
      //   valueFinalNumber = number % satuanUnik[key]
      //   containNum += satuan[valueFinalNumber] + ' ' + key + ' ' + valueFinalNumber
      //   valueFinalNumber = 0
      //   return containNum + numberToWords(valueFinalNumber)
      // }
    }
  }
}

// Driver code
console.log(numberToWords(60));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
