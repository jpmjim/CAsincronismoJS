//Promesas
//=============
//Utiliza el objeto promise para hacer ejecutadas
//Una promesa algo va suceder cuando "ahora, en el futuro o nunca".
//Utilizamos EMACScript 6

//Promesa 1
const somethingWillHappen = () => {
  return new Promise((resolve, reject) =>{
    if (true) {
      resolve('Hey!');
    } else {
      reject('Whooops!');
    }
  });
};

somethingWillHappen()
.then (response => console.log(response))
.catch (err => console.log(error));

//Promesa 2
const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('True');
      }, 2000)
    } else {
      const error = new Error ('Wooop!');
      reject(error);
    };
  });
}

somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.error(err));

  //ejecución de promesas en cadena
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => {
    console.log('Arrays of results', response);
  })
  .catch (err => {
    console.log(err);
  })