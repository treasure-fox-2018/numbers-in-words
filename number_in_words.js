function numberToWords(number) {
  // Your code here
  var angka = ["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas"]

  var result = ''


  if (number < 12) {
    
    result += angka[number]
  } else
  if (number < 20) {
    result += numberToWords(number-10) + ' belas'
  } else
  if (number < 100) {
    result += numberToWords(Math.floor(number/10)) + ' puluh ' + numberToWords(number % 10)
  } else
  if (number < 200) {
    result += 'seratus' + numberToWords(number - 100)
  }else
  if (number < 1000) {
    result += numberToWords(Math.floor(number / 100)) + ' ratus ' + numberToWords(number % 100) 
  }else
  if (number < 2000) {
    result += 'seribu ' + numberToWords(number - 1000)
  }else
  if (number < 1000000) {
    result += numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000)
  }else
  if (number < 1000000000) {
    result += numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number % 1000000)
  }else
  if (number < 1000000000000) {
    result += numberToWords(Math.floor(number / 1000000000)) + ' milyar ' + numberToWords(number % 1000000000)
  }
  return result
}

// Driver code
console.log(numberToWords(11705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

console.log(numberToWords(999999999999));