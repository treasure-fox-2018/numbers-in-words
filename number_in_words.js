// var int = 38079;
// var divider = 10;
// var panjang = String(int).length;
//
// for (var i = 0; i < panjang; i++) {
//   console.log(panjang);
//   int %= divider;
//   console.log(int);
// }

function numberToWords(number) {

  var length = String(number).length;
  var stringNumber = String(number);
  var arrResult = [];

  for (var i = 0; i < length; i++) {
    var inspector = stringNumber[i];
    console.log(inspector);

      if (Number(inspector) === 1) {
        arrResult.push("satu");
      } else if (Number(inspector) === 2) {
        arrResult.push("dua" );
      } else if (Number(inspector) === 3) {
        arrResult.push("tiga");
      } else if (Number(inspector) === 4) {
        arrResult.push("empat");
      } else if (Number(inspector) === 5) {
        arrResult.push("lima");
      } else if (Number(inspector) === 6) {
        arrResult.push("enam");
      } else if (Number(inspector) === 7) {
        arrResult.push("tujuh");
      } else if (Number(inspector) === 8) {
        arrResult.push("delapan");
      } else if (Number(inspector) === 9) {
        arrResult.push("sembilan");
      } else if (Number(inspector) === 0) {
        arrResult.push("nol");
      }
  }

  console.log(arrResult);

  var arrProcessed = [];

  if (arrResult.length === 1) {
    return arrResult.join("")
  } else if (arrResult.length === 2) {
    if (arrResult[0] === "satu") {
      if (arrResult[1] !== "nol") {
        return arrResult[1] + " belas";
      } else {
        return "sepuluh";
      }
    } else if (arrResult[0] !== "satu" && arrResult[1] === "nol") {
      return arrResult[0] + " puluh ";
    } else if (arrResult[0] !== "satu" && arrResult[1] !== "nol") {
      return arrResult[0] + " puluh " + arrResult[1];
    }
  } else if (arrResult.length === 3) {
    if (arrResult[0] === "satu") {
      if (arrResult[1] === "nol" && arrResult[2] === "nol") {
        return "seratus";
      } else if (arrResult[1] === "nol" && arrResult[2] !== "nol") {
        return "seratus " + arrResult[2];
      } else if (arrResult[1] !== "nol" && arrResult[2] === "nol") {
        return "seratus " + arrResult[1] + " puluh";
      } else if (arrResult[1] !== "nol" && arrResult[2] !== "nol") {
        return "seratus " + arrResult[1] + " puluh " + arrResult[2];
      }
    } else if (arrResult[0] !== "satu") {
      if (arrResult[1] === "nol" && arrResult[2] === "nol") {
        return arrResult[0]
      } else if (arrResult[1] === "nol" && arrResult[2] !== "nol") {
        return arrResult[0] + " ratus " + arrResult[2];
      } else if (arrResult[1] !== "nol" && arrResult[2] === "nol") {
        return arrResult[0] + " ratus " + arrResult[1] + " puluh";
      } else if (arrResult[1] !== "nol" && arrResult[2] !== "nol") {
        return arrResult[0] + " ratus " + arrResult[1] + " puluh " + arrResult[2];
      }
    }
  }
}


// Driver cod("
console.log(numberToWords(91));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));
