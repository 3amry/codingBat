function makeLast(nums){
  let result = [];
  for (let i = 0; i < nums.length * 2; i++){
    result[i] = 0;
  }
  result[result.length - 1] = nums[nums.length - 1];
  return result;
}