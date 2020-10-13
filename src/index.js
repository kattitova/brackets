module.exports = function check(str, bracketsConfig) {
  const brackets = {};
  for (item of bracketsConfig) {
    for (let i = 0; i<item.length; i++) {
      brackets[item[i]] = item[i+1];
      i++;
    }
  }
  str = str.split('');
  let openBrackets = [],
  flagSimpleBrackets = 0;
  for (item of str){ 
    if (openBrackets.includes(brackets[item])) flagSimpleBrackets = 1;
    if (brackets[item] && flagSimpleBrackets == 0) {
      openBrackets.push(item);
    }
    else 
      if (item != brackets[openBrackets.pop()]) 
        return false;
      else flagSimpleBrackets = 0;
  }
  if (openBrackets.length != 0) return false;
  return true;
}
