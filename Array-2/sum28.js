function sum28(nums){
  let sum = 0;
  for (let value of nums){
    if (value === 2)sum += 2;
  }
  return (sum === 8);
}