//VARIABLES
const cards= document.querySelector('#dressCar')
const menu= document.querySelector("#menu")


//EVENTOS
document.addEventListener('DOMContentLoaded',()=> {
    mostrarDress();
})


const menuOffset = menu.menuOffsetTop

//FUNCIONES 
function mostrarDress(){
    dress.forEach(dress => {
        // Desestructurar el objeto dress para extraer las propiedades
        const { modelo, precio, color, img } = dress;

        // Crear el div para la tarjeta
        const vestidoHTML = document.createElement('div');
        vestidoHTML.classList.add('card');

        // Crear el elemento de la imagen
        const imgCard = document.createElement('img');
        imgCard.classList.add('cardImg');
        imgCard.src = img;  // Aquí se asigna la imagen que proviene del objeto 'dress'

        // Crear el título para el modelo del vestido
        const tituloCard = document.createElement('h3');
        tituloCard.classList.add('produ');
        tituloCard.textContent = modelo;  // Aquí se asigna el modelo como texto

        // Crear el párrafo para el precio
        const cobro = document.createElement('p');
        cobro.classList.add('precio');
        cobro.textContent = `$${precio}`;  // Asignar el precio

        // Crear el boton de Carrito
        const fin = document.createElement('div')
        fin.innerHTML= 
        `
            <div id="compra">
                <img class="compraCarrito" src="iconos/carrrito.png" alt="carritoLogo"
            </div>
        

        `
        

        // Insertar todos los elementos dentro de la tarjeta
        vestidoHTML.appendChild(imgCard);   // Añadir imagen
        vestidoHTML.appendChild(tituloCard); // Añadir modelo
        vestidoHTML.appendChild(cobro);     // Añadir precio
        vestidoHTML.appendChild(fin);
        // Finalmente, añadir la tarjeta completa al contenedor en el HTML
        const dressCar = document.getElementById('dressCar');
        dressCar.appendChild(vestidoHTML);
    });
}


window.onscroll= function(){
    if(window.scrollY> menuOffset){
        menu.classList.add('fixed')
    } else{
        menu.classList.remove('fixed')
    }
}   



   // Función que se ejecuta al hacer scroll
    window.onscroll = function() {
        if (window.scrollY > menuOffset) {
           menu.classList.add('fixed'); // Añade la clase "fixed" cuando se hace scroll
        } else {
            menu.classList.remove('fixed')
        }
    }

