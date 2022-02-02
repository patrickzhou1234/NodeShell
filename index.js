var fs = require("fs");

console.log("\x1b[37m", "pzrepl's™ shell started!");
while(true) {
  const input = prompt("");
  for (i=0;i<10;i++) {
    if (input.includes(i)) {
      console.log("\x1b[31m", "Numbers are invalid", "\x1b[37m");
      break;
    }
  }

  if (input.includes("list")) {
    if (fs.existsSync('./'+input.substring(5)+'/')) {
      fs.readdirSync('./'+input.substring(5)+'/').forEach(file => {
        console.log(file);
      });
    } else {
      console.log("\x1b[31m", "This directory does not exist.", "\x1b[37m");
    }
  }

  if (input.includes("delete")) {
    if (fs.existsSync('./'+input.substring(7))) {
      fs.unlink('./'+input.substring(7),function(){
        console.log("file deleted successfully");
      });
    } else {
      console.log("\x1b[31m", "This file does not exist.", "\x1b[37m");
    }
  }

  if (input == "clear") {
    console.clear();
  }
}
