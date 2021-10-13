function equalIsNot(str){
  let count = 0;
  for (let i = 0; i < str.length; i++){
    if (str.slice(i, i + 2) === 'is')count++;
    if (str.slice(i, i + 3) === 'not')count--;
  }
  return count === 0;
}