const { spawn } = require('child_process');

const listFiles = spawn('cmd.exe', ['/c', 'dir', 'C:\\Users\\PC28\\Documents']);

listFiles.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

listFiles.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

listFiles.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
