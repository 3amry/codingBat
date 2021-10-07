function frontAgain(str){
  if (str.length > 1){
    return (str.slice(0, 2) === str.slice(str.length - 2));
  }else return false;
}