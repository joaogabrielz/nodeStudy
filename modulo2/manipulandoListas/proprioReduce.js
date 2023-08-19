const { obterPessoas } = require("./service");

Array.prototype.meuReduce = function (callback, valorInicial) {
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0];
  for (let i = 0; i < this.length; i++) {
    valorFinal = callback(valorFinal, this[i], this);
  }
  return valorFinal;
};

async function main() {
  try {
    const { characters } = await obterPessoas(2);
    const pesos = characters.map((item) => parseInt(item.length));
    console.log("pesos: ", pesos);

    // const totalChars = pesos.reduce((ant, prox) => {
    //   return ant + prox;
    // });

    const minhaLista = [
      ["joao", "gabriel"],
      ["noderbr", "nerders"],
    ];

    const total = minhaLista
      .meuReduce((anterior, prox) => {
        return anterior.concat(prox);
      }, [])
      .join(",");

    console.log("tot: ", total);
  } catch (error) {
    console.error("deu bad: ", error);
  }
}

main();
