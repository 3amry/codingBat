function dateFashion(you, date){
  if (date <= 2 || you <= 2) return 0;
  else if (you >= 8 || date >= 8)return 2;
  else return 1;
}