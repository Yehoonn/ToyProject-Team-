import apikey from "./apikey.js";

export default {
  apiCall: async function (type, callCount) {
    let count = 0;
    let response = await fetch(`https://pokeapi.co/api/v2/${type}`);
    let result = response.json();
    result.then((value) => {
      for (let i = 0; i <= callCount; i++) {
        if (type === `pokemon-form/${i}`) {
          this.dataArray.imgArray.push(value.sprites.front_default);
        }
        if (type === `pokemon-species/${i}`) {
          value.names.forEach((elem) => {
            if (elem.language.name === "ko") {
              this.dataArray.nameArray.push(elem.name);
            }
          });

          // value.genera.forEach((elem) => {
          //   if (elem.language.name === "ko") {
          //     console.log(elem.genus);
          //   }
          // });

          value.flavor_text_entries.forEach((elem) => {
            if (elem.language.name === "ko" && count === 0) {
              this.dataArray.guideArray.push(elem.flavor_text);
              count++;
            }
          });
        }
      }
    });
  },
  DataCall: function (count) {
    for (let i = 1; i <= count; i++) {
      this.apiCall(`${apikey.pokemonform}/${[i]}`, count); // spirtes 불러오는 것
      this.apiCall(`${apikey.pokemonspecies}/${[i]}`, count); // 포켓몬 이름, 속성,
    }
  },
  dataArray: { imgArray: [], nameArray: [], guideArray: [] },
};
