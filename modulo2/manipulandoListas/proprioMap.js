const service = require('./service');

Array.prototype.meuMap = function(callback) {
  const novoArrayMapeado = [];
  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i], i)
    novoArrayMapeado.push(result);
  }

  return novoArrayMapeado;
}


async function main() {
  try {
    const results = await service.obterPessoas(2)

    //const names = [];
    // console.time('foreach') // 0.119ms
    // results.characters.forEach(item => {
    //   names.push(item);
    // });
    // console.timeEnd('foreach')

    //const names = results.characters.map(item => item + ' xxx2')

    const names = results.characters.meuMap(function(pessoa, indice) {
      return `[${indice}] - ${pessoa}`
    })

    console.log(names);

  } catch (error) {
    console.error('deu ruim!', error);
  }
}

main();