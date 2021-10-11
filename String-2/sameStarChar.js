function sameStarChar(str){
  for (let i = 0; i < str.length - 1; i++){
    if (str.charAt(i) === '*' && i !== 0){
      if str.charAt(i-1) !== str.charAt(i+1)
      return false;
    }
  }
  return true;
}