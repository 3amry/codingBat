function linearIn(outer, inner) {
  let j = 0;
  for (let i = 0; i < outer.length; i++) if (outer[i] === inner[j]) j++;
  return j === inner.length;
}