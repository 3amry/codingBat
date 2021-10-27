function countEvens(nums){
  let count = 0;
  for (let value of nums){
    if (value % 2 === 0) count++;
  }
  return count;
}