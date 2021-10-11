function xyzMiddle(str){
  for (let i = 0; i < str.length - 2; i++) {
    if (str.slice(i, i + 3) === "xyz" && inMiddle(i, str)) return true;
  }
  return false;
}
function inMiddle(i, str) {
let front = str.length - (i + 3),
    back = i,
    difference = Math.abs(front - back);
  return difference <= 1;}
