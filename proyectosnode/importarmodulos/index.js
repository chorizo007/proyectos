var colors = require('colors');
 
console.log(__dirname.green); // outputs green text
console.log(__filename.red); // outputs green text

function getParam(param){
    const index = process.argv.indexOf(param);
    return index === -1 ? null : process.argv[index + 1];
}

const nombre = getParam('nombre');
console.log(nombre);

console.log(process.argv);
textoooo