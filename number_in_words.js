function numberToWords(number) {
  // Your code here
  var words = ["satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas"]

  if (number==0) {
    return '';
  }

  else if (number<=11) {
    return words[number-1];
  }//satuan

  else if (number<20){
    return numberToWords(number-10) + " belas";
  }//belasan


  else if (number>100&&number<1000) {
    var result = Math.floor(number/100)
    var sisa = number-(result*100);
    // console.log(sisa);
    if (result==1) {
      return "seratus " + numberToWords(sisa)
    }
    return numberToWords(result) + ' ratus ' + numberToWords(sisa);
  }//ratusan

  else if (number<100&&number>=20) {
    var result = Math.floor(number/10)
    var sisa = number-(result*10);
    // console.log(sisa);
    return numberToWords(result) + ' puluh ' + numberToWords(sisa);
  }//puluhan

  else if (number<1000000) {
    var result = Math.floor(number/1000)
    var sisa = number-(result*1000);
    if (result==1) {
      return "seribu " + numberToWords(sisa)
    }
    return numberToWords(result) + ' ribu ' + numberToWords(sisa);
  }//ribuan

  else if (number<1000000000) {
    var result = Math.floor(number/1000000)
    var sisa = number-(result*1000000);
    if (result==1) {
      return "sejuta " + numberToWords(sisa)
    }
    return numberToWords(result) + ' juta ' + numberToWords(sisa);
  }//jutaan

  else if (number<1000000000000) {
    var result = Math.floor(number/1000000000)
    var sisa = number-(result*1000000000);
    return numberToWords(result) + " miliar " + numberToWords(sisa);
  }//miliaran

  else if (number<1000000000000000) {
    var result = Math.floor(number/1000000000000)
    var sisa = number-(result*1000000000000);
    return numberToWords(result) + " trillion " + numberToWords(sisa)
  }//trillion

}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
