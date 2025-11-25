function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  // Add subtractive rules manually
  const subtractive = [
    ["CM", 900],
    ["CD", 400],
    ["XC", 90],
    ["XL", 40],
    ["IX", 9],
    ["IV", 4]
  ];

  let result = "";

  // Handle subtractive first
  for (let [roman, value] of subtractive) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  // Now handle normal roman numerals from obj
  for (let i = 0; i <= 6; i++) {
    const roman = obj[i][0];
    const value = obj[i][1];

    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}

// Example run
// console.log(convertToRoman(36)); // XXXVI

// do not edit below this line
module.exports = convertToRoman;
