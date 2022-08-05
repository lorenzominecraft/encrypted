// priority: 80

onEvent('recipes', e => {


// The Ultimate Ingot
e.custom({
  "type": "extendedcrafting:shapeless_table",
  "ingredients": [
    {
      "item": "chemlib:ingot_lithium"
    },
    {
      "item": "chemlib:ingot_beryllium"
    },
    {
      "item": "chemlib:ingot_boron"
    },
    {
      "item": "chemlib:ingot_sodium"
    },
    {
      "item": "chemlib:ingot_magnesium"
    },
    {
      "item": "alltheores:aluminum_ingot"
    },
    {
      "item": "chemlib:ingot_silicon"
    },
    {
      "item": "chemlib:ingot_potassium"
    },
    {
      "item": "chemlib:ingot_calcium"
    },
    {
      "item": "chemlib:ingot_scandium"
    },
    {
      "item": "chemlib:ingot_titanium"
    },
    {
      "item": "chemlib:ingot_vanadium"
    },
    {
      "item": "chemlib:ingot_chromium"
    },
    {
      "item": "chemlib:ingot_manganese"
    },
    {
      "item": "minecraft:iron_ingot"
    },
    {
      "item": "tconstruct:cobalt_ingot"
    },
    {
      "item": "alltheores:nickel_ingot"
    },
    {
      "item": "minecraft:copper_ingot"
    },
    {
      "item": "alltheores:zinc_ingot"
    },
    {
      "item": "chemlib:ingot_gallium"
    },
    {
      "item": "chemlib:ingot_germanium"
    },
    {
      "item": "chemlib:ingot_arsenic"
    },
    {
      "item": "chemlib:ingot_selenium"
    },
    {
      "item": "chemlib:ingot_rubidium"
    },
    {
      "item": "chemlib:ingot_strontium"
    },
    {
      "item": "chemlib:ingot_yttrium"
    },
    {
      "item": "chemlib:ingot_zirconium"
    },
    {
      "item": "chemlib:ingot_niobium"
    },
    {
      "item": "chemlib:ingot_molybdenum"
    },
    {
      "item": "chemlib:ingot_technetium"
    },
    {
      "item": "chemlib:ingot_ruthenium"
    },
    {
      "item": "chemlib:ingot_rhodium"
    },
    {
      "item": "chemlib:ingot_palladium"
    },
    {
      "item": "alltheores:silver_ingot"
    },
    {
      "item": "chemlib:ingot_cadmium"
    },
    {
      "item": "chemlib:ingot_indium"
    },
    {
      "item": "alltheores:tin_ingot"
    },
    {
      "item": "chemlib:ingot_antimony"
    },
    {
      "item": "chemlib:ingot_tellurium"
    },
    {
      "item": "chemlib:ingot_cesium"
    },
    {
      "item": "chemlib:ingot_barium"
    },
    {
      "item": "chemlib:ingot_lanthanum"
    },
    {
      "item": "chemlib:ingot_cerium"
    },
    {
      "item": "chemlib:ingot_praseodymium"
    },
    {
      "item": "chemlib:ingot_neodymium"
    },
    {
      "item": "chemlib:ingot_promethium"
    },
    {
      "item": "chemlib:ingot_samarium"
    },
    {
      "item": "chemlib:ingot_europium"
    },
    {
      "item": "chemlib:ingot_gadolinium"
    },
    {
      "item": "chemlib:ingot_terbium"
    },
    {
      "item": "chemlib:ingot_dysprosium"
    },
    {
      "item": "chemlib:ingot_holmium"
    },
    {
      "item": "chemlib:ingot_erbium"
    },
    {
      "item": "chemlib:ingot_thulium"
    },
    {
      "item": "chemlib:ingot_ytterbium"
    },
    {
      "item": "chemlib:ingot_lutetium"
    },
    {
      "item": "chemlib:ingot_hafnium"
    },
    {
      "item": "chemlib:ingot_tantalum"
    },
    {
      "item": "chemlib:ingot_tungsten"
    },
    {
      "item": "chemlib:ingot_rhenium"
    },
    {
      "item": "alltheores:osmium_ingot"
    },
    {
      "item": "alltheores:iridium_ingot"
    },
    {
      "item": "alltheores:platinum_ingot"
    },
    {
      "item": "minecraft:gold_ingot"
    },
    {
      "item": "chemlib:ingot_thallium"
    },
    {
      "item": "alltheores:lead_ingot"
    },
    {
      "item": "chemlib:ingot_bismuth"
    },
    {
      "item": "chemlib:ingot_polonium"
    },
    {
      "item": "chemlib:ingot_astatine"
    },
    {
      "item": "chemlib:ingot_francium"
    },
    {
      "item": "chemlib:ingot_radium"
    },
    {
      "item": "chemlib:ingot_actinium"
    },
    {
      "item": "chemlib:ingot_thorium"
    },
    {
      "item": "chemlib:ingot_protactinium"
    },
    {
      "item": "alltheores:uranium_ingot"
    },
    {
      "item": "minecraft:netherite_ingot"
    }
  ],
  "result": {
    "item": "extendedcrafting:the_ultimate_ingot"
  }
})

// Creative Items

e.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAAAAAA",
    "AABBBBBAA",
    "ABBBBBBBA",
    "ABBCBCBBA",
    "ABBBDBBBA",
    "ABBCBCBBA",
    "ABBBBBBBA",
    "AABBBBBAA",
    "AAAAAAAAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:netherite_ingot"
    },
    "B": {
      "item": "tconstruct:manyullyn_ingot"
    },
    "C": {
      "item": "extendedcrafting:the_ultimate_ingot"
    },
    "D": {
      "item": "extendedcrafting:ultimate_singularity"
    }
  },
  "result": {
    "item": "pipez:infinity_upgrade"
  }
})

