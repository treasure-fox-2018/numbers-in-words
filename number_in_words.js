var satuan = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh',]
var belasan = ['','sebelas','dua belas','tiga belas','empat belas','lima belas','enam belas','tujuh belas','delapan belas','sembilan belas']
var puluhan = ['','sepuluh', 'dua puluh','tiga puluh','empat puluh','lima puluh','enam puluh','tujuh puluh','delapan puluh','sembilan puluh']

function numberToWords(number) {
  if(number === 0){
    return "Nol"
  }else{
    return ubahTriliun(number)
  }
}

function ubahSatuan(num){
  if (num < 10){
    return satuan[num];
  } else if(num>=10 && num<20){
    return belasan[num-10];
  } else{
    return puluhan[Math.floor(num/10)]+" "+satuan[num%10]
  }
}

function ubahRatusan(num){
  if(num>99){
    return satuan[Math.floor(num/100)]+" ratus "+ubahSatuan(num%100)
  }else{
    return ubahSatuan(num);
  }
}

function ubahRibuan(num){
  if(num>=1000){
    return ubahRatusan(Math.floor(num/1000))+" ribu "+ ubahRatusan(num%1000);
  }else{
    return ubahRatusan(num);
  }
}

function ubahJuta(num){
  if(num>=1000000){
    return ubahRibuan(Math.floor(num/1000000))+" juta "+ ubahRibuan(num%1000000)
  }else{
    return ubahRibuan(num);
  }
}

function ubahMiliar(num){
  if(num>=1000000000){
    return ubahJuta(Math.floor(num/1000000000))+" miliar "+ ubahJuta(num%1000000000)
  }else{
    return ubahJuta(num);
  }
}

function ubahTriliun(num){
  if(num>=1000000000000){
    return ubahMiliar(Math.floor(num/1000000000000))+" triliun "+ ubahMiliar(num%1000000000000)
  }else{
    return ubahMiliar(num);
  }
}

// Driver code
console.log(numberToWords(19));
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(9999999999))
