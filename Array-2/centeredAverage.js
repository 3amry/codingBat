function centeredAverage(nums){
  let sum = 0;
  for (let value of nums) sum += value;
  sum = sum - Math.max(...nums) - Math.min(...nums);
  return sum / (nums.length - 2);
}