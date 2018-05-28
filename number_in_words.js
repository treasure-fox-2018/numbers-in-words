function numberToWords(number) {
  // Your code here
    var kelipatanSeribu = ['','Ribu','Juta', 'Miliar','Triliun'];
    var angkaSatuan = ['Nol','Satu','Dua','Tiga','Empat', 'Lima','Enam','Tujuh','Delapan','Sembilan'];
    var angkaBelasan = ['Sepuluh','Sebelah','Dua Belas','Tiga Belas', 'Empat Belas','Lima Belas','Enam Belas', 'Tujuh Belas','Delapan Belas','Sembilan Belas'];
    var angkaPuluhan = ['Duapuluh','Tiga Puluh','Empat Puluh','Lima Puluh', 'Enam Puluh','Tujuh Puluh','Delapan Puluh','Sembilan Puluh'];
      number = number.toString();
      number = number.replace(/[\, ]/g,'');
      if (number != parseFloat(number)) return 'not a number';
      var panjangAngka = number.indexOf('.');
      if (panjangAngka == -1)
          panjangAngka  = number.length;
      if (panjangAngka  > 15)
          return 'Terlalu Besar';
      var angkaSplit = number.split('');
      var wordAngka = '';
      var tmp = 0;
      for (var i = 0;   i < panjangAngka;  i++) {
          if ((panjangAngka - i) % 3 == 2) {
              if (angkaSplit[i] == '1') {
                  wordAngka += angkaBelasan[Number(angkaSplit[i + 1])] + ' ';
                  i++;
                  tmp = 1;
              } else if (angkaSplit[i] != 0) {
                  wordAngka += angkaPuluhan[angkaSplit[i] - 2] + ' ';
                  tmp = 1;
              }
          } else if (angkaSplit[i] != 0) {
              wordAngka += angkaSatuan[angkaSplit[i]] +' ';
              if ((panjangAngka - i) % 3 == 0) wordAngka += 'Ratus ';
              tmp = 1;
          }
          if ((panjangAngka - i) % 3 == 1) {
              if (tmp)
                  wordAngka += kelipatanSeribu[(panjangAngka-i-1)/3] + ' ';
              tmp =0;
          }
      }

      if (panjangAngka != number.length) {
          var panjangAngkaBeda = number.length;
          wordAngka += 'point ';
          for (var i = panjangAngka + 1; i < panjangAngkaBeda; i++)
              wordAngka += angkaSatuan[angkaSplit[i]] +' ';
      }
      return wordAngka.replace(/\number+/g,' ');
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
