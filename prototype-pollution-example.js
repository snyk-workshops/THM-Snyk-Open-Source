// Assuming global variable `Object.prototype.__proto__ = {}` exists

const pollutedObj = {
    __proto__: {
      // Adding a new property to Array.prototype
      length: 999,
    },
  };
  
  const array = [];
  array.__proto__ = pollutedObj;
  console.log(Array.length); // Output: 999 instead of expected value
