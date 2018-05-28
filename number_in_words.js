function numberToWords(number) {
  var result = '';
  var numWords = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];

  if (number < 10) {
    return numWords[number];
  }

  if (number >= 10 && number < 100) {
    if (number >= 11 && number < 20) {
      var angkaBlkg = number % 10;
      if (number === 11) {
        return 'sebelas';
      }
      return numberToWords(angkaBlkg) + ' belas';
    }
    var angkaDpn = Math.floor(number / 10);
    var angkaBlkg = number % 10;
    if (number === 10) {
      return 'sepuluh';
    }
    return numberToWords(angkaDpn) + ' puluh ' + numberToWords(angkaBlkg);

  } else if (number >= 100 && number < 1000) {
    angkaDpn = Math.floor(number / 100);
    angkaBlkg = number % 100;
    if (number === 100) {
      return 'seratus';
    } else if (angkaDpn === 1) {
      return 'seratus ' + numberToWords(angkaBlkg);
    }
    return numberToWords(angkaDpn) + ' ratus ' + numberToWords(angkaBlkg);
    
  } else if (number >= 1000 && number < 100000) {
    angkaDpn = Math.floor(number / 1000);
    angkaBlkg = number % 1000;
    if (angkaDpn === 1) {
      return 'seribu ' + numberToWords(angkaBlkg);
    }
    return numberToWords(angkaDpn) + ' ribu ' + numberToWords(angkaBlkg);

  } else if (number >= 10000 && number < 1000000) {
    angkaDpn = Math.floor(number / 100000);
    angkaBlkg = number % 100000;
    if (angkaDpn === 1) {
      return 'seratus ' + numberToWords(angkaBlkg);
    }
    return numberToWords(angkaDpn) + ' ratus ' + numberToWords(angkaBlkg);

  } else if (number >= 1000000 && number < 1000000000) {
    angkaDpn = Math.floor(number / 1000000);
    angkaBlkg = number % 1000000;
    return numberToWords(angkaDpn) + ' juta ' + numberToWords(angkaBlkg);

  } else if (number >= 1000000000 && number < 1000000000000) {
    angkaDpn = Math.floor(number / 1000000000);
    angkaBlkg = number % 1000000000;
    return numberToWords(angkaDpn) + ' milyar ' + numberToWords(angkaBlkg);

  } else if (number >= 1000000000000 && number < 1000000000000000) {
    angkaDpn = Math.floor(number / 1000000000000);
    angkaBlkg = number % 1000000000000;
    return numberToWords(angkaDpn) + ' triliun ' + numberToWords(angkaBlkg);
  }

  return result;
}

// Driver code
// console.log(numberToWords(9));
console.log(numberToWords(10));
console.log(numberToWords(11));
console.log(numberToWords(17));
console.log(numberToWords(78));
console.log(numberToWords(152));
console.log(numberToWords(705));
console.log(numberToWords(9567)); //seribu lima ratus enam puluh tujuh
console.log(numberToWords(5642));
console.log(numberToWords(10621)); //sepuluh ribu enam ratus dua puluh satu
console.log(numberToWords(11342)); //sebelas ribu tiga ratus empat puluh dua
console.log(numberToWords(12159)); // dua belas ribu seratus lima puluh sembilan
console.log(numberToWords(52361));
console.log(numberToWords(1000000)); // satu juta
console.log(numberToWords(2011845)); // dua juta sebelas ribu delapan ratus empat puluh lima
console.log(numberToWords(13742111179250)); //
