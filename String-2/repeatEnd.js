function repeatEnd(str, n){
  let result = '';
  for (let i = 0; i < n; i++){
    result += str.slice(str.length - n);
  }
  return result;
}