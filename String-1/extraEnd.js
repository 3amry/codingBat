function extraEnd(str){
  let end = str.slice(str.length -2);
  let result = '';
  for (let i = 0; i < 3; i++){
    result += end;
  }
  return result;
}