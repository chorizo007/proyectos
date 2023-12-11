let input = document.getElementById('input');
let mensaje = document.getElementById('mensaje');
input.addEventListener('input' ,cambiar);
function cambiar(){
    let word = input.value; 
    let contador = 0;
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        contador += word.charCodeAt(i)-96;
    }
    console.log(contador);
    mensaje.innerHTML=contador;
}

