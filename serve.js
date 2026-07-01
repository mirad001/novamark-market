const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = 3000;
const FILE = path.join(__dirname, 'novamark-site.html');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(fs.readFileSync(FILE));
}).listen(PORT, '127.0.0.1', () => {
  const url = `http://localhost:${PORT}`;
  console.log(`\n  NovaMark site → ${url}\n`);
  // auto-open in default browser
  const { exec } = require('child_process');
  exec(`start ${url}`);
});
