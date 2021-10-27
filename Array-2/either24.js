function either24(nums){
  let state = 0;
  for (let i = 0; i < nums.length; i++){
    if (nums[i] === 2 && nums[i + 1] === 2)state++;
    if (nums[i] === 4 && nums[i + 1] === 4)state++;
  }
  return (state === 1);
}