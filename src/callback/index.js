//CallBack
//=========
//ejemplo 1
// función encargada de sumar dos valores
function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log (calc(6, 2, sum));

//ejemplo 2
function date (callback) {
  console.log(new Date);
  setTimeout(function() {
    let date = new Date;
    callback(date);
  }, 3000)
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);
