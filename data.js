const gameData = {
  adventurers: [
    { id:"swordsman", name:"Swordsman", type:"adventurer", tier:"I", element:"Fire", role:"Attacker", timeTrait:"Daylight", icon:"⚔", rarity:"Tier I" },
    { id:"warrior", name:"Warrior", type:"adventurer", tier:"II", element:"Fire", role:"Attacker", timeTrait:"Daylight", icon:"⚔", rarity:"Tier II" },
    { id:"highlander", name:"Highlander", type:"adventurer", tier:"III", element:"Fire", role:"Attacker", timeTrait:"Daylight", icon:"⚔", rarity:"Tier III" },
    { id:"cleric", name:"Cleric", type:"adventurer", tier:"II", element:"Light", role:"Defender", timeTrait:"Midnight", icon:"🛡", rarity:"Tier II" },
    { id:"paladin", name:"Paladin", type:"adventurer", tier:"III", element:"Light", role:"Defender", timeTrait:"Midnight", icon:"🛡", rarity:"Tier III" },
    { id:"enchanter", name:"Enchanter", type:"adventurer", tier:"II", element:"Earth", role:"Supporter", timeTrait:"Daylight", icon:"✚", rarity:"Tier II" },
    { id:"sage", name:"Sage", type:"adventurer", tier:"III", element:"Earth", role:"Supporter", timeTrait:"Daylight", icon:"✚", rarity:"Tier III" }
  ],

  characters: [
    { id:"heidi", name:"Heidi", type:"battle", partnerType:"Battle Partner", element:"Fire", role:"Attacker", timeTrait:"Daylight", rarity:"SSR", icon:"🔥" },
    { id:"erling", name:"Erling", type:"battle", partnerType:"Battle Partner", element:"Water", role:"Defender", timeTrait:"Midnight", rarity:"SSR", icon:"💧" },
    { id:"nina", name:"Nina", type:"battle", partnerType:"Battle Partner", element:"Earth", role:"Attacker", timeTrait:"Daylight", rarity:"SSR", icon:"◆" },
    { id:"soul", name:"Soul", type:"battle", partnerType:"Battle Partner", element:"Fire", role:"Attacker", timeTrait:"Midnight", rarity:"SSR", icon:"🔥" },
    { id:"nadia-sand", name:"Nadia the Sand Artist", type:"battle", partnerType:"Battle Partner", element:"Earth", role:"Defender", timeTrait:"Midnight", rarity:"SSR", icon:"◆" },
    { id:"ethan", name:"Ethan", type:"battle", partnerType:"Battle Partner", element:"Light", role:"Attacker", timeTrait:"Daylight", rarity:"SSR", icon:"✦" },
    { id:"lucy-mayreel", name:"Lucy Mayreel", type:"battle", partnerType:"Battle Partner", element:"Light", role:"Attacker", timeTrait:"Midnight", rarity:"SSR", icon:"✦" },
    { id:"jen", name:"Jen", type:"battle", partnerType:"Battle Partner", element:"Fire", role:"Defender", timeTrait:"Daylight", rarity:"SR", icon:"🔥" },
    { id:"kaira", name:"Kaira", type:"battle", partnerType:"Battle Partner", element:"Light", role:"Supporter", timeTrait:"Twilight", rarity:"SR", icon:"✦" },
    { id:"remi", name:"Remi", type:"battle", partnerType:"Battle Partner", element:"Earth", role:"Defender", timeTrait:"Daylight", rarity:"SR", icon:"◆" },
    { id:"rak", name:"Rak", type:"battle", partnerType:"Battle Partner", element:"Fire", role:"Defender", timeTrait:"Midnight", rarity:"SR", icon:"🔥" },
    { id:"carat", name:"Carat", type:"battle", partnerType:"Battle Partner", element:"Wind", role:"Attacker", timeTrait:"Daylight", rarity:"SR", icon:"🍃" },
    { id:"iron", name:"Iron", type:"battle", partnerType:"Battle Partner", element:"Earth", role:"Defender", timeTrait:"Midnight", rarity:"SR", icon:"◆" },

    { id:"rolling-pop", name:"Remi the Rolling Pop", type:"assist", partnerType:"Assist Partner", element:"Earth", role:"Supporter", timeTrait:"Midnight", rarity:"SSR", icon:"◆" },
    { id:"nadia", name:"Nadia", type:"assist", partnerType:"Assist Partner", element:"Water", role:"Debuffer", timeTrait:"Midnight", rarity:"SSR", icon:"💧" },
    { id:"ed", name:"Ed", type:"assist", partnerType:"Assist Partner", element:"Fire", role:"Supporter", timeTrait:"Daylight", rarity:"SR", icon:"🔥" },
    { id:"hunter-k", name:"Hunter K", type:"assist", partnerType:"Assist Partner", element:"Earth", role:"Supporter", timeTrait:"Daylight", rarity:"SR", icon:"◆" },
    { id:"jerry", name:"Jerry", type:"assist", partnerType:"Assist Partner", element:"Earth", role:"Attacker", timeTrait:"Daylight", rarity:"SR", icon:"◆" },
    { id:"nutty", name:"Nutty", type:"assist", partnerType:"Assist Partner", element:"Earth", role:"Debuffer", timeTrait:"Midnight", rarity:"SR", icon:"◆" },
    { id:"caroline", name:"Caroline", type:"assist", partnerType:"Assist Partner", element:"Fire", role:"Debuffer", timeTrait:"Daylight", rarity:"SR", icon:"🔥" },
    { id:"iris", name:"Iris", type:"assist", partnerType:"Assist Partner", element:"Light", role:"Attacker", timeTrait:"Midnight", rarity:"SR", icon:"✦" },
    { id:"sion", name:"Sion", type:"assist", partnerType:"Assist Partner", element:"Light", role:"Attacker", timeTrait:"Twilight", rarity:"SR", icon:"✦" },
    { id:"dora", name:"Dora", type:"assist", partnerType:"Assist Partner", element:"Water", role:"Supporter", timeTrait:"Twilight", rarity:"SR", icon:"💧" },
    { id:"simo", name:"Simo", type:"assist", partnerType:"Assist Partner", element:"Wind", role:"Debuffer", timeTrait:"Midnight", rarity:"SR", icon:"🍃" },
    { id:"mui", name:"Mui", type:"assist", partnerType:"Assist Partner", element:"Wind", role:"Supporter", timeTrait:"Daylight", rarity:"SR", icon:"🍃" }
  ],

  monsters: [
    { id:"primal-tan", name:"Primal Tan", type:"monster", rarity:"UR", element:"Water", role:"Monster", timeTrait:"—", icon:"◈" },
    { id:"monster-placeholder", name:"Monster Slot", type:"monster", rarity:"—", element:"—", role:"Monster", timeTrait:"—", icon:"◈" }
  ]
};

const allCharacterEntries = [...gameData.adventurers, ...gameData.characters];
