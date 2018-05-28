function numberToWords(number) {
  // Your code here
  var angka = [1,2,3,4,5,6,7,8,9,0]
  var namaangka = ['satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','nol']
  

  var hasil = []
  var numberString = String(number)
  for(var j = 0; j < numberString.length; j++){
    for(var i = 0; i < angka.length; i++){
      
      if(Number(numberString[j]) === angka[i]){
          hasil += namaangka[i] +' '
      }
    }
  }
  

return hasil
  
  
 
}

// Driver code
console.log(numberToWords(705));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));
