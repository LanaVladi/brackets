module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr = [];

  if (str.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    let currentSign = str[i];
   

  for (let k = 0; k < bracketsConfig.length; k++) {
    let topSign = arr[arr.length - 1];

    if (currentSign === bracketsConfig[k][1] && bracketsConfig[k][0] === topSign) {
      arr.pop();
    } else if (currentSign === bracketsConfig[k][0]) {
      arr.push(currentSign);
    }
  }
}

    if (arr.length === 0) {
      return true;
    } else {
      return false;
    }
}