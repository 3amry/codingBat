function love6(a, b){
  let sum = a + b,
      diff = Math.abs(a - b);
  return (a === 6 || b === 6 || sum === 6 || diff === 6);
}