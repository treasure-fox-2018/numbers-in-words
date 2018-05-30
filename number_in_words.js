function numberToWords(number) {
  // Your code here
  var angka = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas'];
  if (number <= 11) {
    return angka[number];
  }
  else if (number < 20) {
    return angka[(number % 10)] + ' belas';
  }
  else if (number < 100) {
    return angka[Math.floor(number/10)] + ' puluh ' + angka[number % 10];
  }
  else if (number < 1000) {
    if (String(number)[0] === '1') {
      return 'seratus ' + numberToWords(number % 100);
    }else {
      return angka[Math.floor(number / 100)] + ' ratus ' + numberToWords(number % 100);
    }
  }
  else if (number < 100000) {
    if (String(number)[0] === '1') {
      return angka[Math.floor(number / 1000)] + ' ribu';
    }else {
      var puluhRibuan = Math.floor(number / 1000);
      return numberToWords(puluhRibuan) + ' ribu ' + numberToWords(number % 1000);
    }
  }
  else if (number < 1000000) {
      var ratusanRibu = Math.floor(number / 1000);
      return numberToWords(ratusanRibu) + ' ribu ' + numberToWords(number % (ratusanRibu * 1000));
  }
  else if (number < 1000000000) {
    var juta = Math.floor(number /1000000);
    return numberToWords(juta) + 'juta' + numberToWords(number % (juta * 100000));
  }
}

// Driver code
console.log(numberToWords(4));
console.log(numberToWords(11));
console.log(numberToWords(12));
console.log(numberToWords(14));
console.log(numberToWords(98));
console.log(numberToWords(108));
console.log(numberToWords(111));
console.log(numberToWords(112));
console.log(numberToWords(123));
console.log(numberToWords(705));
console.log(numberToWords(999));
console.log(numberToWords(11000));
console.log(numberToWords(98325));
console.log(numberToWords(209763));
console.log(numberToWords(3130987));
console.log(numberToWords(99999999));
console.log(numberToWords(1000000));
console.log(numberToWords(3011845));
console.log(numberToWords(011845));
