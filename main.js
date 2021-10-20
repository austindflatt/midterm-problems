function isEvenlyDivisible(number, number2) {
  if (number % number2 === 0) {
  return true
  } else {
    return false
  }
}

function halfSquare(number) {
  number = number ** 2 / 2;
  return number
}

function isLong(str) {
  if (str.length >= 15) {
  return true
  } else {
    return false
  }
}

// Come back to finish, not done yet
function exclaim(str) {
  let newStr = str;
  while (newStr[newStr.length - 1] === "!") {
		newStr = newStr.slice(0, -1);
	}
	return newStr + "!";
}

function countWords(str) {
  let word = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      word++;
    }
  }
  return word;
}

function containsDigit() {
}

function containsLowerCase(str) {
}

function containsUpperCase() {
}

function containsNonAlphanumeric() {
}

function containsSpace() {
}

function digits() {
}

function truncate(str) {
  if (str.length <= 8) {
	return str;
	}
	return str.slice(0, 8) + "...";
}

function isValidPassword() {
}

function onlyPunchy() {
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}