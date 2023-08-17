//https://youtu.be/m-52KaeVNCY

    //Selección de Id´s y clases:
    let cont = document.getElementById("cont-pokemon");
    let button = document.getElementById("button");

    // 1.FUNCION LLAMAR A UN POKEMON

//Para poder reutilizar la consulta la pondremos dentro de una funcion
function consultarPokemon(id, num) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) //usamos template literals para poner datos dinámicos en una cadena de texto
        .then(function (response) {    //recibimos la respuesta a fech, a la consulta
            // console.log(response)  
            response.json()          //convertimos la respuesta a json, formato que entiende el navegador   
                .then(function (pokemon) {    //obtenemos la respuesta en formato json
                    // console.log(pokemon.name)

                //Parte MUY IMPORTANTE: llamaremos a una nueva funcion, para mostrar en el documento todos los datos
                //le pasaremos el parámetro pokemon que son todos los datos del pokemon de acuerdo a su id en las anteriores funciones, también le pasaré el número que estaba recibiendo
                
                crearPokemon(pokemon, num);
                
            })
        })
        
    }

    // 2.FUNCION LLAMAR A VARIOS POKEMON

function consultarPokemones(){
    let primerId = Math.round (Math.random() * 150); // primer id del pokemon aleatorio redondeado entre 1 y 150
    let segundoId = Math.round (Math.random() * 150); // segundo id del pokemon aleatorio redondeado entre 1 y 150

    consultarPokemon(primerId, 1);  //primera llamada a la funcion, con el número aleatorio del primerId, para que el pokemon se pueda reconocer le pasamos un identificador único
    consultarPokemon(segundoId, 2);   //segunda llamada a la funcion, con el número aleatorio del segundoId  
}

    // 3.FUNCION CONVERSION DE DATOS A HTML

function crearPokemon(pokemon, num){
    //creo una referencia a los pokemons individuales
    //ya tenemos la referencia a cont que es el contenido padre
    //ahora haremos una referencia más específica a los elementos hijos que son los pokemones, que está dentro de cont
    let item = cont.querySelector(`#pokemon-${num}`);//selecciono el id pokemon con el dato dinámico que es el num, he referenciado pokemon-1 y pokemon-2
    let imagen = item.getElementsByTagName("img")[0];//hacemos una busqueda de img(elemento hijo) dentro de item(elemento padre), como pueden haber varios hijos en este caso por cada hijo hay una img y un p, img es 0 por ser el primero
    //ya he referenciado la imagen del pokemon, ahora le cambiaré el src para cambiar la imágen
    imagen.setAttribute("src", pokemon.sprites.front_default) //le pongo un atributo src a la imagen, y le pongo la ruta para acceder a la imagen de la pokeapi

    let nombre = item.getElementsByTagName("p")[0]
    nombre.textContent = pokemon.name;
}

//Boton que activa la batalla
button.addEventListener("click", ()=>{
    consultarPokemones();//INICIO DE LA POKEDEX!!!

})

//otra forma más rápida de hacer el evento con el botón es: (creamos el evento en javascript para dejar más limpio el código html)

// Añadir el evento onclick a la funcion consultar Pokemones() 
// onclick=consultaPokemones() cada vez que pulsemos click en el botón se volverá a llamar a la función consultar Pokemones()  que inicia el programa
// 
/* <button class="button" onclick="consultarPokemones()" id="button">Crear enfrentamiento!</button> */

