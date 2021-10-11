function getSandwich(str){
  let first = str.indexOf('bread');
  let last = str.lastIndexOf('bread');
  if (first !== -1 && last !== -1){
    return str.slice(first + 5, last);
  }
  return '';
}