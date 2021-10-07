function startWord(str, word){
  if (str.slice(0, word.length)=== word ||
     str.slice(1, word.length)=== word.slice(1))
    return str.slice(0, word.length);
  else return '';
}