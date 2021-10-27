function lucky13(nums){
  for (let value of nums){
    if (value === 1 || value === 3)return false;
  }
  else return true;
}