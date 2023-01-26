import data from './pokedex.json' assert { type: 'json' };
const output = document.getElementById("output");

let html = "";

for (let i = 0; i < data.pokemon.length; i++) { // html +=`<p>${data.pokemon[i].name}: ${data.pokemon[i].num}</p>`;
    let next_evolution = 'none'} 



    
    {
    html += `
    <main class="pokemon-card">
      <section class="title-row">
        <p class="rarity">${data.pokemon[i].id}</p>
        <h1 class="name">${data.pokemon[i].name}</h1>
        <p class="num">${data.pokemon[i].num}</p>
      </section>
      <section class="character-img">
        <img src="${data.pokemon[i].img}">
      </section>
      <section class="character-meta">
        <p>${data.pokemon[i].type} Length: ${data.pokemon[i].height}, Weight: ${data.pokemon[i].weight}.</p>
      </section>
  
      <section class="character-ability">m-pliers
      ${data.pokemon[i].multipliers} 
        <span class="ability-description">
          <span class="ability-name">spawn<br>${data.pokemon[i].spawn_chance}%</span>
        </span>
        <p class="ability-damage">${data.pokemon[i].egg}</p>
      </section>
      <section class="character-ability">
        <span class="ability-cost">${data.pokemon[i].candy} ${data.pokemon[i].candy_count}
        </span>
        <span class="ability-description">
          <span class="ability-name">weaknesses</span>
          <p>${data.pokemon[i].weaknesses}</p>
        </span>
        <p class="ability-damage">${data.pokemon[i].spawn_time}</p>
      </section>
      </span>
      <section class="character-description">
        <p>${next_evolution}</p>
      </section>
      </div>
    </main>`;
  
  }
  output.innerHTML = html;