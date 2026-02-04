import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

const dev = false;
const hostname = 'localhost';
const port = parseInt(process.env.PORT, 10) || 3000;

console.log('Starting Next.js application...');
console.log('Port:', port);
console.log('NODE_ENV:', process.env.NODE_ENV);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  console.log('Next.js app prepared successfully');
  
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  })
    .once('error', (err) => {
      console.error('Server error:', err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
    
}).catch((err) => {
  console.error('Error preparing Next.js app:', err);
  console.error('Stack trace:', err.stack);
  process.exit(1);
});