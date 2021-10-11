function oneTwo(str){
  let result = '';
  for (let i = 0; i < str.length - 2; i += 3){
    result += str.slice(i+1, i+3) + str.charAt(i);
  }
  return result;
}