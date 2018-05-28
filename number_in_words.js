function numberToWords(number) {
  // Your code here
  const dict = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 
                'sepuluh', 'sebelas'];

  if (number >= 1000000) {
    return `${numberToWords(Math.floor(number / 1000000))} juta ${numberToWords(number % 1000000)}`
  } else if (number >= 2000) {
    return `${numberToWords(Math.floor(number / 1000))} ribu ${numberToWords(number % 1000)}`
  } else if (number >= 1000) {
    return `seribu ${numberToWords(number - 1000)}`
  } else if (number >= 200) {
    return `${numberToWords(Math.floor(number / 100))} ratus ${numberToWords(number % 100)}`
  } else if (number >= 100) {
    return `seratus ${numberToWords(number - 100)}`
  } else if (number >= 20) {
    return `${numberToWords(Math.floor(number / 10))} puluh ${numberToWords(number % 10)}`
  } else if (number >= 12) {
    return `${numberToWords(number-10)} belas`
  } else {
    return dict[number]
  }
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1205));
console.log(numberToWords(11000))
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
