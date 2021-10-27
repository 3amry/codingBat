function withoutTen(nums) {
  let arr = [];
  let zeros = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 10) arr.push(nums[i]);
    if (nums[i] === 10) zeros.push(0);
  }
  return arr.concat(zeros);
}