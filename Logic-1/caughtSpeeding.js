function caughtSpeeding(speed, isBirthday){
  let firstLimit = 60,
      secondLimit = 80;
  if (isBirthday){
    firstLimit += 5;
    secondLimit += 5;
  }
  if (speed <= firstLimit)return 0;
  else if (speed <= secondLimit)return 1;
  else return 2;
}