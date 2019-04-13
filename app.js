const finalhandler = require('finalhandler');
const http = require('http');
const fs = require('fs');
const Router = require('router');
// const path = require('path');


const hostname = '127.0.0.1';
const port = 3000;

const router = Router();
router.get('/', function (req, res) {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    fs.readdir('./assets', (err, files) => {
        res.end(JSON.stringify(files));
    })
})
router.get('/:fileName', function (req, res) {
    fs.readFile(`./assets/${req.params.fileName}`, (err, buffer) => {
        res.end(buffer);
    })
})
const server = http.createServer((req, res) => {
    router(req, res, finalhandler(req, res));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

