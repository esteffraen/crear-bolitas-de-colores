function pintar(bolita){
    bolita.style.background = document.getElementById('color').value;
}

function pintarTodas(){
    let bolitas = document.getElementsByClassName('bolita');
    for(let i = 0; i < bolitas.length; i++){
        bolitas[i].style.background = document.getElementById('color').value;
    }
}

function agregar(){
    let bolita = document.createElement('div');
    bolita.className = 'bolita';
    bolita.setAttribute('onclick', 'pintar(this)');
    document.getElementById('bolitas').appendChild(bolita);
}

let bolitasIniciales = document.getElementsByClassName('bolita');
for(let i = 0; i < bolitasIniciales.length; i++){
    bolitasIniciales[i].setAttribute('onclick', 'pintar(this)');
}
