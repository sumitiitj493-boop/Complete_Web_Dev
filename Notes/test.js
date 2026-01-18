const os = require('os');

console.log('Free RAM:', os.freemem());
console.log('Total RAM:', os.totalmem());
console.log('CPUs:', os.cpus());
console.log('Hostname:', os.hostname());
console.log('Platform:', os.platform());
console.log('Arch:', os.arch());
console.log('Uptime:', os.uptime(), 'seconds');
