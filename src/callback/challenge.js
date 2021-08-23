//Aplicación trabajando sobre node
//Instalamos una dependencia XMLHttpRequest es un objeto dentro de JS el cual permite hacerpeticiones hacia un servicio que se encuentra a la nube "las APIS"
//Para instalarlo con npm install xmlhttprequest --save "como dependencia de desarrollo"
// es una dependencia antes EMACScript 6
//instanciamos 

//conexion con la API mas validaciones
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/'

function fetchData (url_api, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', url_api, true);
  xhttp.onreadystatechange = function(event){
    if(xhttp.readyState === 4) {
      if(xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error ('Error ' + url_api);
        return callback (error, null)
      }
    }
  }
  xhttp.send();
}

//resolviendo challange "llamados a la API"
fetchData(API, function(error1, data1) {
  if (error1) return console.error(error1);
  fetchData(API + data1.results[0].id, function(error2, data2) {
    if(error2) return console.error(error2);
    fetchData(data2.origin.url, function(error3, data3) {
      if(error3) return console.log(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  })
})