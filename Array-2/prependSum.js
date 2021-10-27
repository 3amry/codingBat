function prependSum(nums){
  let sum = nums[0] + nums[1];
  nums.splice(0, 2, sum);
  return nums
}