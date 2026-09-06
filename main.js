const grid = document.getElementById("characterGrid");
const filterButtons = document.querySelectorAll(".filter");

function renderCharacters(filter = "all") {
  const visible = filter === "all"
    ? characters
    : characters.filter(character => character.element === filter);

  grid.innerHTML = visible.map(character => `
    <a class="character-card" href="character.html?id=${character.id}">
      <div class="portrait">
        <span class="rarity">${character.rarity}</span>
        <span class="portrait-icon">${character.icon}</span>
      </div>
      <div class="card-body">
        <div class="card-top">
          <h2>${character.name}</h2>
          <span class="element ${character.element.toLowerCase()}">${character.element}</span>
        </div>
        <p>${character.role}</p>
        <div class="badges">
          <span>${character.combatType}</span>
          <span>View Guide →</span>
        </div>
      </div>
    </a>
  `).join("");
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderCharacters(button.dataset.filter);
  });
});

renderCharacters();
