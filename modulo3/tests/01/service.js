const { get } = require("axios");

//const URL = `https://swapi.dev/api/films/1/`;

// async function obterPessoas(id) {
//   const result = await get(URL + id.toString());
//   return result.data;

//const array = result.data.characters;

// const promises = array.map(async (el) => {
//   const searching = await get(el);
//  return searching.data;
// })

// const searchResults = await Promise.all(promises);
// const achived = searchResults.find((char) => char.name.toLowerCase() === nome.toLowerCase());
// console.log(achived);

// return achived || null;
// }
//obterPessoas('R2-d2');

const URL = `https://swapi.dev/api/people/`;
3;

async function obterPessoas(id) {
  const result = await get(URL + id.toString());
  const array = [result.data];
 
  //return result.data;
  return array.map(mapearPessoas);
}
//obterPessoas(3);

function mapearPessoas(item) {
  return {
    nome: item.name,
    peso: item.height,
  };
}

module.exports = {
  obterPessoas,
};
