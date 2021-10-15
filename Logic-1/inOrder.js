function inOrder(a, b, c, bOk){
  if (bOk) return (c > b);
  else return (b > a && c > b);
}