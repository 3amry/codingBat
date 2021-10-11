function xyBalance(str){
let state = true;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "x") state = false;
    if (str.charAt(i) === "y") state = true;
  }
  return state;}