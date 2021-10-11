function repeatSeparator(word, sep, count){
  if (count === 1) return word;
  let result = '';
  for (let i = 0; i < count; i++){
    result += word + sep;
    }
  return result.slice(0, -sep.length);
}