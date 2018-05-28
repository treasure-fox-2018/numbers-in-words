function numberToWords(number) {
  var array=["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"]
  if (number <= 11){
    return array[number]
  }
  else if(number < 20){
    var puluhan = array[Math.floor(number/10)]
    return `${numberToWords(number%10)} belas` 
  }
  else if(number < 100){
    var puluhan = array[Math.floor(number/10)]
    return `${puluhan} puluh ${numberToWords(number%10)}` 
  }
  else if(number < 1000){
    if(String(number)[0] === "1"){
      return `seratus ${numberToWords(number%100)}` 
    }else{
      var ratusan = array[Math.floor(number/100)]
      return `${ratusan} ratus ${numberToWords(number%100)}` 
    }
  }
  else if(number < 1000000){
    if(String(number)[0] === "1" && String(number).length === 4){
      return `seribu ${numberToWords(number%1000)}`
    }else{
      var ratusanRibu = array[Math.floor(number/1000)]
      if(ratusanRibu === undefined){
        return `${numberToWords(Math.floor(number/1000))} ribu ${numberToWords(number%1000)}` 
      } else{
        return `${ratusanRibu} ribu ${numberToWords(number%1000)}` 
      }
    }
  }
  else if(number < 1000000000){
    var jutaan = array[Math.floor(number/1000000)]
    if(jutaan === undefined){
      return `${numberToWords(Math.floor(number/1000000))} juta ${numberToWords(number%1000000)}`
    }else{
      return `${jutaan} juta ${numberToWords(number%1000000)}` 
    }
  }
  else if(number < 1000000000000){
    var miliyar = array[Math.floor(number/1000000000)]
    if(miliyar === undefined){
      return `${numberToWords(Math.floor(number/1000000000))} miliyar ${numberToWords(number%1000000000)}`
    }else{
      return `${miliyar} miliyar ${numberToWords(number%1000000000)}` 
    }
  }

  else if(number < 1000000000000000){
    var trilion = array[Math.floor(number/1000000000000)]
    if(trilion === undefined){
      return `${numberToWords(Math.floor(number/1000000000000))} trilion ${numberToWords(number%1000000000000)}`
    }else{
      return `${trilion} trilion ${numberToWords(number%1000000000000)}` 
    }
  }
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(999999999999)); // miliyar
console.log("==========================")
console.log(numberToWords(999999999999999)); // trilion
