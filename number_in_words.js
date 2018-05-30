function numberToWords(number) {
  // Your code here
  var satuan = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan']
  var belasan = ['sepuluh','sebelas','dua belas','tigas belas','empat belas','lima belas','genep belas','tujuh belas','delapan belas','sembilan belas']

    var hasilconvert = ''
    num = number
    if(num === 0){
        return ''          //700
    }else if(num <= 10){
        return satuan[num] 
    }else if(num >= 11 && num <= 19){
        hasil = num-10
        hasilconvert = belasan[hasil]
        num = 0
        return hasilconvert + numberToWords(num)
    }else if(num >= 20 && num <= 99){
        hasil = satuan[Math.floor(num/10)] 
        num = num % 10
        hasilconvert = hasil+' puluh '
        return hasilconvert + numberToWords(num)
    }else if(num >= 100 && num <= 999){
        hasil = satuan[Math.floor(num/100)]
        if(hasil === 'satu'){
            hasilconvert = 'seratus '
        }else{
            hasilconvert = hasil+' ratus '
        }
        num = num%100
        return hasilconvert + numberToWords(num)
    }else if(num >= 1000 && num <= 9999){
        hasil = satuan[Math.floor(num/1000)]
        if(hasil === 'satu'){
            hasilconvert = 'seribu '
        }else{
            hasilconvert = hasil+' ribu '
        }
        num = num % 1000
        return hasilconvert + numberToWords(num)
    }else if(num >= 10000 && num <= 99999){             //11000 un 11000 - 1000 = seribu
        hasil = satuan[Math.floor(num/10000)]
        if(hasil === 'satu'){
            strNum = String(number)
            hasil = belasan[Number(strNum[1])]
            hasilconvert = hasil+' ribu '
            num = num - 10000 - (Number(strNum[1]) * 1000)
        }else{
            hasilconvert = hasil+' puluh '
            num = num % 10000
        }
        return hasilconvert + numberToWords(num)
    }else if(num >= 100000 && num <= 999999){
        hasil = satuan[Math.floor(num/100000)]
        if(hasil === 'satu'){
            hasilconvert = 'seratus '
        }else{
            hasilconvert = hasil+' ratus '
        }
        num = num % 100000
        return hasilconvert + numberToWords(num)
    }else if(num >= 1000000 && num <= 9999999){
        hasil = satuan[Math.floor(num/1000000)]
        hasilconvert = hasil+' juta '
        num = num % 1000000
        return hasilconvert + numberToWords(num)
    }else if(num >= 10000000 && num <= 99999999){
        hasil = satuan[Math.floor(num/10000000)]
        if(hasil === 'satu'){
            strNum = String(number)
            hasil = belasan[Number(strNum[1])]
            hasilconvert = hasil+' juta '
            num = num - 10000000 - (Number(strNum[1]) * 1000000)
        }else{
            hasilconvert = hasil+' puluh juta'
            num = num % 10000000
        }
        return hasilconvert + numberToWords(num)
    }

}

// Driver code
console.log(numberToWords(725));
console.log(numberToWords(1000011));
console.log(numberToWords(2011845));
