// platform error
function matchUp(a, b){
  let result = 0;
  for (let i = 0; i < a.length; i++){
    let temp = Math.abs(a[i] - b[i])
    if (temp < 3 && temp > 0) result++;
  }
  return result;
}