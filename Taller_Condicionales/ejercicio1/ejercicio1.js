let hermanoUno;
let hermanoDos;
let edadUno;
let edadDos;

function Calcular() {
    hermanoUno = String(document.getElementById('hermanoUno').value);
    hermanoDos = String(document.getElementById('hermanoDos').value);
    edadUno = Number(document.getElementById('edadUno').value);
    edadDos = Number(document.getElementById('edadDos').value);
    numMayor(edadUno, edadDos);

}

function numMayor(edadDos, edadUno) {
    if (edadUno < edadDos) {
        alert('El mayor es ' + hermanoUno);

    }
    else {
        alert('El mayor es ' + hermanoDos);
    }

    if (edadUno == edadDos) {
        alert('Los dos tienen la misma edad');
    }
}
