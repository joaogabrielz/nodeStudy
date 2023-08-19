/*
0 Obter usuario 
1 Obter numero de telefone de um usuario a partir de seu id
3 Obter endereco do usuario pelo id
*/

const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco)


function obterUsuario() {
  // algo insesperado/problema -> reject
  // sucesso -> resolve
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      // return reject(new Error("deu ruim de vdd"));
      return resolve({
        id: 1,
        nome: "Aladin",
        dataNascimento: new Date(),
      });
    }, 1000);
  });
}

// pipeline
// usuario -> telefone -> telefone

const usuarioPromise = obterUsuario();
usuarioPromise
  .then(function (usuario) {
    return obterTelefone(usuario.id).then(function resolverTelefone(result) {
      return {
        usuario: {
          nome: usuario.nome,
          id: usuario.id,
        },
        telefone: result,
      };
    });
  })
  .then(function(resultado) {
    const endereco = obterEnderecoAsync(resultado.usuario.id)
    return endereco.then(function resolverEndereco(result) {
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        endereco: result
      }
    });
  })
  .then(function (resultado) {
    console.log(`
    Nome: ${resultado.usuario.nome}.
    Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}.
    Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}.
    `);
  })
  .catch(function (error) {
    console.error("deu rum", error);
  });

function obterTelefone(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        telefone: "1199002",
        ddd: 11,
      });
    }, 2000);
  });
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "dos bobos",
      numero: 0,
    });
  }, 2000);
}