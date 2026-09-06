const grid = document.getElementById("characterGrid");
const resultCount = document.getElementById("resultCount");
const tabs = document.querySelectorAll(".db-tab");
const elementFilter = document.getElementById("elementFilter");
const roleFilter = document.getElementById("roleFilter");
const timeFilter = document.getElementById("timeFilter");
const searchInput = document.getElementById("searchInput");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

let activeType = "all";

function elementClass(element) {
  return String(element || "").toLowerCase();
}

function typeLabel(item) {
  if (item.type === "adventurer") return "Adventurer Class";
  return item.partnerType || "Partner";
}

function render() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = allCharacterEntries.filter(item => {
    const typeOk = activeType === "all" || item.type === activeType;
    const elementOk = elementFilter.value === "all" || item.element === elementFilter.value;
    const roleOk = roleFilter.value === "all" || item.role === roleFilter.value;
    const timeOk = timeFilter.value === "all" || item.timeTrait === timeFilter.value;
    const searchOk = !query || item.name.toLowerCase().includes(query);
    return typeOk && elementOk && roleOk && timeOk && searchOk;
  });

  resultCount.textContent = filtered.length;

  grid.innerHTML = filtered.map(item => `
    <a class="character-card" href="character.html?id=${encodeURIComponent(item.id)}&type=${item.type}">
      <div class="portrait ${item.type}">
        <span class="rarity">${item.rarity}</span>
        <span class="type-badge">${typeLabel(item)}</span>
        <span class="portrait-icon">${item.icon || "✦"}</span>
      </div>
      <div class="card-body">
        <div class="card-top">
          <div>
            <h2>${item.name}</h2>
            <p>${typeLabel(item)}</p>
          </div>
          <span class="element ${elementClass(item.element)}">${item.element}</span>
        </div>
        <div class="attribute-row">
          <span>${item.role}</span>
          <span>${item.timeTrait}</span>
        </div>
        <div class="badges">
          <span>${item.type === "adventurer" ? `Tier ${item.tier || ""}` : item.partnerType}</span>
          <span>View Guide →</span>
        </div>
      </div>
    </a>
  `).join("");
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(x => x.classList.remove("active"));
    tab.classList.add("active");
    activeType = tab.dataset.type;
    render();
  });
});

[elementFilter, roleFilter, timeFilter].forEach(el => el.addEventListener("change", render));
searchInput.addEventListener("input", render);

menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));

render();
