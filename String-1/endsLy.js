function endsLy(str){
  let end = 'ly';
  str = str.toLowerCase();
  return (str.slice(str.length - 2) === end);
}