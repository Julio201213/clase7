'use strict'

function Calcular() {

    var genero = document.getElementById('genero').value;
    var edad = document.getElementById('edad').value;
    var estatura = document.getElementById('estatura').value;
    var peso = document.getElementById('peso').value;

   
   if (edad >= 18 && estatura >= 171 && peso <= 74) {
        alert('Eres apto para jugar Baloncesto ');
    } else {
        alert('No eres apto para jugar Baloncesto')
        }
    }
    
    if (genero == F && edad >=17 && estatura >= 170 && peso <=60) {
        alert('Eres apta para jugar Baloncesto');
    } else {
        alert('No eres apta para jugar Baloncesto')
        
    }

