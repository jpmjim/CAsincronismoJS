//Async/Await
//================
//uso preferencial en promesas que hace que nuestro codigo se comporte de manera sincrono.
//Async/await no es mas que Syntax Sugar. Es una manera mas bonita de hacer lo mismo que estabamos haciendo con .then(). La clave es recordar que si una función regresa un promesa, podemos usar el keyword await, que le indicia al navagador: “Espera a que la promesa se resuleva y almacena su resultado en esta variable”. Todo esto toma lugar dentro de una función asincrona, asi que usamos async para lograr esto.

const doSomethingAsync = () => {
  return new Promise ((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Do Something Async'), 3000)
      : reject(new Error('Test Error'))
  });
}

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

//capturar errores
const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  }catch (error) {
    console.error(error)
  }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');