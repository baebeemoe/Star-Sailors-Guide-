const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const character = characters.find(item => item.id === id) || characters[0];
const page = document.getElementById("characterPage");

document.title = `${character.name} | Beemoe's Guide`;

page.innerHTML = `
  <section class="character-hero">
    <div class="wrap character-hero-grid">
      <div class="large-portrait">
        <span class="rarity">${character.rarity}</span>
        <span>${character.icon}</span>
      </div>
      <div>
        <p class="eyebrow">CHARACTER GUIDE</p>
        <h1>${character.name}</h1>
        <p class="tagline">${character.tagline}</p>
        <div class="hero-tags">
          <span class="element ${character.element.toLowerCase()}">${character.element}</span>
          <span>${character.combatType}</span>
          <span>${character.role}</span>
        </div>
        <div class="investment"><small>INVESTMENT</small><strong>${character.investment}</strong></div>
      </div>
    </div>
  </section>

  <div class="tab-shell">
    <div class="wrap tabs">
      <a href="#overview">Overview</a>
      <a href="#skills">Skills</a>
      <a href="#gear">Recommended Gear</a>
      <a href="#teams">Recommended Team</a>
      <a href="#showcase">Showcase</a>
    </div>
  </div>

  <div class="wrap detail-content">
    <section id="overview" class="detail-section">
      <p class="eyebrow">OVERVIEW</p>
      <h2>Character Overview</h2>
      <p class="lead">${character.overview}</p>
      <div class="two-col">
        <div class="info-panel good">
          <h3>Strengths</h3>
          <ul>${character.strengths.map(x => `<li>✓ ${x}</li>`).join("")}</ul>
        </div>
        <div class="info-panel bad">
          <h3>Weaknesses</h3>
          <ul>${character.weaknesses.map(x => `<li>– ${x}</li>`).join("")}</ul>
        </div>
      </div>
    </section>

    <section id="skills" class="detail-section">
      <p class="eyebrow">ABILITIES</p>
      <h2>Skills</h2>
      <div class="skill-list">
        ${character.skills.map(skill => `
          <article class="skill">
            <div class="skill-icon">${skill.icon}</div>
            <div>
              <small>${skill.type}</small>
              <h3>${skill.name}</h3>
              <p>${skill.description}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>

    <section id="gear" class="detail-section">
      <p class="eyebrow">LOADOUT</p>
      <h2>Recommended Gear</h2>
      <div class="gear-grid">
        <div class="gear-card"><small>BEST GEAR SET</small><div class="gear-icon">⚙</div><h3>${character.gear.best}</h3></div>
        <div class="gear-card"><small>ALTERNATIVE</small><div class="gear-icon">◇</div><h3>${character.gear.alternative}</h3></div>
        <div class="gear-card"><small>ARTIFACT</small><div class="gear-icon">✦</div><h3>${character.gear.artifact}</h3></div>
      </div>
      <div class="stat-panel">
        <div><small>MAIN STAT</small><strong>${character.gear.mainStat}</strong></div>
        <div><small>SUBSTAT PRIORITY</small><strong>${character.gear.substats}</strong></div>
      </div>
    </section>

    <section id="teams" class="detail-section">
      <p class="eyebrow">SYNERGY</p>
      <h2>Recommended Team</h2>
      <div class="team-list">
        ${character.teams.map(team => `
          <article class="team-card">
            <div>
              <small>${team.name}</small>
              <div class="team-members">
                ${team.members.map(member => `<span><b>${member.charAt(0)}</b>${member}</span>`).join("<i>+</i>")}
              </div>
            </div>
            <p>${team.note}</p>
          </article>
        `).join("")}
      </div>
    </section>

    <section id="showcase" class="detail-section">
      <p class="eyebrow">GAMEPLAY</p>
      <h2>Showcase</h2>
      <div class="showcase">
        <div class="play">▶</div>
        <h3>${character.showcase.title}</h3>
        <p>${character.showcase.text}</p>
        <small>Replace this block with a YouTube iframe or your own video.</small>
      </div>
    </section>
  </div>
`;
