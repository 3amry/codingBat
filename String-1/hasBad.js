function hasBad(str){
  let reg = 'bad';
  return (str.slice(0, reg.length + 1).includes(reg));
}