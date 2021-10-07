function minCat(a, b){
  while (a.length > b.length){
   a = a.slice(1);
  }
  while (a.length < b.length){
    b = b.slice(1);
  }
  return a.concat(b);
}