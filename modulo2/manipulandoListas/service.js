const axios = require("axios");
//const URL = `https://swapi.co/api/people`;
const URL = `https://swapi.dev/api/films`;

async function obterPessoas(nome) {
  //const url = `${URL}/?search=${nome}&format=json`;
  const url = `${URL}/${nome}`;
  const response = await axios.get(url);
  return response.data;
}

// obterPessoas("2")
//   .then(function (resultado) {
//     console.log("resultado: ", resultado);
//   })
//   .catch(function (error) {
//     console.log("deu ruim", error);
//   });

module.exports = {
  obterPessoas,
};
