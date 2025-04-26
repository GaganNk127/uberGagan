const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000; // Fallback to 3000 if PORT is not defined

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
