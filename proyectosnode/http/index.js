const http = require('http');
const fsPromises = require('fs/promises');
const fs = require('fs');
const path = require('path');

const server = http.createServer(async (req, res) => {
    if(req.url === '/'){
        const data = await fsPromises.readFile('./public/index.html' , 'utf-8');
        res.writeHead(200, {'Content_Type' : 'text/html'});
        res.end(data);
    }else if(req.url.match(/.css$/)){
        const cssPath = path.join(__dirname, 'public' , req.url);
        const stream = fs.createReadStream(cssPath, 'utf-8');
        res.writeHead(200, {'Content_Type' : 'text/css'});
        stream.pipe(res);
    }
    else{
        res.writeHead(404, {'Content_Type' : 'text/plain'});
        res.end('404 no encontrada')
    }

});

server.listen(3000);

