function numberToWords(number) {
  //buat dictionary dengan array
  let dictAngka = ["","satu", "dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh", "sebelas"] ;
  let output = "";
  let angkaKiri, angkaKanan;

  if (number <= 11) { //kondisi sampai 11
    output += dictAngka[number] + " ";
  } else if (number < 20) { //kondisi antara 11 sampai 20
    output += dictAngka[Number(String(number)[1])] + "belas ";
  } else if (number < 100) { //kondisi dibawah 100
    angkaKiri = numberToWords(Math.floor(number / 10));
    angkaKanan = numberToWords(number % 10);
    output += angkaKiri + "puluh " + angkaKanan;
  } else if (number < 200) { //kondisi antara 100 - dibawah 200
    angkaKanan = numberToWords(number - 100);
    output += "seratus " + angkaKanan;
  } else if (number < 1000) { //kondisi antara 200 - dibawah 1000
    angkaKiri = numberToWords(Math.floor(number / 100));
    angkaKanan = numberToWords(number % 100);
    output +=  angkaKiri + "ratus " + angkaKanan;
  } else if (number < 2000) {//kondisi antara 1000 - dibawah 2000
    angkaKanan = numberToWords(number - 1000);
    output += "seribu " + angkaKanan;
  } else if (number < 1000000) {//kondisi antara 2000 - sampai dibawah 1 juta
    angkaKiri = numberToWords(Math.floor(number / 1000));
    angkaKanan = numberToWords(number % 1000);
    output += angkaKiri + "ribu " + angkaKanan;
  } else if (number < 1000000000) { //kondisi diantara 1 juta - sampai dibawah 1 milyar
    angkaKiri = numberToWords(Math.floor(number / 1000000));
    angkaKanan = numberToWords(number % 1000000);
    output += angkaKiri + "juta " + angkaKanan;
  } else if (number < 1000000000000) { //kondisi diantara 1 milyar - sampai 1 triliun
    angkaKiri = numberToWords(Math.floor(number / 1000000000));
    angkaKanan = numberToWords(number % 1000000000);''
    output += angkaKiri + "milyar " + angkaKanan;
  } else if (number < 1000000000000000) { //kondisi diatas 1 triliun
    angkaKiri = numberToWords(Math.floor(number / 1000000000000));
    angkaKanan = numberToWords(number % 1000000000000);
    output += angkaKiri + "triliun " + angkaKanan;
  }
  return output;
}

console.log(numberToWords(10511));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(123123132139));
console.log(numberToWords(10016));
