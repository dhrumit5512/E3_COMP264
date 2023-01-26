import data from './pokedex.json' assert { type: 'json' };
const output = document.getElementById("output");

let html = "";

for (let i = 0; i < data.pokemon.length; i++) { // html +=`<p>${data.pokemon[i].name}: ${data.pokemon[i].num}</p>`;
    let next_evolution = 'none'}

    if (data.pokemon[i].next_evolution) {
        next_evolution = data.pokemon[i].next_evolution[0].name + data.pokemon[i].next_evolution[0].num;
      }