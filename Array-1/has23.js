function has23(nums){
  let state = false;
  for (let value of nums){
    if (value === 2 || value === 3)state = true;
  }
  return state;
}