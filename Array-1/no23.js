function no23(nums){
  let state = true;
  for (let value of nums)
    if (value === 2 || value === 3)state = false;
  return state;
}