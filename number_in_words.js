function numberToWords(number) {
  // Your code here
  var satuan = ["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas"]
  var hasil = ''
  if (number < 12) {
    hasil += satuan[number]
  } else if (number < 20) {
    hasil += numberToWords(number-10) + ' belas'
  } else if (number < 100) {
    hasil += numberToWords(Math.floor(number/10)) + ' puluh ' + numberToWords(number % 10)
  } else if (number < 200) {
    hasil += 'seratus' + numberToWords(number - 100)
  } else if (number < 1000) {
    hasil += numberToWords(Math.floor(number / 100)) + ' ratus ' + numberToWords(number % 100) 
  } else if (number < 2000) {
    hasil += 'seribu ' + numberToWords(number - 1000)
  } else if (number < 1000000) {
    hasil += numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000)
  } else if (number < 1000000000) {
    hasil += numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number % 1000000)
  } else if (number < 1000000000000) {
    hasil += numberToWords(Math.floor(number / 1000000000)) + ' milyar ' + numberToWords(number % 1000000000)
  }
  return hasil
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(9890807));
console.log(numberToWords(2011845));