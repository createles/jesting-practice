function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function reverseString(word) {
  return word.split('').reverse().join('');
}

const calculator = {
  add(x,y) {
    return x+y;
  },

  subtract(x,y) {
    return x-y;
  },

  divide(x,y) {
    return x/y;
  },

  multiply(x,y) {
    return x*y;
  },
};

function caesarCipher(string, shift) {
  const resolved = [];
  if (shift < 0) shift = 26 + shift;
  for (let i = 0; i < string.length; i++) { // loop around each letter in string
    const char = string[i];

    if (char.charCodeAt(0) >= "a".charCodeAt(0) && char.charCodeAt(0) <= "z".charCodeAt(0)) { // if lowercase
      let pos = char.charCodeAt(0) - "a".charCodeAt(0);
      let shifted = pos + shift;
      let newPos = (shifted % 26 + 26) % 26;
      resolved.push(String.fromCharCode('a'.charCodeAt(0) + newPos));
    } else if (char.charCodeAt(0) >= "A".charCodeAt(0) && char.charCodeAt(0) <= "Z".charCodeAt(0)) { // if uppercase
      let pos = char.charCodeAt(0) - "A".charCodeAt(0);
      let shifted = pos + shift;
      let newPos = (shifted % 26 + 26) % 26;
      resolved.push(String.fromCharCode('A'.charCodeAt(0) + newPos));
    } else { // not a letter
      resolved.push(char);
    }
  }
  return resolved.join('');
}

function analyzeArray(array) {
  const object = {
    average: calcAverage(array),
    min: calcMin(array),
    max: calcMax(array),
    length: array.length,
  }

  return object;
}

function calcAverage(array) {
  if (array.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

function calcMin(array) {
  if (array.length === 0) return 0;

  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }

  return min;
}

function calcMax(array) {
  if (array.length === 0) return 0;

  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }

  return max;
}

console.log(caesarCipher('Hello, World!', 3));

export {capitalize, reverseString, calculator, caesarCipher, analyzeArray};