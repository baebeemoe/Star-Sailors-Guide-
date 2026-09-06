const slots = document.querySelectorAll(".team-slot");
const backdrop = document.getElementById("pickerBackdrop");
const pickerGrid = document.getElementById("pickerGrid");
const pickerTitle = document.getElementById("pickerTitle");
const closePicker = document.getElementById("closePicker");
const clearTeam = document.getElementById("clearTeam");

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));

let activeSlot = null;
let team = {
  hero: null,
  battle1: null,
  battle2: null,
  assist1: null,
  assist2: null,
  monster: null
};

function choicesForSlot(slot) {
  if (slot === "hero") return gameData.adventurers;
  if (slot.startsWith("battle")) return gameData.characters.filter(x => x.type === "battle");
  if (slot.startsWith("assist")) return gameData.characters.filter(x => x.type === "assist");
  return gameData.monsters;
}

function slotTitle(slot) {
  if (slot === "hero") return "Select Main Character";
  if (slot.startsWith("battle")) return "Select Battle Partner";
  if (slot.startsWith("assist")) return "Select Assist Partner";
  return "Select Monster";
}

function openPicker(slot) {
  activeSlot = slot;
  pickerTitle.textContent = slotTitle(slot);
  const choices = choicesForSlot(slot);

  pickerGrid.innerHTML = choices.map(item => `
    <button class="picker-card" data-id="${item.id}">
      <div class="picker-icon">${item.icon || "✦"}</div>
      <div>
        <strong>${item.name}</strong>
        <small>${item.type === "adventurer" ? "Adventurer Class" : item.partnerType || item.role}</small>
        <div class="picker-tags">
          <span>${item.element}</span>
          <span>${item.role}</span>
          <span>${item.timeTrait}</span>
        </div>
      </div>
    </button>
  `).join("");

  pickerGrid.querySelectorAll(".picker-card").forEach(card => {
    card.addEventListener("click", () => {
      const selected = choices.find(x => x.id === card.dataset.id);
      team[activeSlot] = selected;
      updateSlot(activeSlot, selected);
      closeModal();
      updateAnalysis();
    });
  });

  backdrop.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal() {
  backdrop.hidden = true;
  document.body.classList.remove("modal-open");
}

function updateSlot(slot, item) {
  const el = document.querySelector(`[data-slot="${slot}"]`);
  el.classList.add("filled");
  el.innerHTML = `
    <span class="slot-label">${slotTitle(slot).replace("Select ", "").toUpperCase()}</span>
    <span class="slot-icon">${item.icon || "✦"}</span>
    <strong>${item.name}</strong>
    <small>${item.element} · ${item.role}${item.timeTrait && item.timeTrait !== "—" ? ` · ${item.timeTrait}` : ""}</small>
  `;
}

function summarize(values) {
  const filtered = values.filter(Boolean);
  if (!filtered.length) return "—";
  const counts = filtered.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts).map(([k,v]) => v > 1 ? `${k} ×${v}` : k).join(" · ");
}

function updateAnalysis() {
  const members = Object.values(team).filter(Boolean);
  document.getElementById("slotSummary").textContent = `${members.length} / 6`;
  document.getElementById("elementSummary").textContent = summarize(members.map(x => x.element).filter(x => x && x !== "—"));
  document.getElementById("roleSummary").textContent = summarize(members.map(x => x.role).filter(x => x && x !== "Monster"));
  document.getElementById("timeSummary").textContent = summarize(members.map(x => x.timeTrait).filter(x => x && x !== "—"));

  const note = document.getElementById("teamNote");

  if (!members.length) {
    note.textContent = "Select your team members to generate a formation summary.";
    return;
  }

  const battleCount = [team.battle1, team.battle2].filter(Boolean).length;
  const assistCount = [team.assist1, team.assist2].filter(Boolean).length;

  if (members.length === 6) {
    note.innerHTML = `<strong>Formation complete.</strong> Your team has 1 Main Character, ${battleCount} Battle Partners, ${assistCount} Assist Partners, and 1 Monster.`;
  } else {
    note.innerHTML = `<strong>${members.length} of 6 slots selected.</strong> Continue filling the remaining formation slots.`;
  }
}

slots.forEach(slot => slot.addEventListener("click", () => openPicker(slot.dataset.slot)));
closePicker.addEventListener("click", closeModal);
backdrop.addEventListener("click", e => { if (e.target === backdrop) closeModal(); });

clearTeam.addEventListener("click", () => {
  team = { hero:null, battle1:null, battle2:null, assist1:null, assist2:null, monster:null };
  location.reload();
});

updateAnalysis();
