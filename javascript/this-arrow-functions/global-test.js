// Access global functions
setTimeout(() => {
  console.log("This is from the global object!");
}, 1000);

// Add a custom global variable (not recommended in practice)
global.myGlobalVar = "Node.js Rocks!";
console.log(global.myGlobalVar); // "Node.js Rocks!"
