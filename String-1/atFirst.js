function atFirst(str){
  while (str.length < 2){
    str += '@';
  }
  return str.slice(0, 2); 
}