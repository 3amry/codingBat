function conCat(a, b){
  if (a[a.length - 1] === b[0]){
    return a.concat(b.slice(1));
  }else return a.concat(b);
}