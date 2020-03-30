const printKen = () => {
  console.log("Ken the Ninja");
};

// Add a parameter named callback to call
const call = (callback) => {
  console.log("Calling the callback function.");
  callback();
  
};

// Pass printKen as the argument and run call
call(printKen);
