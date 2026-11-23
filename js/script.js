let bolitaPrincipal = document.getElementById('bolita-principal');

document.getElementById('color').addEventListener('change', function() {
    colores();
});

let colores = function() {
    bolitaPrincipal.style.backgroundColor = document.getElementById('color').value;
};

function agregar() {
    let color = document.getElementById('color').value;

    document.getElementById('bolitas').innerHTML += 
        '<div class="bolita" style="background-color:' + color + ';"></div>';
}