function swapEnds(nums){
  if (nums.length === 1)return nums;
  return [nums[nums.length - 1], ...nums.slice(1, nums.length - 1), nums[0]];
}