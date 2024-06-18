document.addEventListener('DOMContentLoaded', function () {
    // Función para cambiar el color al hacer clic
    function cambiarColor(event) {
        event.target.style.backgroundColor = 'black';
    }

    // Asignar eventos de clic a cada div
    document.getElementById('azul').addEventListener('click', cambiarColor);
    document.getElementById('rojo').addEventListener('click', cambiarColor);
    document.getElementById('verde').addEventListener('click', cambiarColor);
    document.getElementById('amarillo').addEventListener('click', cambiarColor);

    // Variable global para el color
    let color;

    // Event listener para teclas
    document.addEventListener('keydown', function (event) {
        switch (event.key) {
            case 'a':
                color = 'pink';
                break;
            case 's':
                color = 'orange';
                break;
            case 'd':
                color = 'cyan';
                break;
            case 'q':
                crearNuevoDiv('purple');
                break;
            case 'w':
                crearNuevoDiv('gray');
                break;
            case 'e':
                crearNuevoDiv('brown');
                break;
        }
    });

    // Función para crear un nuevo div (teclas q, w, e)
    function crearNuevoDiv(color) {
        const nuevoDiv = document.createElement('div');
        nuevoDiv.style.width = '200px';
        nuevoDiv.style.height = '200px';
        nuevoDiv.style.border = '1px solid black';
        nuevoDiv.style.backgroundColor = color;
        nuevoDiv.style.display = 'inline-block';
        nuevoDiv.style.margin = '10px';
        document.body.appendChild(nuevoDiv);
    }

    // Event listener para cambiar color del div "key" (teclas a, s, d)
    document.addEventListener('keydown', function (event) {
        if (event.key === 'a' || event.key === 's' || event.key === 'd') {
            document.getElementById('key').style.backgroundColor = color;
        }
    });
});