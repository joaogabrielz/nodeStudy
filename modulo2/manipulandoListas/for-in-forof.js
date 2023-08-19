const service = require("./service");

async function main() {
  try {
    const result = await service.obterPessoas(2);
    const characters = [];

    // console.time('for');  // 0.102ms
    // for (let i = 0; i < result.characters.length; i++) {
    //   const character = result.characters[i];
    //   characters.push(character);
    // }
    // console.timeEnd('for');

    // --------------------------

    // console.time('for-in'); // 0.094ms
    // for (let i in result.characters) {
    //   const character = result.characters[i];
    //   characters.push(character);
    // }
    // console.timeEnd('for-in');

    // --------------------------

    // console.time('for-of'); // 0.584ms
    // for (character of result.characters) {
    //   characters.push(character);
    // }
    // console.timeEnd('for-of');

    // --------------------------

    console.log("characters: ", characters);
  } catch (error) {
    console.error("error interno: ", error);
  }
}

main();
