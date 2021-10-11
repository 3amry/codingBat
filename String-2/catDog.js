function catDog(str){
  let countCat = 0;
  let countDog = 0;
  for (let i = 0; i < str.length; i++){
    if (str.slice(i, i+3) === 'cat')
      countCat++;
    if (str.slice(i, i+3) === 'dog')
      countDog++;
  }
  return countCat === countDog;
}