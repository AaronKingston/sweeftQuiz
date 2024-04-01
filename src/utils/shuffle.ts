export default function shuffle(array: any) {
  var copy = [],
    n = array?.length,
    i;

  while (n) {
    i = Math.floor(Math.random() * n--);
    copy.push(array?.splice(i, 1)[0]);
  }
  return copy;
}
