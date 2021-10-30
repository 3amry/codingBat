// Not complete

function maxMirror(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = nums.length - 1; j > 0; j--) {
      if (nums[i] === nums[j]) {
        for (let k = 0; k < j - i; k++) {
          if (nums[i + k] === nums[j - k]) {
            count++;
            if (count > result) result = count;
          } else count = 0;
        }
      } else count = 0;
    }
  }
  return result;
}
