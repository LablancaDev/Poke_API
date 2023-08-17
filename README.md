# Poke_API

Consumiendo API de pokemon, mediante un botón se llamará cada vez que se pulse a la función consultarPokemones()

dentro de ésta función se usa el objeto Math para generar números aleatorios que contienen el id de cada

pokemon, y un número para cada id, pasándole éstos parámetros en las llamadas a la función consultarPokemon() 

que contiene la consulta a la API mediante Fetch, después de realizar las peticiones, pasar la respuesta a formato JSON

Y capturar de nuevo la respuesta, se llamará a la función crearPokemones() pasándole los datos y el num,
 
en ésta función se seleccionarán los elementos contenedores de html, cambiando el src de la imágen y texto,
 
mostrando los datos solicitados en el documento html, con los diferentes enfrentamientos entre los pokemon.
