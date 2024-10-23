module.exports = function reverse (n) {
    let nAbs = Math.abs(n);
    let nToString = nAbs.toString();
    let i = nToString.length;
  let result = '';
  while (i > 0) {
    result = `${result}${nToString[i - 1]}`;
    i = i - 1;
  }
  return result;
}
