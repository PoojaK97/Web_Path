const call = (callback) => {
  callback("Ken the Ninja", 14);
};

// Add a function that receives two arguments within the argument of call
call((name,age) => {
  console.log(`${name} is ${age} years old.`);
});
