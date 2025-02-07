const fs = require("fs");
const a = 100;

setTimeout(() => console.log("Timer expired"), 0);

setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});

function printA() {
  console.log("a=", a);
}

printA();
console.log("Last line of the file.");
