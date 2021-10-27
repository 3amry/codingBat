function only14(nums){
  for (let value of nums){
    if (value !== 1 && value !== 4)return false;
  }
  return true;
}