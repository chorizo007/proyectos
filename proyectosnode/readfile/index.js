//leer carpetas 

const fs = require('fs');
const fsPromise = require('fs/promises');

//sincrona
const files = fs.readdirSync('../importarmodulos');
console.log('SYNC' , files);

//asincrona con callback 
fs.readdir('../importarmodulos' , (err, files) => {
    console.log(err);
    console.log('SYNC' , files);
});


//asincrona con promesas
fsPromise.readdir('../importarmodulos')
.then(files => console.log('PROMISE', files))
.catch(err => console.log(err));

//Async - await 
(async () => {
    const filesP = await fsPromise.readdir('../importarmodulos');
    console.log(filesP);
})();



//leer archivos 
fsPromise.readFile('../importarmodulos/index.js', 'utf-8')
.then(files => console.log('lectura fichero', files))
.catch(err => console.log(err));

async function accionFicheros(){
    try{
        await fsPromise.appendFile('../importarmodulos/index.js' , 'textoooo');

        const data = await fsPromise.readFile('../importarmodulos/index.js', 'utf-8')
        console.log(data);

    }catch(err){
        console.log(err);
    }
}

accionFicheros();


//crear un fichero 
(async() => {
    try{
        if(!fs.existsSync('./config')){
            await fsPromise.mkdir('./config');
        }else{
            console.log('El directoria ya existe');
        }
        await fsPromise.appendFile('./config/prueba.md' , 'fichero de prueba');
    }catch(err){
        console.log(err.message);
    }
})();


//buffer de escritura 

const stream = fs.createReadStream('./config/prueba.md' , 'utf-8');

let body = '';

stream.once('data', () => {
    console.log("empieza la lectura");
});

stream.on('data', chunk => {
    body += chunk;
})


stream.on('end' , () => {
    console.log("body " + body.length);
});


//lectura desde la terminal

const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('¿Cómo quieres que se llame? ', (answer) => {
    const stream = fs.createWriteStream(answer + ".md");
    rl.setPrompt('¿Qué quieres decir? (exit para poder salir)');
    rl.prompt();

    rl.on('line', (data) => {
        if (data.toLowerCase().trim() === 'exit') {
            stream.close();
            rl.close();
        } else {
            stream.write(data + '\n');
            rl.prompt();
        }
    });
});

