function shareDigit(a, b){
  let leftA = (a / 10) | 0,
      leftB = (b / 10) | 0,
      rightA = a % 10,
      rightB = b % 10;
  return (leftA === leftB || leftA === rightB || rightA == rightB || rightA == leftB);
}