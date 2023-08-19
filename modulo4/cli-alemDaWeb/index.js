const { Command } = require("commander");
const Heroi = require("./heroi");
const Database = require("./database");

async function main() {
  /**
   * node cli.js --help
   */
  const program = new Command();

  program
    .version("v1")
    .option("-n, --nome [value]", "Nome do Heroi")
    .option("-p, --poder [value]", "Poder do Heroi")
    .option("-i, --id [value]", "Id do Heroi")
    .option("-c, --cadastrar", "Cadastrar um Heroi")
    .option("-l, --listar", "Listar Herois")
    .option("-r, --remover", "Remove um Heroi")
    .option("-a, --atualizar [value]", "Atualiza um Heroi");

  program.parse(process.argv);

  const options = program.opts();
  const heroi = new Heroi(options);

  try {
    /**
     * node cli.js --cadastrar params...
     * node cli.js -c -n Hulk -p Forca
     */
    //cadastrar
    if (options.cadastrar) {
      delete heroi.id;
      const resultado = await Database.cadastrar(heroi);

      if (!resultado) {
        console.error("Heroi não foi cadastrado!");
        return;
      }
      console.log("Heroi cadastrado com sucesso");
    }

    /**
     * node cli.js --listar
     * node cli.js -r
     * node cli.js -r 1
     */
    //listar
    if (options.listar) {
      const resultado = await Database.listar();
      console.log(resultado);
      return;
    }

    //remover
    if (options.remover) {
      const resultado = Database.remover(heroi.id);

      if (!resultado) {
        console.error("Não foi possível remover o Heroi");
        return;
      }
      console.log("Heroi removido com sucesso");
    }

    //atualizar
    if (options.atualizar) {
      const idParaAtualizar = parseInt(options.atualizar);
      delete heroi.id;
      const dado = JSON.stringify(heroi);
      const heroiAtualizar = JSON.parse(dado);
      const resultado = await Database.atualizar(
        idParaAtualizar,
        heroiAtualizar
      );
      if (!resultado) {
        console.error("Não foi possível atualizar o Heroi");
        return;
      }
      console.log("Heroi atualizado com sucesso");
    }
  } catch (error) {
    console.error("DEU RUIM", error);
    return;
  }
}
main();
