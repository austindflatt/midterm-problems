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

function containsDigit(str) {
  let output = 0;
  const containsDigit = 
  ["0",
  "1", 
  "2", 
  "3", 
  "4", 
  "5", 
  "6",
  "7",
  "8",
  "9"]
  for(let i = 0; i < str.length; i++) {
    if (containsDigit.includes(str[i]))
    output++
  }
  if(output >= 1) {
    return true
  } else {
    return false
  }
}

function containsLowerCase(str) {
  let output = 0;
  const containsLowerCase = 
  ["a", 
  "b", 
  "c", 
  "d", 
  "e", 
  "f", 
  "g", 
  "h", 
  "i", 
  "j", 
  "k", 
  "l", 
  "m", 
  "n", 
  "o", 
  "p", 
  "q", 
  "r", 
  "s", 
  "t", 
  "u", 
  "v" , 
  "w", 
  "x", 
  "y", 
  "z"]
  for(let i = 0; i < str.length; i++) {
    if (containsLowerCase.includes(str[i]))
    output++
  }
  if(output >= 1) {
    return true
  } else {
    return false
  }
}

function containsUpperCase(str) {
  let output = 0;
  const containsUpperCase = 
  ["A", 
  "B", 
  "C", 
  "D", 
  "E", 
  "F", 
  "G", 
  "H", 
  "I", 
  "J", 
  "K", 
  "L", 
  "M", 
  "N", 
  "O", 
  "P", 
  "Q", 
  "R", 
  "S", 
  "T", 
  "U", 
  "V" , 
  "W", 
  "X", 
  "Y", 
  "Z"]
  for(let i = 0; i < str.length; i++) {
    if (containsUpperCase.includes(str[i]))
    output++
  }
  if(output >= 1) {
    return true
  } else {
    return false
  }
}

function containsNonAlphanumeric(str) {
  let output = 0;
  const containsNonAlphanumeric = 
  ["~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  "|",
  "\ ",
  ":",
  ";",
  "<",
  ",",
  ">",
  ".",
  "?",
  "/",
  " "]
  for(let i = 0; i < str.length; i++) {
    if (containsNonAlphanumeric.includes(str[i]))
    output++
  }
  if(output >= 1) {
    return true
  } else {
    return false
  }
}

function containsSpace(str) {
  let output = 0
  for (let i = 0; i < str.length; i++) {
    if(str[i] === " ") {
    output++
  }
}
  if(output >= 1) {
    return true
  } else {
    return false 
  }
}

function digits(str) {
  let output = ("" + str).split('').map(Number)
  for (let i = 0; i < output.length; i++) {
    if(isNaN(output[i])) {
      output.splice(i, 1)
    }
  }
  return output
}

function truncate(str) {
  if (str.length <= 8) {
	return str;
	}
	return str.slice(0, 8) + "...";
}

function isValidPassword(str) {
  if (containsLowerCase(str) 
  && containsUpperCase(str) 
  && containsDigit(str) 
  && containsNonAlphanumeric(str) 
  && containsSpace(str))
  return true
  else {
    return false
  }
}

function onlyPunchy(str) {
  let output = []
  for (let i = 0; i < str.length; i++) {
    const title = exclaim(str[i])
    if (title.length < 15) {
      output.push(exclaim(str[i]))
    }
  }
  return output
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