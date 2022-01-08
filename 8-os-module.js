//os Module
const os = require("os");

//info about current user
const user = os.userInfo();

//method return the system uptime in seconds 
console.log(`The System Uptime is ${os.uptime()} seconds`);

//method returns operating system and memory information
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);