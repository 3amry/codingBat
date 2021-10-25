function make2(a, b){
  let result = [];
  let arr = a.concat(b);
  for (let value of arr){
    if (result.length < 2) 
      result.push(value);
    else break;
  }
  return result;
}