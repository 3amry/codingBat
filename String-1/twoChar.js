function twoChar(str, index){
  if (str.length - 1 <= index || index < 0) return str.slice(0, 2);
  return str.slice(index, index + 2);
}