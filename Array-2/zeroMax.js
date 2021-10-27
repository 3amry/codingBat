function zeroMax(nums) {
  let temp = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] % 2 === 1 && nums[i] > temp) temp = nums[i];
    if (nums[i] === 0) nums[i] = temp;
  }
  return nums;
}