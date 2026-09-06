const params = new URLSearchParams(location.search);
const id = params.get("id");
const type = params.get("type");
const page = document.getElementById("characterPage");

const pool = type === "adventurer" ? gameData.adventurers : gameData.characters;
const character = pool.find(x => x.id === id) || allCharacterEntries[0];

function labelType(item) {
  return item.type === "adventurer" ? "Adventurer Class" : item.partnerType;
}

document.title = `${character.name} | Beemoe's Guide`;

page.innerHTML = `
  <section class="character-hero">
    <div class="wrap character-hero-grid">
      <div class="large-portrait ${character.type}">
        <span class="rarity">${character.rarity}</span>
        <span class="hero-type">${labelType(character)}</span>
        <span class="big-icon">${character.icon || "✦"}</span>
      </div>

      <div>
        <p class="eyebrow">${labelType(character).toUpperCase()}</p>
        <h1>${character.name}</h1>
        <p class="tagline">
          ${character.type === "adventurer"
            ? "Main Character class entry."
            : `${character.partnerType} character entry.`}
        </p>

        <div class="hero-tags">
          <span class="element ${character.element.toLowerCase()}">${character.element}</span>
          <span>${character.role}</span>
          <span>${character.timeTrait}</span>
          ${character.tier ? `<span>Tier ${character.tier}</span>` : ""}
        </div>
      </div>
    </div>
  </section>

  <div class="tab-shell">
    <div class="wrap tabs">
      <a href="#overview">Overview</a>
      <a href="#skills">Skills</a>
      <a href="#memory">Memory Pieces</a>
      <a href="#gear">Recommended Gear</a>
      <a href="#teams">Recommended Team</a>
      <a href="#showcase">Showcase</a>
    </div>
  </div>

  <div class="wrap detail-content">
    <section id="overview" class="detail-section">
      <p class="eyebrow">OVERVIEW</p>
      <h2>${character.name} Overview</h2>
      <div class="overview-grid">
        <div class="overview-panel">
          <span>Character Type</span>
          <strong>${labelType(character)}</strong>
        </div>
        <div class="overview-panel">
          <span>Element</span>
          <strong>${character.element}</strong>
        </div>
        <div class="overview-panel">
          <span>Role</span>
          <strong>${character.role}</strong>
        </div>
        <div class="overview-panel">
          <span>Time Trait</span>
          <strong>${character.timeTrait}</strong>
        </div>
      </div>
      <p class="lead content-placeholder">
        Detailed character overview, strengths, weaknesses, investment recommendation,
        and beginner notes can be added here once the character's full gameplay data is available.
      </p>
    </section>

    <section id="skills" class="detail-section">
      <p class="eyebrow">ABILITIES</p>
      <h2>Skills</h2>
      <div class="placeholder-block">
        <span>Skill data placeholder</span>
        <p>Add skill names, icons, effects, upgrade priority, and rotation recommendations here.</p>
      </div>
    </section>

    <section id="memory" class="detail-section">
      <p class="eyebrow">MEMORY PIECES</p>
      <h2>Recommended Memory Pieces</h2>
      <div class="gear-grid">
        <div class="gear-card"><small>BEST IN SLOT</small><div class="gear-icon">◇</div><h3>To be added</h3></div>
        <div class="gear-card"><small>ALTERNATIVE</small><div class="gear-icon">◇</div><h3>To be added</h3></div>
        <div class="gear-card"><small>F2P / ACCESSIBLE</small><div class="gear-icon">◇</div><h3>To be added</h3></div>
      </div>
    </section>

    <section id="gear" class="detail-section">
      <p class="eyebrow">LOADOUT</p>
      <h2>Recommended Gear</h2>
      <div class="placeholder-block">
        <span>Gear recommendation placeholder</span>
        <p>Add best sets, main stats, substat priority, and alternatives.</p>
      </div>
    </section>

    <section id="teams" class="detail-section">
      <p class="eyebrow">SYNERGY</p>
      <h2>Recommended Team</h2>
      <div class="placeholder-block">
        <span>Team recommendation placeholder</span>
        <p>Recommended formations will use the full Main Character + Battle + Assist + Monster structure.</p>
        <a class="mini-link" href="team-builder.html">Open Team Builder →</a>
      </div>
    </section>

    <section id="showcase" class="detail-section">
      <p class="eyebrow">GAMEPLAY</p>
      <h2>Showcase</h2>
      <div class="showcase">
        <div class="play">▶</div>
        <h3>${character.name} Showcase</h3>
        <p>Add a gameplay video, rotation demo, boss clear, or build showcase here.</p>
      </div>
    </section>
  </div>
`;

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
