function canBalance(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (sum(nums.slice(0, i)) === sum(nums.slice(i, nums.length))) return true;
  }
  return false;
}
function sum(arr) {
  return arr.reduce((a, b) => {
    return a + b;
  }, 0);
}