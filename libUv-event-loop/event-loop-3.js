const fs = require("fs");
const a = 100;
fs.readFile("./file.txt", "utf8", () => {
    console.log("File Reading CB");
  });
  
setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 1000);

function printA() {
  console.log("a=", a);
}

printA();
console.log("Last line of the file.");