e.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 6900000,
  "input": {
    "item": "kubejs:creative_essence"
  },
  "ingredients": [
    {
      "item": "extendedcrafting:the_ultimate_ingot"
    },
    {
      "item": "extendedcrafting:the_ultimate_ingot"
    },
    {
      "item": "extendedcrafting:ultimate_singularity"
    },
    {
      "item": "extendedcrafting:ultimate_singularity"
    },
    {
      "item": "extendedcrafting:the_ultimate_ingot"
    },
    {
      "item": "extendedcrafting:ultimate_singularity"
    },
    {
      "item": "extendedcrafting:the_ultimate_ingot"
    },
    {
      "item": "extendedcrafting:ultimate_singularity"
    }
  ],
  "result": {
    "item": "pneumaticcraft:creative_upgrade"
  }
})

e.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAAAAAA",
    "ABCCDCCEA",
    "ACAAAAACA",
    "ACAFGFACA",
    "AHAGIGAHA",
    "ACAFGFACA",
    "ACAAAAACA",
    "AJCCDCCKA",
    "AAAAAAAAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:netherite_ingot"
    },
    "B": {
      "item": "mekanism:creative_energy_cube"
    },
    "C": {
      "item": "extendedcrafting:the_ultimate_ingot"
    },
    "D": {
      "item": "pipez:infinity_upgrade"
    },
    "E": {
      "item": "create:creative_fluid_tank"
    },
    "F": {
      "item": "extendedcrafting:ultimate_singularity"
    },
    "G": {
      "item": "kubejs:creative_essence"
    },
    "H": {
      "item": "pneumaticcraft:creative_upgrade"
    },
    "I": {
      "item": "kubejs:encrypted_ingot"
    },
    "J": {
      "item": "create:creative_motor"
    },
    "K": {
      "item": "createaddition:creative_energy"
    }
  },
  "result": {
    "item": "kubejs:finished_program"
  }
})

})