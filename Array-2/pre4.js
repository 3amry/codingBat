function pre4(nums){
  let result = [];
  for (let value of nums){
    if (value === 4) break;
    result.push(value);
  }
  return result;
}