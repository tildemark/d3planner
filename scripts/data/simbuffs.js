DiabloCalc.simMapping = {
  status: {
    chilled: "Chilled",
    frozen: "Frozen",
    blinded: "Blinded",
    stunned: "Stunned",
    slowed: "Slowed",
    knockback: "Knockback",
    charmed: "Charmed",
    feared: "Feared",
    rooted: "Immobilized",
  },
  targetOptions: {
    distance: {var: "targetDistance", name: "Distance", tip: "Player distance from the center of the monster cluster.", min: 0, max: 50, val: 40, profile: true},
    radius: {var: "targetRadius", name: "Spread", tip: "Maximum monster distance from the cluster center.", min: 0, max: 50, val: 0},
    size: {var: "targetSize", name: "Size", tip: "Monster hitbox radius.", min: 0, max: 10, val: 2.5, step: 0.1},
    globes: {var: "globeRate", name: "Globes/min", tip: "Number of globes per minute generated by the party.", min: 0, max: 100, val: 0},
    initrc: {var: "startResource", name: "Resource", tip: "Starting amount of primary resource.", min: 0, max: 100, val: 100, profile: true, resource: true},
    whites: {var: "targetCount", name: "Whites", tip: "Number of regular monsters in the cluster.", min: 0, max: 100, val: 1},
    elites: {var: "targetElites", name: "Elites", tip: "Number of elite monsters in the cluster.", min: 0, max: 20, val: 0},
    bosses: {var: "targetBosses", name: "Boss", tip: "Number of bosses in the cluster.", min: 0, max: 1, val: 0},
    health: {var: "targetHealth", name: "Health", tip: "Monster health.", health: true, val: -1},
  },
  opts: {
    buff: "Buff stacks",
    buffmin: "Buff duration (min)",
    buffmax: "Buff duration",
    ticks: "Buff ticks",
    resource: "Resource",
    resourcepct: "Resource (percent)",
    cooldown: "Cooldown",
    charges: "Charges",
    interval: "Time since cast",
    health: "Target HP (percent)",
    any: "Any condition",
    all: "All conditions",
    count: "Number of conditions",
  },
  buffs: {
    chilled: {name: "Chilled", category: "Status"},
    frozen: {name: "Frozen", category: "Status"},
    blinded: {name: "Blinded", category: "Status"},
    stunned: {name: "Stunned", category: "Status"},
    slowed: {name: "Slowed", category: "Status"},
    knockback: {name: "Knockback", category: "Status"},
    charmed: {name: "Charmed", category: "Status"},
    feared: {name: "Feared", category: "Status"},
    rooted: {name: "Immobilized", category: "Status"},

    conflagrate: {name: "Magic Missile - Conflagrate", category: "Skills", classes: ["wizard"], skill: ["magicmissile", "c"]},
    flameblades: {name: "Spectral Blade - Flame Blades", category: "Skills", classes: ["wizard"], skill: ["spectralblade", "a"]},
    electrocute: {name: "Electrocute (Channeling)", category: "Skills", classes: ["wizard"], skill: ["electrocute"]},
    rayoffrost: {name: "Ray of Frost (Channeling)", category: "Skills", classes: ["wizard"], skill: ["rayoffrost"]},
    snowblast: {name: "Ray of Frost - Snow Blast", category: "Skills", classes: ["wizard"], skill: ["rayoffrost", "a"]},
    spark: {name: "Arcane Orb - Spark", category: "Skills", classes: ["wizard"], skill: ["arcaneorb", "b"]},
    scorch: {name: "Arcane Orb - Scorch", category: "Skills", classes: ["wizard"], skill: ["arcaneorb", "d"]},
    arcanetorrent: {name: "Arcane Torrent (Channeling)", category: "Skills", classes: ["wizard"], skill: ["arcanetorrent"]},
    arcanemines: {name: "Arcane Torrent - Arcane Mines", category: "Skills", classes: ["wizard"], skill: ["arcanetorrent", "c"]},
    disintegrate: {name: "Disintegrate (Channeling)", category: "Skills", classes: ["wizard"], skill: ["disintegrate"]},
    intensify: {name: "Disintegrate - Intensify", category: "Skills", classes: ["wizard"], skill: ["disintegrate", "a"]},
    frozenmist: {name: "Frost Nova - Frozen Mist", category: "Skills", classes: ["wizard"], skill: ["frostnova", "c"]},
    deepfreeze: {name: "Frost Nova - Deep Freeze", category: "Skills", classes: ["wizard"], skill: ["frostnova", "e"]},
    bonechill: {name: "Frost Nova - Bone Chill", category: "Skills", classes: ["wizard"], skill: ["frostnova", "a"]},
    diamondskin: {name: "Diamond Skin", category: "Skills", classes: ["wizard"], skill: ["diamondskin"]},
    slowtime: {name: "Slow Time", category: "Skills", classes: ["wizard"], skill: ["slowtime"]},
    safepassage: {name: "Teleport - Safe Passage", category: "Skills", classes: ["wizard"], skill: ["teleport", "c"]},
    arcaneattunement: {name: "Wave of Force - Arcane Attunement", category: "Skills", classes: ["wizard"], skill: ["waveofforce", "d"]},
    energytwister: {name: "Energy Twister", category: "Skills", classes: ["wizard"], skill: ["energytwister"]},
    galeforce: {name: "Energy Twister - Gale Force", category: "Skills", classes: ["wizard"], skill: ["energytwister", "a"]},
    ragingstorm: {name: "Energy Twister - Raging Storm", category: "Skills", classes: ["wizard"], skill: ["energytwister", "b"]},
    stormchaser: {name: "Energy Twister - Storm Chaser", category: "Skills", classes: ["wizard"], skill: ["energytwister", "c"]},
    hydra: {name: "Hydra", category: "Skills", classes: ["wizard"], skill: ["hydra"]},
    blizzard: {name: "Blizzard", category: "Skills", classes: ["wizard"], skill: ["blizzard"]},
    lightningstorm: {name: "Blizzard - Lightning Storm", category: "Skills", classes: ["wizard"], skill: ["blizzard", "c"]},
    icearmor: {name: "Ice Armor", category: "Skills", classes: ["wizard"], skill: ["icearmor"]},
    stormarmor: {name: "Storm Armor", category: "Skills", classes: ["wizard"], skill: ["stormarmor"]},
    magicweapon: {name: "Magic Weapon", category: "Skills", classes: ["wizard"], skill: ["magicweapon"]},
    familiar: {name: "Familiar", category: "Skills", classes: ["wizard"], skill: ["familiar"]},
    energyarmor: {name: "Energy Armor", category: "Skills", classes: ["wizard"], skill: ["energyarmor"]},
    mirrorimage: {name: "Mirror Image", category: "Skills", classes: ["wizard"], skill: ["mirrorimage"]},
    archon: {name: "Archon", category: "Skills", classes: ["wizard"], skill: ["archon"]},
    archon_disintegrationwave: {name: "Archon - Disintegration Wave (Channeling)", category: "Skills", classes: ["wizard"], skill: ["archon"]},
    absolutezero: {name: "Black Hole - Absolute Zero", category: "Skills", classes: ["wizard"], skill: ["blackhole", "e"]},
    spellsteal: {name: "Black Hole - Spellsteal", category: "Skills", classes: ["wizard"], skill: ["blackhole", "d"]},

    archon_stacks: {name: "Archon - Stacks", category: "Skills", classes: ["wizard"], skill: ["archon"]},

    conflagration: {name: "Conflagration", category: "Passives", classes: ["wizard"], passive: "conflagration"},
    arcanedynamo: {name: "Arcane Dynamo", category: "Passives", classes: ["wizard"], passive: "arcanedynamo"},
    unwaveringwill: {name: "Unwavering Will", category: "Passives", classes: ["wizard"], passive: "unwaveringwill"},
    audacity: {name: "Audacity", category: "Passives", classes: ["wizard"], passive: "audacity"},
    elementalexposure: {name: "Elemental Exposure", category: "Passives", classes: ["wizard"], passive: "elementalexposure"},
    ee_fire: {name: "Elemental Exposure - Fire", category: "Passives", classes: ["wizard"], passive: "elementalexposure"},
    ee_cold: {name: "Elemental Exposure - Cold", category: "Passives", classes: ["wizard"], passive: "elementalexposure"},
    ee_lightning: {name: "Elemental Exposure - Lightning", category: "Passives", classes: ["wizard"], passive: "elementalexposure"},
    ee_arcane: {name: "Elemental Exposure - Arcane", category: "Passives", classes: ["wizard"], passive: "elementalexposure"},

    entanglingshot: {name: "Entangling Shot", category: "Skills", classes: ["demonhunter"], skill: ["entanglingshot"]},
    shockcollar: {name: "Entangling Shot - Shock Collar", category: "Skills", classes: ["demonhunter"], skill: ["entanglingshot", "c"]},
    coldgrenade: {name: "Grenade - Cold Grenade", category: "Skills", classes: ["demonhunter"], skill: ["grenade", "a"]},
    rapidfire: {name: "Rapid Fire (Channeling)", category: "Skills", classes: ["demonhunter"], skill: ["rapidfire"]},
    firesupport: {name: "Rapid Fire - Fire Support", category: "Skills", classes: ["demonhunter"], skill: ["rapidfire", "c"]},
    shurikencloud: {name: "Chakram - Shuriken Cloud", category: "Skills", classes: ["demonhunter"], skill: ["chakram", "e"]},
    caltrops: {name: "Caltrops", category: "Skills", classes: ["demonhunter"], skill: ["caltrops"]},
    smokescreen: {name: "Smoke Screen", category: "Skills", classes: ["demonhunter"], skill: ["smokescreen"]},
    shadowpower: {name: "Shadow Power", category: "Skills", classes: ["demonhunter"], skill: ["shadowpower"]},
    tumble: {name: "Vault - Tumble", category: "Skills", classes: ["demonhunter"], skill: ["vault", "d"]},
    trailofcinders: {name: "Vault - Trail of Cinders", category: "Skills", classes: ["demonhunter"], skill: ["vault", "a"]},
    focusedmind: {name: "Preparation - Focused Mind", category: "Skills", classes: ["demonhunter"], skill: ["preparation", "c"]},
    companion: {name: "Companion - Total pets", category: "Skills", classes: ["demonhunter"], skill: ["companion"], stat: "set_marauder_2pc"},
    companion_raven: {name: "Companion - Raven (Pet)", category: "Skills", classes: ["demonhunter"], skill: ["companion", "x"], stat: "set_marauder_2pc"},
    companion_spider: {name: "Companion - Spider (Pet)", category: "Skills", classes: ["demonhunter"], skill: ["companion", "a"], stat: "set_marauder_2pc"},
    companion_bat: {name: "Companion - Bat (Pet)", category: "Skills", classes: ["demonhunter"], skill: ["companion", "d"], stat: "set_marauder_2pc"},
    companion_boar: {name: "Companion - Boar (Pet)", category: "Skills", classes: ["demonhunter"], skill: ["companion", "b"], stat: "set_marauder_2pc"},
    companion_ferret: {name: "Companion - Ferret (Pet)", category: "Skills", classes: ["demonhunter"], skill: ["companion", "e"], stat: "set_marauder_2pc"},
    companion_wolf: {name: "Companion - Wolf (Pet)", category: "Skills", classes: ["demonhunter"], skill: ["companion", "c"], stat: "set_marauder_2pc"},
    wolfcompanion: {name: "Companion - Wolf Companion (Howl)", category: "Skills", classes: ["demonhunter"], skill: ["companion", "c"], stat: "set_marauder_2pc"},
    markedfordeath: {name: "Marked for Death", category: "Skills", classes: ["demonhunter"], skill: ["markedfordeath"]},
    bladedarmor: {name: "Fan of Knives - Bladed Armor", category: "Skills", classes: ["demonhunter"], skill: ["fanofknives", "e"]},
    spiketrap: {name: "Spike Trap", category: "Skills", classes: ["demonhunter"], skill: ["spiketrap"]},
    sentry: {name: "Sentry", category: "Skills", classes: ["demonhunter"], skill: ["sentry"]},
    chainsoftorment: {name: "Sentry - Chain of Torment", category: "Skills", classes: ["demonhunter"], skill: ["sentry", "a"]},
    vengeance: {name: "Vengeance", category: "Skills", classes: ["demonhunter"], skill: ["vengeance"]},
    strafe: {name: "Strafe (Channeling)", category: "Skills", classes: ["demonhunter"], skill: ["strafe"]},
    icytrail: {name: "Strafe - Icy Trail", category: "Skills", classes: ["demonhunter"], skill: ["strafe", "b"]},
    windchill: {name: "Multishot - Wind Chill", category: "Skills", classes: ["demonhunter"], skill: ["multishot", "b"]},
    rainofvengeance: {name: "Rain of Vengeance", category: "Skills", classes: ["demonhunter"], skill: ["rainofvengeance"]},

    echoingblast: {name: "Spike Trap - Echoing Blast", category: "Skills", classes: ["demonhunter"], skill: ["spiketrap", "b"]},

    tacticaladvantage: {name: "Tactical Advantage", category: "Passives", classes: ["demonhunter"], passive: "tacticaladvantage"},
    steadyaim: {name: "Steady Aim", category: "Passives", classes: ["demonhunter"], passive: "steadyaim"},
    brooding: {name: "Brooding", category: "Passives", classes: ["demonhunter"], passive: "brooding"},
    hotpursuit: {name: "Hot Pursuit", category: "Passives", classes: ["demonhunter"], passive: "hotpursuit"},
    sharpshooter: {name: "Sharpshooter", category: "Passives", classes: ["demonhunter"], passive: "sharpshooter"},

    spiderqueen: {name: "Corpse Spiders - Spider Queen", category: "Skills", classes: ["witchdoctor"], skill: ["corpsespiders", "b"]},
    pyrogeist: {name: "Firebomb - Pyrogeist", category: "Skills", classes: ["witchdoctor"], skill: ["firebomb", "d"]},
    graspofthedead: {name: "Grasp of the Dead", category: "Skills", classes: ["witchdoctor"], skill: ["graspofthedead"]},
    firebats: {name: "Firebats (Channeling)", category: "Skills", classes: ["witchdoctor"], skill: ["firebats"]},
    haunt: {name: "Haunt", category: "Skills", classes: ["witchdoctor"], skill: ["haunt"]},
    locustswarm: {name: "Locust Swarm", category: "Skills", classes: ["witchdoctor"], skill: ["locustswarm"], stat: "leg_wormwood"},
    zombiedogs: {name: "Summon Zombie Dogs", category: "Skills", classes: ["witchdoctor"], skill: ["summonzombiedogs"]},
    chilledtothebone: {name: "Summon Zombie Dogs - Chilled to the Bone", category: "Skills", classes: ["witchdoctor"], skill: ["summonzombiedogs", "d"]},
    horrify: {name: "Horrify", category: "Skills", classes: ["witchdoctor"], skill: ["horrify"]},
    stalker: {name: "Horrify - Stalker", category: "Skills", classes: ["witchdoctor"], skill: ["horrify", "e"]},
    frighteningaspect: {name: "Horrify - Frightening Aspect", category: "Skills", classes: ["witchdoctor"], skill: ["horrify", "a"]},
    spiritwalk: {name: "Spirit Walk", category: "Skills", classes: ["witchdoctor"], skill: ["spiritwalk"]},
    hex: {name: "Hex", category: "Skills", classes: ["witchdoctor"], skill: ["hex"]},
    angrychicken: {name: "Hex - Angry Chicken", category: "Skills", classes: ["witchdoctor"], skill: ["hex", "b"]},
    soulharvest: {name: "Soul Harvest", category: "Skills", classes: ["witchdoctor"], skill: ["soulharvest"]},
//    languish: {name: "Soul Harvest - Languish", category: "Skills", classes: ["witchdoctor"], skill: ["soulharvest", "c"]},
    provokethepack: {name: "Sacrifice - Provoke the Pack", category: "Skills", classes: ["witchdoctor"], skill: ["sacrifice", "a"]},
    massconfusion: {name: "Mass Confusion", category: "Skills", classes: ["witchdoctor"], skill: ["massconfusion"]},
    paranoia: {name: "Mass Confusion - Paranoia", category: "Skills", classes: ["witchdoctor"], skill: ["massconfusion", "a"]},
    phantasm: {name: "Spirit Barrage - Phantasm", category: "Skills", classes: ["witchdoctor"], skill: ["spiritbarrage", "c"]},
    manitou: {name: "Spirit Barrage - Manitou", category: "Skills", classes: ["witchdoctor"], skill: ["spiritbarrage", "e"]},
    acidcloud: {name: "Acid Cloud", category: "Skills", classes: ["witchdoctor"], skill: ["acidcloud"]},
    acidcloud_blob: {name: "Acid Cloud - Lob Blob Bomb", category: "Skills", classes: ["witchdoctor"], skill: ["acidcloud", "c"]},
    piranhas: {name: "Piranhas (Amplification)", category: "Skills", classes: ["witchdoctor"], skill: ["piranhas"]},
    gargantuan: {name: "Gargantuan", category: "Skills", classes: ["witchdoctor"], skill: ["gargantuan"]},
    restlessgiant: {name: "Gargantuan - Restless Giant (Enrage)", category: "Skills", classes: ["witchdoctor"], skill: ["gargantuan", "a"]},
    bigbadvoodoo: {name: "Big Bad Voodoo", category: "Skills", classes: ["witchdoctor"], skill: ["bigbadvoodoo"]},
    fetisharmy: {name: "Fetish Army", category: "Skills", classes: ["witchdoctor"], skill: ["fetisharmy"]},
    fetisharmy_dagger: {name: "Fetish Army - Dagger", category: "Skills", classes: ["witchdoctor"], skill: ["fetisharmy"]},
    fetisharmy_shaman: {name: "Fetish Army - Shaman", category: "Skills", classes: ["witchdoctor"], skill: ["fetisharmy", "c"]},
    fetisharmy_hunter: {name: "Fetish Army - Hunter", category: "Skills", classes: ["witchdoctor"], skill: ["fetisharmy", "e"]},
    toadofhugeness: {name: "Hex - Toad of Hugeness", category: "Skills", classes: ["witchdoctor"], skill: ["hex", "a"]},

    gruesomefeast: {name: "Gruesome Feast", category: "Passives", classes: ["witchdoctor"], passive: "gruesomefeast"},
    fetishsycophants: {name: "Fetish Sycophants", category: "Passives", classes: ["witchdoctor"], passive: "fetishsycophants"},
    visionquest: {name: "Vision Quest", category: "Passives", classes: ["witchdoctor"], passive: "visionquest"},
    confidenceritual: {name: "Confidence Ritual", category: "Passives", classes: ["witchdoctor"], passive: "confidenceritual"},

    fistsofthunder: {name: "Fists of Thunder (Sequence)", category: "Skills", classes: ["monk"], skill: ["fistsofthunder"]},
    staticcharge: {name: "Fists of Thunder - Static Charge", category: "Skills", classes: ["monk"], skill: ["fistsofthunder", "c"]},
    deadlyreach: {name: "Deadly Reach (Sequence)", category: "Skills", classes: ["monk"], skill: ["deadlyreach"]},
    strikefrombeyond: {name: "Deadly Reach - Strike from Beyond", category: "Skills", classes: ["monk"], skill: ["deadlyreach", "d"]},
    foresight: {name: "Deadly Reach - Foresight", category: "Skills", classes: ["monk"], skill: ["deadlyreach", "a"]},
    cripplingwave: {name: "Crippling Wave (Sequence)", category: "Skills", classes: ["monk"], skill: ["cripplingwave"]},
    breakingwave: {name: "Crippling Wave - Breaking Wave", category: "Skills", classes: ["monk"], skill: ["cripplingwave", "e"]},
    wayofthehundredfists: {name: "Way of the Hundred Fists (Sequence)", category: "Skills", classes: ["monk"], skill: ["wayofthehundredfists"]},
    fistsoffury: {name: "Way of the Hundred Fists - Fists of Fury", category: "Skills", classes: ["monk"], skill: ["wayofthehundredfists", "a"]},
    blazingfists: {name: "Way of the Hundred Fists - Blazing Fists", category: "Skills", classes: ["monk"], skill: ["wayofthehundredfists", "c"]},
    assimilation: {name: "Way of the Hundred Fists - Assimilation", category: "Skills", classes: ["monk"], skill: ["wayofthehundredfists", "d"]},
    tempestrush: {name: "Tempest Rush (Channeling)", category: "Skills", classes: ["monk"], skill: ["tempestrush"]},
    flurry: {name: "Tempest Rush - Flurry", category: "Skills", classes: ["monk"], skill: ["tempestrush", "e"]},
    faithinthelight: {name: "Blinding Flash - Faith in the Light", category: "Skills", classes: ["monk"], skill: ["blindingflash", "a"]},
    blazingwrath: {name: "Breath of Heaven - Blazing Wrath", category: "Skills", classes: ["monk"], skill: ["breathofheaven", "c"]},
    infusedwithlight: {name: "Breath of Heaven - Infused with Light", category: "Skills", classes: ["monk"], skill: ["breathofheaven", "d"]},
    zephyr: {name: "Breath of Heaven - Zephyr", category: "Skills", classes: ["monk"], skill: ["breathofheaven", "e"]},
    serenity: {name: "Serenity", category: "Skills", classes: ["monk"], skill: ["serenity"]},
    innersanctuary: {name: "Inner Sanctuary", category: "Skills", classes: ["monk"], skill: ["innersanctuary"]},
    wayofthefallingstar: {name: "Dashing Strike - Way of the Falling Star", category: "Skills", classes: ["monk"], skill: ["dashingstrike", "b"]},
    blindingspeed: {name: "Dashing Strike - Blinding Speed", category: "Skills", classes: ["monk"], skill: ["dashingstrike", "c"]},
    radiance: {name: "Dashing Strike - Radiance", category: "Skills", classes: ["monk"], skill: ["dashingstrike", "e"]},
    explodingpalm: {name: "Exploding Palm", category: "Skills", classes: ["monk"], skill: ["explodingpalm"]},
    sweepingwind: {name: "Sweeping Wind", category: "Skills", classes: ["monk"], skill: ["sweepingwind"]},
    innerstorm: {name: "Sweeping Wind - Inner Storm", category: "Skills", classes: ["monk"], skill: ["sweepingwind", "d"]},
    sevensidedstrike: {name: "Seven-Sided Strike", category: "Skills", classes: ["monk"], skill: ["sevensidedstrike"]},
    mystically: {name: "Mystic Ally (Total)", category: "Skills", classes: ["monk"], skill: ["mystically"]},
    basically: {name: "Mystic Ally - No Rune", category: "Skills", classes: ["monk"], skill: ["mystically", "x"]},
    waterally: {name: "Mystic Ally - Water Ally", category: "Skills", classes: ["monk"], skill: ["mystically", "b"], stat: "set_inna_6pc"},
    fireally: {name: "Mystic Ally - Fire Ally", category: "Skills", classes: ["monk"], skill: ["mystically", "a"], stat: "set_inna_6pc"},
    airally: {name: "Mystic Ally - Air Ally", category: "Skills", classes: ["monk"], skill: ["mystically", "d"], stat: "set_inna_6pc"},
    enduringally: {name: "Mystic Ally - Enduring Ally", category: "Skills", classes: ["monk"], skill: ["mystically", "e"], stat: "set_inna_6pc"},
    earthally: {name: "Mystic Ally - Earth Ally", category: "Skills", classes: ["monk"], skill: ["mystically", "c"], stat: "set_inna_6pc"},
    basically_active: {name: "Mystic Ally - No Rune (Active)", category: "Skills", classes: ["monk"], skill: ["mystically", "x"], stat: "set_inna_6pc"},
    waterally_active: {name: "Mystic Ally - Water Ally (Active)", category: "Skills", classes: ["monk"], skill: ["mystically", "b"], stat: "set_inna_6pc"},
    fireally_active: {name: "Mystic Ally - Fire Ally (Active)", category: "Skills", classes: ["monk"], skill: ["mystically", "a"], stat: "set_inna_6pc"},
    earthally_active: {name: "Mystic Ally - Earth Ally (Active)", category: "Skills", classes: ["monk"], skill: ["mystically", "c"], stat: "set_inna_6pc"},
    epiphany: {name: "Epiphany", category: "Skills", classes: ["monk"], skill: ["epiphany"]},
    mantraofsalvation: {name: "Mantra of Salvation", category: "Skills", classes: ["monk"], skill: ["mantraofsalvation"], stat: "set_inna_4pc"},
    mantraofsalvation_active: {name: "Mantra of Salvation (Active)", category: "Skills", classes: ["monk"], skill: ["mantraofsalvation"]},
    mantraofretribution: {name: "Mantra of Retribution", category: "Skills", classes: ["monk"], skill: ["mantraofretribution"], stat: "set_inna_4pc"},
    mantraofretribution_active: {name: "Mantra of Retribution (Active)", category: "Skills", classes: ["monk"], skill: ["mantraofretribution"]},
    mantraofhealing: {name: "Mantra of Healing", category: "Skills", classes: ["monk"], skill: ["mantraofhealing"], stat: "set_inna_4pc"},
    mantraofhealing_active: {name: "Mantra of Healing (Active)", category: "Skills", classes: ["monk"], skill: ["mantraofhealing"]},
    mantraofconviction: {name: "Mantra of Conviction", category: "Skills", classes: ["monk"], skill: ["mantraofconviction"], stat: "set_inna_4pc"},
    mantraofconviction_active: {name: "Mantra of Conviction (Active)", category: "Skills", classes: ["monk"], skill: ["mantraofconviction"]},

    seizetheinitiative: {name: "Seize the Initiative", category: "Passives", classes: ["monk"], passive: "seizetheinitiative"},
    determination: {name: "Determination", category: "Passives", classes: ["monk"], passive: "determination"},
    combinationstrike: {name: "Combination Strike", category: "Passives", classes: ["monk"], passive: "combinationstrike"},
    cs_fistsofthunder: {name: "Combination Strike - Fists of Thunder", category: "Passives", classes: ["monk"], passive: "combinationstrike", skill: ["fistsofthunder"]},
    cs_deadlyreach: {name: "Combination Strike - Deadly Reach", category: "Passives", classes: ["monk"], passive: "combinationstrike", skill: ["deadlyreach"]},
    cs_cripplingwave: {name: "Combination Strike - Crippling Wave", category: "Passives", classes: ["monk"], passive: "combinationstrike", skill: ["cripplingwave"]},
    cs_wayofthehundredfists: {name: "Combination Strike - Way of the Hundred Fists", category: "Passives", classes: ["monk"], passive: "combinationstrike", skill: ["wayofthehundredfists"]},
    mythicrhythm: {name: "Mythic Rhythm", category: "Passives", classes: ["monk"], passive: "mythicrhythm"},
    unity: {name: "Unity", category: "Passives", classes: ["monk"], passive: "unity"},

    hardenedsenses: {name: "Punish - Hardened Senses", category: "Skills", classes: ["crusader"], skill: ["punish"]},
    zeal: {name: "Slash - Zeal", category: "Skills", classes: ["crusader"], skill: ["slash", "a"]},
    guard: {name: "Slash - Guard", category: "Skills", classes: ["crusader"], skill: ["slash", "e"]},
    reaping: {name: "Smite - Reaping", category: "Skills", classes: ["crusader"], skill: ["smite", "d"]},
    swordofjustice: {name: "Justice - Sword of Justice", category: "Skills", classes: ["crusader"], skill: ["justice", "a"]},
    inspiringsweep: {name: "Sweep Attack - Inspiring Sweep", category: "Skills", classes: ["crusader"], skill: ["sweepattack", "e"]},
    burningwrath: {name: "Blessed Hammer - Burning Wrath", category: "Skills", classes: ["crusader"], skill: ["blessedhammer", "a"]},
    divineaegis: {name: "Blessed Shield - Divine Aegis", category: "Skills", classes: ["crusader"], skill: ["blessedshield", "c"]},
    heavenstempest: {name: "Fist of the Heavens - Heaven's Tempest", category: "Skills", classes: ["crusader"], skill: ["fistoftheheavens", "a"]},
    fissure: {name: "Fist of the Heavens - Fissure", category: "Skills", classes: ["crusader"], skill: ["fistoftheheavens", "c"]},
    divineverdict: {name: "Shield Glare - Divine Verdict", category: "Skills", classes: ["crusader"], skill: ["shieldglare", "a"]},
    ironskin: {name: "Iron Skin", category: "Skills", classes: ["crusader"], skill: ["ironskin"]},
    consecration: {name: "Consecration", category: "Skills", classes: ["crusader"], skill: ["consecration"]},
    penitence: {name: "Judgment - Penitence", category: "Skills", classes: ["crusader"], skill: ["judgment", "a"]},
    resolved: {name: "Judgment - Resolved", category: "Skills", classes: ["crusader"], skill: ["judgment", "d"]},
    provoke: {name: "Provoke", category: "Skills", classes: ["crusader"], skill: ["provoke"]},
    cleanse: {name: "Provoke - Cleanse", category: "Skills", classes: ["crusader"], skill: ["provoke", "a"]},
//    chargedup: {name: "Provoke - Charged Up", category: "Skills", classes: ["crusader"], skill: ["provoke", "d"]},
//    hitme: {name: "Provoke - Hit Me", category: "Skills", classes: ["crusader"], skill: ["provoke", "e"]},
    steedcharge: {name: "Steed Charge", category: "Skills", classes: ["crusader"], skill: ["steedcharge"]},
    phalanx: {name: "Phalanx (Summons)", category: "Skills", classes: ["crusader"], skill: ["phalanx", "ae"]},
    lawsofvalor: {name: "Laws of Valor (Active)", category: "Skills", classes: ["crusader"], skill: ["lawsofvalor"]},
    lawsofjustice: {name: "Laws of Justice (Active)", category: "Skills", classes: ["crusader"], skill: ["lawsofjustice"]},
    lawsofhope: {name: "Laws of Hope (Active)", category: "Skills", classes: ["crusader"], skill: ["lawsofhope"]},
    akaratschampion: {name: "Akarat's Champion", category: "Skills", classes: ["crusader"], skill: ["akaratschampion"]},
    blessedground: {name: "Heaven's Fury - Blessed Ground", category: "Skills", classes: ["crusader"], skill: ["heavensfury", "b"]},

    onslaught: {name: "Bash - Onslaught", category: "Skills", classes: ["barbarian"], skill: ["bash", "a"]},
    punish: {name: "Bash - Punish", category: "Skills", classes: ["barbarian"], skill: ["bash", "b"]},
    gatheringstorm: {name: "Cleave - Gathering Storm", category: "Skills", classes: ["barbarian"], skill: ["cleave", "b"]},
    frenzy: {name: "Frenzy", category: "Skills", classes: ["barbarian"], skill: ["frenzy"]},
    rend: {name: "Rend", category: "Skills", classes: ["barbarian"], skill: ["rend"]},
    whirlwind: {name: "Whirlwind (Channeling)", category: "Skills", classes: ["barbarian"], skill: ["whirlwind"]},
    ironimpact: {name: "Leap - Iron Impact", category: "Skills", classes: ["barbarian"], skill: ["leap", "d"]},
    sprint: {name: "Sprint", category: "Skills", classes: ["barbarian"], skill: ["sprint"]},
    ignorepain: {name: "Ignore Pain", category: "Skills", classes: ["barbarian"], skill: ["ignorepain"]},
    killingspree: {name: "Overpower - Killing Spree", category: "Skills", classes: ["barbarian"], skill: ["overpower", "a"]},
    crushingadvance: {name: "Overpower - Crushing Advance", category: "Skills", classes: ["barbarian"], skill: ["overpower", "e"]},
    bestservedcold: {name: "Revenge - Best Served Cold", category: "Skills", classes: ["barbarian"], skill: ["revenge", "e"]},
    threateningshout: {name: "Threatening Shout", category: "Skills", classes: ["barbarian"], skill: ["threateningshout"]},
    falter: {name: "Threatening Shout - Falter", category: "Skills", classes: ["barbarian"], skill: ["threateningshout", "d"]},
    demoralize: {name: "Threatening Shout - Demoralize", category: "Skills", classes: ["barbarian"], skill: ["threateningshout", "a"]},
    battlerage: {name: "Battle Rage", category: "Skills", classes: ["barbarian"], skill: ["battlerage"]},
    intothefray: {name: "Battle Rage - Into the Fray", category: "Skills", classes: ["barbarian"], skill: ["battlerage", "d"]},
    warcry: {name: "War Cry", category: "Skills", classes: ["barbarian"], skill: ["warcry"]},
    hardenedwrath: {name: "War Cry - Hardened Wrath", category: "Skills", classes: ["barbarian"], skill: ["warcry", "a"]},
    calloftheancients: {name: "Call of the Ancients", category: "Skills", classes: ["barbarian"], skill: ["calloftheancients"]},
    dutytotheclan: {name: "Call of the Ancients - Duty to the Clan", category: "Skills", classes: ["barbarian"], skill: ["calloftheancients", "d"]},
    wrathoftheberserker: {name: "Wrath of the Berserker", category: "Skills", classes: ["barbarian"], skill: ["wrathoftheberserker"]},

    poundofflesh: {name: "Pound of Flesh", category: "Passives", classes: ["barbarian"], passive: "poundofflesh"},
    inspiringpresence: {name: "Inspiring Presence", category: "Passives", classes: ["barbarian"], passive: "inspiringpresence"},
    berserkerrage: {name: "Berserker Rage", category: "Passives", classes: ["barbarian"], passive: "berserkerrage"},
    brawler: {name: "Brawler", category: "Passives", classes: ["barbarian"], passive: "brawler"},

    powerful: {name: "Bane of the Powerful", category: "Gems", gem: ["powerful"]},
    toxin: {name: "Gem of Efficacious Toxin", category: "Gems", gem: ["toxin"]},
    gogok: {name: "Gogok of Swiftness", category: "Gems", gem: ["gogok"]},
    pain: {name: "Pain Enhancer", category: "Gems", gem: ["pain"]},
    taeguk: {name: "Taeguk", category: "Gems", gem: ["taeguk"]},
    wreath: {name: "Wreath of Lightning", category: "Gems", gem: ["wreath"]},
    stricken: {name: "Bane of the Stricken", category: "Gems", gem: ["stricken"]},

    focus: {name: "Bastions of Will - Focus (Signatures)", category: "Item Sets", set: ["bastionsofwill", 2]},
    restraint: {name: "Bastions of Will - Restraint (Spenders)", category: "Item Sets", set: ["bastionsofwill", 2]},
    istvan: {name: "Istvan's Paired Blades", category: "Item Sets", set: ["istvan", 2]},
    tal_2pc_fire: {name: "Tal Rasha's Elements (2) - Fire Cooldown", category: "Item Sets", set: ["talrasha", 2]},
    tal_2pc_cold: {name: "Tal Rasha's Elements (2) - Cold Cooldown", category: "Item Sets", set: ["talrasha", 2]},
    tal_2pc_lightning: {name: "Tal Rasha's Elements (2) - Lightning Cooldown", category: "Item Sets", set: ["talrasha", 2]},
    tal_2pc_arcane: {name: "Tal Rasha's Elements (2) - Arcane Cooldown", category: "Item Sets", set: ["talrasha", 2]},
    tal_4pc: {name: "Tal Rasha's Elements (4)", category: "Item Sets", set: ["talrasha", 4]},
    tal_4pc_fire: {name: "Tal Rasha's Elements (4) - Fire", category: "Item Sets", set: ["talrasha", 4]},
    tal_4pc_cold: {name: "Tal Rasha's Elements (4) - Cold", category: "Item Sets", set: ["talrasha", 4]},
    tal_4pc_lightning: {name: "Tal Rasha's Elements (4) - Lightning", category: "Item Sets", set: ["talrasha", 4]},
    tal_4pc_arcane: {name: "Tal Rasha's Elements (4) - Arcane", category: "Item Sets", set: ["talrasha", 4]},
    tal_6pc: {name: "Tal Rasha's Elements (6)", category: "Item Sets", set: ["talrasha", 6]},
    tal_6pc_fire: {name: "Tal Rasha's Elements (6) - Fire", category: "Item Sets", set: ["talrasha", 6]},
    tal_6pc_cold: {name: "Tal Rasha's Elements (6) - Cold", category: "Item Sets", set: ["talrasha", 6]},
    tal_6pc_lightning: {name: "Tal Rasha's Elements (6) - Lightning", category: "Item Sets", set: ["talrasha", 6]},
    tal_6pc_arcane: {name: "Tal Rasha's Elements (6) - Arcane", category: "Item Sets", set: ["talrasha", 6]},
    tal_6pc_fire2: {name: "Tal Rasha's Elements (6) - Fire (Extend)", category: "Item Sets", set: ["talrasha", 6]},
    tal_6pc_cold2: {name: "Tal Rasha's Elements (6) - Cold (Extend)", category: "Item Sets", set: ["talrasha", 6]},
    tal_6pc_lightning2: {name: "Tal Rasha's Elements (6) - Lightning (Extend)", category: "Item Sets", set: ["talrasha", 6]},
    tal_6pc_arcane2: {name: "Tal Rasha's Elements (6) - Arcane (Extend)", category: "Item Sets", set: ["talrasha", 6]},
    firebird_4pc: {name: "Firebird's Finery (4)", category: "Item Sets", set: ["firebird", 4]},
    firebird_6pc: {name: "Firebird's Finery (6)", category: "Item Sets", set: ["firebird", 6]},
    natalya_6pc: {name: "Natalya's Vengeance (6)", category: "Item Sets", set: ["natalya", 6]},
    unhallowed_4pc: {name: "Unhallowed Essence (4)", category: "Item Sets", set: ["unhallowed", 4]},
    zunimassa_6pc: {name: "Zunimassa's Haunt (6)", category: "Item Sets", set: ["zunimassa", 6]},
    sunwuko_2pc: {name: "Monkey King's Garb (2)", category: "Item Sets", set: ["sunwuko", 2]},
    sunwuko_4pc: {name: "Monkey King's Garb (4)", category: "Item Sets", set: ["sunwuko", 4]},
    storms_6pc: {name: "Raiment of a Thousand Storms (6)", category: "Item Sets", set: ["storms", 6]},
    chantodo_2pc: {name: "Chantodo's Resolve - Stacks", category: "Item Sets", set: ["chantodo", 2]},
    shenlong_2pc: {name: "Shenlong's Spirit", category: "Item Sets", set: ["shenlong", 2]},
    helltooth_2pc: {name: "Helltooth Harness - Necrosis", category: "Item Sets", set: ["helltooth", 2]},
    helltooth_6pc: {name: "Helltooth Harness (6)", category: "Item Sets", set: ["helltooth", 6]},
    roland_6pc: {name: "Roland's Legacy (6)", category: "Item Sets", set: ["roland", 6]},
    light_4pc: {name: "Seeker of the Light (4)", category: "Item Sets", set: ["light", 4]},
    immortalking_6pc: {name: "Immortal King's Call (6)", category: "Item Sets", set: ["immortalking", 6]},
    raekor_6pc: {name: "The Legacy of Raekor (6)", category: "Item Sets", set: ["raekor", 6]},
    invoker_2pc: {name: "Thorns of the Invoker (2)", category: "Item Sets", set: ["invoker", 2]},
    invoker_4pc: {name: "Thorns of the Invoker (4)", category: "Item Sets", set: ["invoker", 4]},
    norvald: {name: "Norvald's Fervor", category: "Item Sets", set: ["norvald", 4]},
    arachyr_4pc: {name: "Spirit of Arachyr (4)", category: "Item Sets", set: ["arachyr", 4]},

    triumvirate: {name: "Triumvirate", category: "Items", stat: ["leg_triumvirate", "leg_triumvirate_p2"]},
    coe_arc: {name: "Convention of Elements - Arcane", category: "Items", classes: ["wizard"], stat: "leg_conventionofelements"},
    coe_col: {name: "Convention of Elements - Cold", category: "Items", classes: ["wizard", "demonhunter", "witchdoctor", "monk", "barbarian"], stat: "leg_conventionofelements"},
    coe_fir: {name: "Convention of Elements - Fire", category: "Items", stat: "leg_conventionofelements"},
    coe_hol: {name: "Convention of Elements - Holy", category: "Items", classes: ["monk", "crusader"], stat: "leg_conventionofelements"},
    coe_lit: {name: "Convention of Elements - Lightning", category: "Items", classes: ["wizard", "demonhunter", "monk", "barbarian", "crusader"], stat: "leg_conventionofelements"},
    coe_phy: {name: "Convention of Elements - Physical", category: "Items", classes: ["demonhunter", "witchdoctor", "monk", "barbarian", "crusader"], stat: "leg_conventionofelements"},
    coe_psn: {name: "Convention of Elements - Poison", category: "Items", classes: ["witchdoctor"], stat: "leg_conventionofelements"},
    overwhelmingdesire: {name: "Overwhelming Desire", category: "Items", stat: "leg_overwhelmingdesire"},
    bandofhollowwhispers: {name: "Band of Hollow Whispers", category: "Items", stat: "leg_bandofhollowwhispers"},
    hellfirering: {name: "Hellfire Ring", category: "Items", stat: "leg_hellfirering"},
    moonlightward: {name: "Moonlight Ward", category: "Items", stat: "leg_moonlightward"},
    schaefershammer: {name: "Schaefer's Hammer", category: "Items", stat: "leg_schaefershammer_p2"},
    fulminator: {name: "Fulminator", category: "Items", stat: "leg_fulminator"},
    calamity: {name: "Calamity", category: "Items", stat: "leg_calamity"},
    pusspitter: {name: "Pus Spitter", category: "Items", stat: "leg_pusspitter"},
    strongarmbracers: {name: "Strongarm Bracers", category: "Items", stat: "leg_strongarmbracers"},
    rechelsringoflarceny: {name: "Rechel's Ring of Larceny", category: "Items", stat: "leg_rechelsringoflarceny"},
    thegidbinn: {name: "The Gidbinn", category: "Items", stat: "leg_thegidbinn"},
    kekegisunbreakablespirit: {name: "Kekegi's Unbreakable Spirit", category: "Items", stat: "leg_kekegisunbreakablespirit"},
    flyingdragon: {name: "Flying Dragon", category: "Items", stat: "leg_flyingdragon"},
    spiritguards: {name: "Spirit Guards", category: "Items", stat: "leg_spiritguards"},
    bindingofthelost: {name: "Binding of the Lost", category: "Items", stat: "leg_bindingofthelost"},
    wrapsofclarity: {name: "Wraps of Clarity", category: "Items", stat: "leg_wrapsofclarity"},
    theswami: {name: "The Swami", category: "Items", stat: ["leg_theswami", "leg_theswami_p3"]},
    denial: {name: "Denial", category: "Items", stat: "leg_denial"},
    brokenpromises: {name: "Broken Promises", category: "Items", stat: "leg_brokenpromises"},
    chilanikschain: {name: "Chilanik's Chain", category: "Items", stat: "leg_chilanikschain"},
    chainofshadows: {name: "Chain of Shadows", category: "Items", stat: "leg_chainofshadows"},
    cesarsmemento: {name: "Cesar’s Memento", category: "Items", stat: "leg_cesarsmemento"},
    bindingsofthelessergods: {name: "Bindings of the Lesser Gods", category: "Items", stat: "leg_bindingsofthelessergods"},
    aquilacuirass: {name: "Aquila Cuirass", category: "Items", stat: "leg_aquilacuirass"},
    hammerjammers: {name: "Hammer Jammers", category: "Items", stat: "leg_hammerjammers"},
    elusivering: {name: "Elusive Ring", category: "Items", stat: "leg_elusivering"},
    bandofmight: {name: "Band of Might", category: "Items", stat: "leg_bandofmight"},
    lefebvressoliloquy: {name: "Lefebvre’s Soliloquy", category: "Items", stat: "leg_lefebvressoliloquy"},
    akkhansleniency: {name: "Akkhan’s Leniency", category: "Items", stat: "leg_akkhansleniency"},
    lordgreenstonesfan: {name: "Lord Greenstone's Fan", category: "Items", stat: "leg_lordgreenstonesfan"},
    orbofinfinitedepth: {name: "Orb of Infinite Depth", category: "Items", stat: "leg_orbofinfinitedepth"},
    remorseless: {name: "Remorseless", category: "Items", stat: "leg_remorseless"},
  },
  nyi: {
    "Unique_Ring_006_p2": true,
    "Unique_Boots_102_x1": true,
    "Unique_Pants_102_x1": true,
    "Unique_Amulet_104_x1": true,
    "Unique_Mace_2H_006_x1": true,
    "Unique_Dagger_006_x1": true,
    "Unique_Mace_2H_010_x1": true,
    "Unique_Polearm_101_x1": true,
    "Unique_Amulet_101_x1": true,
    "Unique_Sword_2H_104_x1": true,
    "Unique_Sword_2H_010_x1": true,
    "Unique_Axe_1H_003_x1": true,
    "Unique_Sword_1H_004_x1": true,
    "Unique_VoodooMask_002_x1": true,
    "Unique_Fist_101_x1": true,
    "Unique_Helm_004_x1": true,
    "Unique_Mighty_1H_006_x1": true,
  },
};
