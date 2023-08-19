const EventEmitter = require('events');

class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click';

meuEmissor.on(nomeEvento, function(click){
    console.log('um usuario clicou: ', click);
});

// meuEmissor.emit(nomeEvento, 'na barra de rolagem');
// meuEmissor.emit(nomeEvento, 'no ok');

// let count = 0;
// setInterval(function () {
// meuEmissor.emit(nomeEvento, 'no ok ' + (count++));
// }, 1000)

//---

//Eventos servem para acoes continuas

// const stdin = process.openStdin();
// stdin.addListener('data', function(value) {
//   console.log(`Você digitou: ${value.toString().trim()}`);
// });



// Promises servem para executar uma unica vez, por isso para de funcionar depois do 1

const stdin = process.openStdin();
function main(){
  return new Promise(function (resolve, reject){
    stdin.addListener('data', function(value) {
      //console.log(`Você digitou: ${value.toString().trim()}`);
      return resolve(value);
    });
  })
}
main().then(function (result) {
  console.log('resultado: ', result.toString());
});  

