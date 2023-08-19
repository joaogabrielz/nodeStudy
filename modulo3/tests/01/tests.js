const assert = require("assert");

const { obterPessoas } = require("./service");

// install pacote nock, para simular requisicoes.. -> npm install nock
const nock = require("nock");

describe("Star wars test", function () {
  this.beforeAll(() => {

    const response = {
      name: "R2-D2",
      height: "96",
      mass: "32",
      hair_color: "n/a",
      skin_color: "white, blue",
      eye_color: "red",
      birth_year: "33BBY",
      gender: "n/a",
      homeworld: "https://swapi.dev/api/planets/8/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/",
      ],
      species: ["https://swapi.dev/api/species/2/"],
      vehicles: [],
      starships: [],
      created: "2014-12-10T15:11:50.376000Z",
      edited: "2014-12-20T21:17:50.311000Z",
      url: "https://swapi.dev/api/people/3/",
    }; 

    //nock('https://swapi.dev/api/people/').get('/?search=r2-d2&format=json');

    nock("https://swapi.dev/api/people").get("/3").reply(200, response);

    // se passou parametro diferente quebra..
    // parte das infos que a api externa esteja retornando certo
  });

  it("deve buscar r2-d2 no formato correto", async () => {
    const expected = [{ nome: "R2-D2", peso: "96" }];

    const idBase = 3;

    const result = await obterPessoas(idBase);
    assert.deepEqual(result, expected);

    // run: mocha tests.js
  }).timeout(20000);
});
