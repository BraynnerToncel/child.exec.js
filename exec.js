const { exec } = require('child_process');

exec('node -v', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`Node.js version: ${stdout}`);
  if (stderr) {
    console.error(`stderr: ${stderr}`);
  }
});
