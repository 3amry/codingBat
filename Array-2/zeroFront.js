function zeroFront(nums) {
  let zeros = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums[i] = nums[zeros];
      nums[zeros] = 0;
      zeros++;
    }
  }
  return nums;
}