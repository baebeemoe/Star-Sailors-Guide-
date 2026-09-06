const characters = [
  {
    id: "astra",
    name: "Astra",
    rarity: "SSR",
    element: "Fire",
    combatType: "Assault",
    role: "Main DPS",
    icon: "⚔️",
    tagline: "A high-impact attacker built around explosive burst windows.",
    overview: "Astra is a sample character used to demonstrate how a complete guide page works. Replace this text and the placeholder artwork with the real Star Sailors character information.",
    strengths: ["High burst damage", "Strong boss pressure", "Simple damage rotation"],
    weaknesses: ["Needs team support", "Gear dependent"],
    investment: "★★★★★",
    skills: [
      { icon: "✦", type: "Basic Attack", name: "Star Strike", description: "Deals Fire damage to a single target." },
      { icon: "◆", type: "Skill", name: "Solar Break", description: "Launches a powerful attack and increases Astra's damage for the next action." },
      { icon: "☄", type: "Ultimate", name: "Supernova", description: "Deals massive Fire damage and gains additional power against marked enemies." },
      { icon: "◎", type: "Passive", name: "Burning Core", description: "Increases offensive power as Astra continues attacking." }
    ],
    gear: {
      best: "Crimson Vanguard Set",
      alternative: "Starlight Assault Set",
      artifact: "Solar Core",
      mainStat: "ATK%",
      substats: "Crit Rate → Crit DMG → ATK → Speed"
    },
    teams: [
      { name: "Balanced Team", members: ["Astra", "Lyra", "Orion"], note: "Astra deals damage while Lyra provides support and Orion protects the team." },
      { name: "Burst Team", members: ["Astra", "Nova", "Lyra"], note: "Focused on amplifying Astra's burst windows." }
    ],
    showcase: {
      title: "Astra Gameplay Showcase",
      text: "This area can contain your YouTube embed, gameplay recording, rotation guide, or boss showcase."
    }
  },
  {
    id: "lyra",
    name: "Lyra",
    rarity: "SSR",
    element: "Water",
    combatType: "Support",
    role: "Buffer / Support",
    icon: "✨",
    tagline: "A flexible support who strengthens the team's primary damage dealer.",
    overview: "Lyra is another sample entry showing that each character can have completely different elements, combat types, skills, gear, and teams.",
    strengths: ["Strong team buffs", "Flexible team placement", "Beginner friendly"],
    weaknesses: ["Low personal damage", "Best value depends on teammates"],
    investment: "★★★★☆",
    skills: [
      { icon: "✦", type: "Basic Attack", name: "Tidal Note", description: "Deals Water damage to one target." },
      { icon: "◆", type: "Skill", name: "Harmonic Tide", description: "Enhances an ally and increases their combat effectiveness." },
      { icon: "☄", type: "Ultimate", name: "Celestial Chorus", description: "Provides a powerful team-wide combat buff." },
      { icon: "◎", type: "Passive", name: "Resonance", description: "Grants additional benefits when supported allies take actions." }
    ],
    gear: {
      best: "Ocean's Hymn Set",
      alternative: "Navigator Support Set",
      artifact: "Resonant Pearl",
      mainStat: "Energy / Speed",
      substats: "Speed → Energy → HP → Defense"
    },
    teams: [
      { name: "Astra Carry", members: ["Astra", "Lyra", "Orion"], note: "Lyra enhances Astra while Orion provides defensive utility." },
      { name: "Flexible Support", members: ["Nova", "Lyra", "Orion"], note: "A general-purpose composition for progression." }
    ],
    showcase: {
      title: "Lyra Support Showcase",
      text: "Use this section to demonstrate buff timing, rotations, and team synergy."
    }
  },
  {
    id: "orion",
    name: "Orion",
    rarity: "SR",
    element: "Wind",
    combatType: "Guardian",
    role: "Tank / Utility",
    icon: "🛡️",
    tagline: "A defensive specialist who keeps fragile damage dealers alive.",
    overview: "Orion demonstrates a lower-rarity defensive character entry using the same reusable detail-page template.",
    strengths: ["Reliable defense", "Useful utility", "Easy to slot into teams"],
    weaknesses: ["Limited damage", "Slower clears"],
    investment: "★★★☆☆",
    skills: [
      { icon: "✦", type: "Basic Attack", name: "Gale Bash", description: "Deals Wind damage to one enemy." },
      { icon: "◆", type: "Skill", name: "Aegis Current", description: "Provides protection to the team." },
      { icon: "☄", type: "Ultimate", name: "Storm Fortress", description: "Greatly improves team survivability." },
      { icon: "◎", type: "Passive", name: "Guardian's Oath", description: "Improves defensive effectiveness when allies are threatened." }
    ],
    gear: {
      best: "Tempest Guard Set",
      alternative: "Iron Voyager Set",
      artifact: "Guardian Compass",
      mainStat: "HP% / Defense",
      substats: "HP → Defense → Speed → Resistance"
    },
    teams: [
      { name: "Safe Progression", members: ["Astra", "Lyra", "Orion"], note: "A balanced beginner composition with damage, buffs, and protection." }
    ],
    showcase: {
      title: "Orion Survival Showcase",
      text: "Showcase defensive uptime, difficult encounters, or team survival here."
    }
  }
];
