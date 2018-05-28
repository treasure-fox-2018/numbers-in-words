function numberToWords(number) {
  // Your code here
var words =['satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas']
var hasil = ''
let puluh = Math.floor(number / 10)
let ratus = Math.floor(number / 100)
let ribu = Math.floor(number / 1000)
let juta = Math.floor(number / 1000000)
let miliar = Math.floor(number / 1000000000)
let triliun = Math.floor(number / 1000000000000)
if(number == 0){
  return ''
}else if(number <= 11){
  return words[number - 1]
}else if(number < 20 ){
  return numberToWords(number % 10) + " belas"
}else if(number < 100){
  return words[puluh -1] + " puluh " + numberToWords(number -(puluh * 10))
}else if(number < 1000){
  if(String(number)[0] == "1"){
    return "seratus " + numberToWords(number - ( ratus * 100))
  }
  return words[ratus -1] + " ratus " + numberToWords(number - (ratus * 100))
}else if(number < 1000000){
  if(String(number)[0] == "1" && String(number).length == 4){
    return "seribu " + numberToWords(number - (ribu * 1000))
  }
  return numberToWords(ribu) + " ribu " + numberToWords(number - (ribu * 1000))
}else if(number < 1000000000){
  return numberToWords(juta) + " juta " + numberToWords(number -(juta * 1000000))
}else if(number < 1000000000000){
  return numberToWords(miliar) + " miliar " + numberToWords(number - (miliar * 1000000000))
}else if(number < 1000000000000000){
  return (numberToWords(triliun)) + " triliun " + numberToWords(number - (triliun * 1000000000000))
}


}
// Driver code
console.log(numberToWords(9999999999999))
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(12011845));
