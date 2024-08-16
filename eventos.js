const divContenedor = document.getElementById('div-contenedor');
const boton = document.getElementById('button');

function FuncionClick(){
    alert('Hola! Soy el div');
}

function funcionBoton(event){
    event.stopPropagation();
}

divContenedor.addEventListener('click',FuncionClick);

boton.addEventListener('click', funcionBoton);