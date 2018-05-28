function numberToWords(number) {
  // Your code here
  var satuan = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan']
  var belasan = ['','sebelas','dua belas','tigas belas','empat belas','lima belas','genep belas','tujuh belas','delapan belas','sembilan belas']
    num = number
    if(num === 0){
        return ''
    } else if(num >= 100){
        return satuan[Math.floor(num/100)]+' ratus '+satuan[Math.floor(num%100)]
    } else if(num >= 20){
        return satuan[Math.floor(num/10)]+' puluh '+satuan[num%10]
    } else if(num >= 10 && num < 20){
        return belasan[num- 10]
    } else if(num < 10){
        return satuan[num]
    }

}

// Driver code

console.log(numberToWords(705));
console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));
