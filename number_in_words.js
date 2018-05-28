function numberToWords(number) {
  var numWord = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas','dua belas','tiga belas','empat belas','lima belas','enam belas','tujuh belas','delapan belas','sembilan belas'];
  var string = number.toString();
  var str = '';

  if (number <= 19) {
    return numWord[number];
  }else if (number < 100) {
    var puluh = Math.floor(number / 10);
    return numWord[puluh] + ' puluh ' + numberToWords(number % 10);
  }else if (Math.floor(number / 100) === 1) {
    return 'seratus ' + numberToWords(number % 100);
  }else if (number < 1000) {
    var ratus = Math.floor(number / 100);
    return numWord[ratus] + ' ratus ' + numberToWords(number % 100);
  }else if (Math.floor(number / 1000) === 1) {
    return 'seribu';
  }else if (number < 10000) {
    var ribu = Math.floor(number / 1000);
    return numWord[ribu] + ' ribu ' + numberToWords(number % 1000);
  }else if (Math.floor(number / 1000) === 11) {
    return 'sebelas ribu ' + numberToWords(number % 1000);
  }else if (Math.floor(number / 1000) === 12) {
    return 'dua belas ribu ' + numberToWords(number % 1000);
  }else if (Math.floor(number / 1000) === 13) {
    return 'tiga belas ribu ' + numberToWords(number % 1000);
  }else if (Math.floor(number / 1000) === 14) {
    return 'empat belas ribu ' + numberToWords(number % 1000);
  }else if (Math.floor(number / 1000) === 15) {
    return 'lima belas ribu ' + numberToWords(number % 1000);
  }else if (Math.floor(number / 1000) === 16) {
    return 'enam belas ribu ' + numberToWords(number % 1000);
  }else if (Math.floor(number / 1000) === 17) {
    return 'tujuh belas ribu ' + numberToWords(number % 1000);
  }else if (Math.floor(number / 1000) === 18) {
    return 'delapan belas ribu ' + numberToWords(number % 1000);
  }else if (Math.floor(number / 1000) === 19) {
    return 'sembilan belas ribu ' + numberToWords(number % 1000);
  }else if (number < 20000) {
    var belasRibu = Math.floor(number / 10000);
    return numWord[belasRibu] + ' belas ' + numberToWords(number % 10000);
  }else if (number < 100000) {
    var puluhRibu = Math.floor(number / 10000);
    return numWord[puluhRibu] + ' puluh ' + numberToWords(number % 10000);
  }else if (Math.floor(number / 100000) === 1) {
    return 'seratus ' + numberToWords(number % 100000);
  }else if (number < 1000000) {
    var ratusRibu = Math.floor(number / 100000);
    return numWord[ratusRibu] + ' ratus ' + numberToWords(number % 100000);
  }else if (number < 10000000) {
    var juta = Math.floor(number / 1000000);
    return numWord[juta] + ' juta ' + numberToWords(number % 1000000);
  }else if (number < 2000000) {
    var belasJuta = Math.floor(number / 1000000);
    return numWord[belasJuta] + ' belas ' + numberToWords(number % 1000000);
  }else if (number < 100000000) {
    var puluhJuta = Math.floor(number / 10000000);
    return numWord[puluhJuta] + ' puluh ' + numberToWords(number % 10000000);
  }else if (number < 1000000000) {
    var ratusJuta = Math.floor(number / 100000000);
    return numWord[ratusJuta] + ' ratus ' + numberToWords(number % 100000000);
  }
}

// Driver code

console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
