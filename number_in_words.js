function numberToWords(number) {
  let words = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']
  
  let translate = ''

  if (number <= 11) {
    translate += words[number]
  }

  else if (number > 11 && number < 20) {
    translate += `${words[String(number)[1]]} belas`
  }

  else if (number < 100) {
    translate += `${numberToWords(Math.floor(number / 10))} puluh ${numberToWords(number % 10)}`
  }
  
  else if (number < 200) {
    translate += `seratus ${numberToWords(number - 100)}`
  }

  else if (number < 1000) {
    translate += `${numberToWords(Math.floor(number / 100))} ratus ${numberToWords(number % 100)}`
  }

  else if (number < 2000) {
    translate += `seribu ${numberToWords(number - 1000)}`
  }

  else if (number < 1000000) {
    translate += `${numberToWords(Math.floor(number / 1000))} ribu ${numberToWords(number % 1000)}`
  }

  else if (number < 1000000000) {
    translate += `${numberToWords(Math.floor(number / 1000000))} juta ${numberToWords(number % 1000000)}`
  }

  else if (number < 1000000000000) {
    translate += `${numberToWords(Math.floor(number / 1000000000))} miliar ${numberToWords(number % 1000000000)}`
  }

  else if (number < 1000000000000000) {
    translate += `${numberToWords(Math.floor(number / 1000000000000))} triliun ${numberToWords(number % 1000000000000)}`
  }

  return translate

}

// Driver code
console.log(numberToWords(1111))
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(999999999999999)) 
/*
sembilan ratus sembilan puluh sembilan tr
iliun sembilan ratus sembilan puluh sembi
lan miliar sembilan ratus sembilan puluh
sembilan juta sembilan ratus sembilan puluh sembilan ribu sembilan ratus sembilan
puluh sembilan
*/

