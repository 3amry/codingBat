function countClumps(nums){
  let count = 0;
  let changed = true;
  for (let i = 0; i < nums.length; i++){
    if (nums[i] === nums[i+1] && changed){
      count++;
      changed = false;
    }
    else if (nums[i] !== nums[i+1])changed = true;
  }
  return count;
}