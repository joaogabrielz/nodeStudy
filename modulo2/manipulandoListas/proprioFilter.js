const { obterPessoas } = require("./service");

/* destructuring:

 const item = {
  nome: 'erick',
  idade: 22
}
const { nome } = item;

*/

Array.prototype.meuFilter = function (callback) {
  const list = [];
  for (index in this) {
    const item = this[index];
    const result = callback(item, index, this);

    if (!result) continue;
    list.push(item);
  }
  return list;
};

async function main() {
  try {
    const { characters } = await obterPessoas(2);

    // const family2 = characters.filter(function(item) {
    //   // por padrao precisa retornar um boolean
    //   // para informar se deve manter ou remover da lista/
    //   // false > remove, true se mantemn
    //   // nao encontrou == -1;

    //   const result = item.toLowerCase().indexOf('2') !== -1; // ===
    //   return result;
    // })

    const family2 = characters.meuFilter((item, index, list) => {
     console.log("index: " + index + " - length: " + list.length);

      return item !== -1;
    });

    const names = family2.map((people) => people + "xxx");
    console.log(names);
  } catch (error) {
    console.error("deu ruim@", error);
  }
}

main();
