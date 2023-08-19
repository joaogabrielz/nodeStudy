/*
0 Obter usuario 
1 Obter numero de telefone de um usuario a partir de seu id
3 Obter endereco do usuario pelo id
*/

function obterUsuario(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      nome: "Aladin",
      dataNascimento: new Date()
    })
  }, 1000);
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: '1199002',
      ddd: 11
    })
  }, 2000);
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos bobos',
      numero: 0
    })
  }, 2000);
}



// function resolveUsuario(erro, usuario) {
//   console.log('usuario: ', usuario);
// }

obterUsuario(function resolverUsuario(error, usuario) {

  // null || "" || 0 --> false
  if(error){
    console.log("Deu ruim usuario - ", error);
    return; 
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if(error1){
      console.log("Deu ruim telefone - ", error1);
      return; 
    }

    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      if(error2){
        console.log("Deu ruim endereco - ", error2);
        return; 
      }

      console.log(`
        Nome: ${usuario.nome},
        Endereco: ${endereco.rua} - ${endereco.numero},
        Telefone: (${telefone.ddd})${telefone.telefone}
      `);
    });
  });
});
// const telefone = obterTelefone(usuario.id);


// console.log('telefone: ', telefone);