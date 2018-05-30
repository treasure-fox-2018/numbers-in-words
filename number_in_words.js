function numberToWords(number) {
  // Your code here
  let bilanganAngka = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas", "Seratus ", "Seribu "]
  let satuan = [" Belas ", " Puluh ", " Ratus ", " Ribu "," Juta ", " Miliar ", " Triliun "]

  if(number < 12){
    return bilanganAngka[number]
  }else if (number < 20) {
    return bilanganAngka[number % 10] + satuan[0]
  }else if (number < 100) {
    return bilanganAngka[Math.floor(number/10)] + satuan[1] + bilanganAngka[number % 10]
  }else if (number < 200) {
    return bilanganAngka[12] + numberToWords(number-100)
  }else if (number < 1000) {
    return bilanganAngka[Math.floor(number/100)] + satuan[2] + numberToWords(number % 100)
  }else if (number < 2000) {
    return bilanganAngka[13] + numberToWords(number-1000)
  }else if (number < 10000) {
    return bilanganAngka[Math.floor(number/1000)] + satuan[3] + numberToWords(number % 1000)
  }else if (number < 1000000) {
    return numberToWords(Math.floor(number/1000))+satuan[3]+numberToWords(Math.floor(number%1000))
  }else if (number < 1000000000) {
    return numberToWords(Math.floor(number/1000000))+satuan[4]+ numberToWords(number%1000000)
  }
}

// Driver code
// console.log(numberToWords(9));
// console.log(numberToWords(19));
// console.log(numberToWords(99))
// console.log(numberToWords(199));
// console.log(numberToWords(999));
// console.log(numberToWords(1999));
// console.log(numberToWords(9999));
// console.log(numberToWords(19999));
// console.log(numberToWords(99999));
// console.log(numberToWords(199999));
// console.log(numberToWords(999999));
// console.log(numberToWords(1999999));
// console.log(numberToWords(9999999));
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
