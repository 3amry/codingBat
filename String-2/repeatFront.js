function repeatFront(str, n){
  let result = '';
  for (let i = 0; i < n; i++){
    result += str.slice(0, n - i);
  }
  return result;
}