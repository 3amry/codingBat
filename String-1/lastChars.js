function lastChars(a, b){
  if (a === '') a += '@';
  if (b === '') b += '@';
  return a[0] + b[b.length - 1];
}