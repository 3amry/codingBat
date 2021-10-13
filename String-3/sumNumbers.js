function sumNumbers(str){
let sum = 0;
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    let digit = parseInt(str[i]);
    if (digit) {
      if (parseInt(str[i + 1])) {
        temp += str[i];
      } else {
        temp += str[i];
        sum += parseInt(temp);
        temp = "";
      }
    }
  }
  return sum;
}}