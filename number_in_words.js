function numberToWords(number) {
  // Your code here
  let nominal=['','Satu','Dua','Tiga','Empat','Lima','Enam','Tujuh','Delapan','Sembilan','Sepuluh','Sebelas','Seratus ','Seribu '];
    let satuan=[' Belas ',' Puluh ',' Ratus ',' Ribu ',' Juta ',' Milyar ',' Triliun ']
    if(number<12){
        return nominal[number]
    }else if(number<20){
        return nominal[number%10]+satuan[0]
    }else if(number<100){
        return nominal[Math.floor(number/10)]+satuan[1]+nominal[number%10]
    }else if(number<200){
        return nominal[12]+numberToWords(number-100)
    }else if(number<1000){
        return nominal[Math.floor(number/100)]+satuan[2]+numberToWords(Math.floor(number%100))
    }else if(number<2000){
        return nominal[13]+numberToWords(number-1000)
    }else if(number<1000000){
        return numberToWords(Math.floor(number/1000))+satuan[3]+numberToWords(Math.floor(number%1000))
    }else if(number<1000000000){
        return numberToWords(Math.floor(number/1000000))+satuan[4]+ numberToWords(number%1000000)
    }
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
