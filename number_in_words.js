function numberToWords(number) {
  let words = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh']
  
  if (number <= 11) {
    return words[number]
  }  
  
  // else if (number === 11) {
  //   return `sebelas`
  // }
  
  else if (number < 20) {
    var belasan = words[Math.floor(number / 10)]
    return `${numberToWords(number % 10)} belas`
  } 
  
  else if (number < 100) {
    var puluhan = words[Math.floor(number / 10)]
    return `${puluhan} puluh ${numberToWords(number % 10)}`
  } 
  
  else if (number < 200) {
    return `seratus ${numberToWords(number - 100)}`
  }
  
  else if (number < 1000) {
    var dibawahSeribu = words[Math.floor(number / 100)]
    return `${dibawahSeribu} ratus ${numberToWords(number % 100)}`
  } 
  
  else if (number < 2000) {
    return `seribu ${numberToWords(number - 1000)}`
  }
  
  else if (number < 10000) {
    var dibawahSepuluhRibu = words[Math.floor(number / 1000)]
    return `${dibawahSepuluhRibu} ribu ${numberToWords(number % 1000)}`
  } 
  
  else if (number < 100000) {
    var dibawahSeratusRibu = words[Math.floor(number / 10000)]
    return `${dibawahSeratusRibu} puluh ${numberToWords(number % 10000)}`
  } 
  
  else if (number < 1000000) {
    var dibawahSatuJuta = words[Math.floor(number / 1000)]
    return `${dibawahSatuJuta} ratus ${numberToWords(number % 1000)}`
  }
  
  else if (number < 1000000000) {
    var dibawahSepuluhJuta = words[Math.floor(number / 1000000)]
    return `${dibawahSepuluhJuta} juta ${numberToWords(number % 1000000)}`
  }

}

// Driver code

console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));


