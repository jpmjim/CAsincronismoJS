# CAsincronismoJS
Curso de Asincronismo de JavaScript
==========================================
Trabajeremos sus principales estructuras.
Es la acción que no ocurre al mismo tiempo.

- Memory heap es el espacio en memoria compartido para toda la aplicación.
- No hacer funciones  pesadas (no hacer muchas llamadas).

4.Consumir una API (ciertos datos)
API que usaremos es https://rickandmortyapi.com/
- lista completa de cuantos personajes tiene
- nombre del primer personaje que nos regrese
- tener la dimension del cual pertenece el segundo llamado

5.-Estructura Callback

Ventajas y Desventajas
=================================================

Callbacks
V = Es simple una función que recibe otra función
V = Son universales
D = Composición tosca
D = Callbacks Hell
D = Flujo poco intuitivo
D = Debemos pensar que estamos haciendo código para humanos y debe ser facil de leer
D = if FecthData, if FecthData, if FecthData y se vuelve tedioso y no se maneja excepciones

Promise
V = Fácilmente enlazable then y return, then y return y asi
V = Es poderoso // es muy recomendado para desarrolladores
D = NO maneja excepciones si no maneja un catch al final y seremos propensos a errores
D = Requiere un polyfile para ser transpilados y ser interpretados en todos los navegadores //Babbel

Async Await
V = El tradicional try - catch y manejar las excepciones de manera mas fluida
V = Mas fáciles de leer que sucedera que va a suceder
D = Ese poder que podemos decir es decir si queremos algo debemos esperar que algo suceda
D = Requiere un polyfile para ser transpilados y ser interpretados en todos los navegadores //Babbel

Actualizar repositorio con el nuevo curso
