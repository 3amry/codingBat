function withoutX2(str){
  if (str[1] === 'x')
    str = str[0] + str.slice(2);
  if (str[0] === 'x')
    str = str.slice(1);
   return str;
}