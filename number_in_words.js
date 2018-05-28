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
      // console.log(key)
      if (number % satuanUnik[key] === 0) {
        // if (number % satuanUnik[key] === 0) {
          valueFinalNumber = number / satuanUnik[key]
          containNum += satuan[valueFinalNumber] + ' ' + key
          valueFinalNumber = 0
          return containNum + numberToWords(valueFinalNumber)
        // }
      } else if (number >= satuanUnik[key] && number <= 99) {
        valueFinalNumber = String(number / satuanUnik[key])
        console.log(valueFinalNumber)
        var first = valueFinalNumber.slice(0, 1)
        // console.log(first)
        var second = valueFinalNumber.slice(2)
        // console.log(second)
        var digitAkhir = number / 10
        var floor = Math.floor(digitAkhir)
        containNum += satuan[first] + ' ' + key + ' ' + satuan[second]
        valueFinalNumber = 0
        return containNum + numberToWords(valueFinalNumber)
      } else if (number >= satuanUnik[key] && number <= 999 && number > 100) {
        valueFinalNumber = Math.floor(number / satuanUnik[key])
        var mod = number % satuanUnik[key]
        console.log(mod)
        console.log(valueFinalNumber)
        containNum += satuan[valueFinalNumber] + ' ' + key + ' '
        return containNum + numberToWords(mod)
      }
    }
  }
}

// Driver code
console.log(numberToWords(611));
console.log(numberToWords(1000001));
// console.log(numberToWords(2011845));
