function numberToWords(number) {
    let output = '';

    let angkaTerbilang = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
    let angkaBilangan = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    if (number < 12) {
        output += angkaTerbilang[number];
    } else {
        let frontNumber = 0;
        if (number < 100) {
          frontNumber = Math.floor(number / 10);
          return output + angkaTerbilang[frontNumber] + ' puluh ' + numberToWords(number - (frontNumber * 10));
        } else if (number <= 1000) {
          frontNumber = Math.floor(number/ 100);
          return output + angkaTerbilang[frontNumber] + ' ratus ' + numberToWords(number - (frontNumber * 100));
        } else if (number < 10000) {
           frontNumber = Math.floor(number/ 1000);
           return output + angkaTerbilang[frontNumber] + ' ribu ' + numberToWords(number - (frontNumber * 1000));
        } else if (number < 100000) {
           frontNumber = Math.floor(number/ 10000);
           return output + angkaTerbilang[frontNumber] + ' puluh ' + numberToWords(number - (frontNumber * 10000));
        } else if (number < 1000000) {
           frontNumber = Math.floor(number/ 100000);
           return output + angkaTerbilang[frontNumber] + ' ratus ' + numberToWords(number - (frontNumber * 100000));
        } else if (number < 10000000) {
           frontNumber = Math.floor(number/ 1000000);
           return output + angkaTerbilang[frontNumber] + ' juta ' + numberToWords(number - (frontNumber * 1000000));
        } else if (number < 100000000) {
           frontNumber = Math.floor(number/ 10000000);
           return output + angkaTerbilang[frontNumber] + ' puluh  ' + numberToWords(number - (frontNumber * 10000000));
        } else if (number < 1000000000) {
           frontNumber = Math.floor(number/ 100000000);
           return output + angkaTerbilang[frontNumber] + ' ratus  ' + numberToWords(number - (frontNumber * 100000000));
        } else if (number < 10000000000) {
           frontNumber = Math.floor(number/ 1000000000);
           return output + angkaTerbilang[frontNumber] + ' miliar ' + numberToWords(number - (frontNumber * 1000000000));
        } else if (number < 100000000000) {
           frontNumber = Math.floor(number/ 10000000000);
           return output + angkaTerbilang[frontNumber] + ' puluh ' + numberToWords(number - (frontNumber * 10000000000));
        } else if (number < 1000000000000) {
           frontNumber = Math.floor(number/ 100000000000);
           return output + angkaTerbilang[frontNumber] + ' ratus ' + numberToWords(number - (frontNumber * 100000000000));
        }
    }

    return output;

}

// Driver code
console.log(numberToWords(10));
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
