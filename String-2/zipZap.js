function zipZap(str){
  let result = '';
  for (let i = 0; i < str.length; i++){
    if (str.charAt(i - 1)=== 'z' && str.charAt(i + 1)=== 'p')
      continue;
    result += str.charAt(i);
  }
  return result;
}