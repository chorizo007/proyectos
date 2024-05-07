let unoados = document.getElementById("1a2");
let unoadostodos = document.getElementById("1a2todos");
let dosauno = document.getElementById("2a1");
let dosaunotodos = document.getElementById("2a1todos");
let select2 = document.getElementById("select2");
let select1 = document.getElementById("select1");

unoados.addEventListener("click", function () {
  mover("derecha");
});
unoadostodos.addEventListener("click", function () {
  mover("todosderecha");
});
dosauno.addEventListener("click", function () {
  mover("izquierda");
});
dosaunotodos.addEventListener("click", function () {
  mover("todosizquierda");
});

function mover(tipo) {
  if (tipo == "derecha") {
    for (var i = select1.options.length - 1; i >= 0; i--) {
      var opcion = select1.options[i];
      if (opcion.selected) {
        select2.add(opcion);
      }
    }
  } else if (tipo == "todosderecha") {
    for (var i = select1.options.length - 1; i >= 0; i--) {
      var opcion = select1.options[i];
      select2.add(opcion);
    }
  } else if (tipo == "izquierda") {
    for (var i = select2.options.length - 1; i >= 0; i--) {
      var opcion = select2.options[i];
      if (opcion.selected) {
        select1.add(opcion);
      }
    }
  } else if (tipo == "todosizquierda") {
    for (var i = select2.options.length - 1; i >= 0; i--) {
      var opcion = select2.options[i];
      select1.add(opcion);
    }
  }
}
