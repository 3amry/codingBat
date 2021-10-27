function shiftLeft(nums){
  if (nums.length === 0) return nums;
  return [...nums.slice(1), nums[0]];
}