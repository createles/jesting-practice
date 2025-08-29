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

export {capitalize, reverseString, calculator};