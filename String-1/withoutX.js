function withoutX(str){
  if (str[0] === 'x')
    str = str.slice(1);
   if (str[str.length - 1] === 'x')
    str = str.slice(0, str.length - 1);
   return str;
}