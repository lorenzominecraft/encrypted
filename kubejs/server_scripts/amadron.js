// priority: 100

onEvent('recipes', e => {

//Blocks

function amadronTrades(bucks_amount, result, result_amount, tradeLevel, staticTF) 

e.custom({type: "pneumaticcraft:amadron", id: "skyopolis:amadron",
    input: {type: "ITEM", id: "kubejs:crypto_currency", amount: bucks_amount}, 
    output: {type: "ITEM", id: result, amount: result_amount},
    static: staticTF,
    level: tradeLevel})

//Level 1
amadronTrades(125, 'nameless_trinkets:experience_battery', 1, 1, true)
amadronTrades(125, 'nameless_trinkets:broken_ankh', 1, 1, true)
amadronTrades(150, 'angelring:itemring', 1, 1, true)
amadronTrades(125, 'nameless_trinkets:speed_force', 1, 1, true)
amadronTrades(125, 'nameless_trinkets:reverse_card', 1, 1, true)
amadronTrades(125, 'nameless_trinkets:moon_stone', 1, 1, true)
amadronTrades(200, 'nameless_trinkets:reforger', 1, 1, true)
amadronTrades(150, 'nameless_trinkets:fertilizer', 1, 1, true)
amadronTrades(125, 'nameless_trinkets:blaze_nucleus', 1, 1, true)
amadronTrades(125, 'nameless_trinkets:blindfold', 1, 1, true)
amadronTrades(64, 'minecraft:wither_skeleton_spawn_egg', 1, 1, true)

amadronTrades(6, 'storagedrawers:drawer_key', 1, 1, true)
amadronTrades(6, 'storagedrawers:quantify_key', 1, 1, true)
amadronTrades(8, 'storagedrawers:shroud_key', 1, 1, true)

//Level 2

amadronTrades(6, 'minecraft:heart_of_the_sea', 1, 2, false)
amadronTrades(48, 'minecraft:wither_skeleton_skull', 1, 2, false)


//Level 3

amadronTrades(16, 'sophisticatedbackpacks:backpack', 1, 3, true)

amadronTrades(32, 'enderstorage:ender_chest', 2, 3, true)
amadronTrades(32, 'enderstorage:ender_tank', 2, 3, false)
amadronTrades(32, 'enderstorage:ender_pouch', 2, 3, false)

amadronTrades(8, 'minecraft:honeycomb', 8, 3, false)
amadronTrades(8, 'minecraft:honey_bottle', 8, 3, false)



//Level 4

amadronTrades(8, 'pneumaticcraft:omnidirectional_hopper', 1, 4, false)
//amadronTrades(8, 'mob_grinding_utils:null_sword', 1, 4, false)

amadronTrades(8, 'pneumaticcraft:pcb_blueprint', 1, 4, true)
amadronTrades(8, 'pneumaticcraft:assembly_program_laser', 1, 4, true)
amadronTrades(8, 'pneumaticcraft:assembly_program_drill_laser', 1, 4, true)
amadronTrades(8, 'pneumaticcraft:assembly_program_drill', 1, 4, true)


//Level 5

//amadronTrades(32, 'voidtotem:totem_of_void_undying', 1, 5, true)
//amadronTrades(8, 'minecraft:ender_pearl', 1, 5, false)
//amadronTrades(8, 'minecraft:ghast_tear', 1, 5, false)
//amadronTrades(12, 'mob_grinding_utils:absorption_hopper', 1, 5, false)

//Enchanted Books

function amadronNBTTrades(bucks_amount, NBT, tradeLevel, staticTF) 

e.custom({type: "pneumaticcraft:amadron", id: "skyopolis:amadron",
    input: {type: "ITEM", id: "kubejs:crypto_currency", amount: bucks_amount},
    output: {type: "ITEM", id: "minecraft:enchanted_book", amount: 1,
        nbt: NBT,
    static: staticTF,
    level: tradeLevel}})

//Enchanted Books

amadronNBTTrades(32, "{StoredEnchantments:[{lvl:1s,id:\"minecraft:silk_touch\"}]}", false, 5)

amadronNBTTrades(16, "{StoredEnchantments:[{lvl:1s,id:\"minecraft:fortune\"}]}", false, 4)
amadronNBTTrades(24, "{StoredEnchantments:[{lvl:3s,id:\"minecraft:fortune\"}]}", false, 5)

amadronNBTTrades(16, "{StoredEnchantments:[{lvl:1s,id:\"minecraft:efficiency\"}]}", false, 4)
amadronNBTTrades(24, "{StoredEnchantments:[{lvl:3s,id:\"minecraft:efficiency\"}]}", false, 5)

amadronNBTTrades(16, "{StoredEnchantments:[{lvl:1s,id:\"minecraft:looting\"}]}", false, 4)
amadronNBTTrades(24, "{StoredEnchantments:[{lvl:3s,id:\"minecraft:looting\"}]}", false, 5)





    
//Remove Old Amadron Recipes

e.remove({id: 'pneumaticcraft:plastic_sheet_from_brick'})
e.remove({id: 'pneumaticcraft:amadron/assembly_program_drill'})
e.remove({id: 'pneumaticcraft:amadron/assembly_program_drill_laser'})
e.remove({id: 'pneumaticcraft:amadron/oil_to_emerald'})
e.remove({id: 'pneumaticcraft:amadron/gasoline_to_emerald'})
e.remove({id: 'pneumaticcraft:amadron/lpg_to_emerald'})
e.remove({id: 'pneumaticcraft:amadron/kerosene_to_emerald'})
e.remove({id: 'pneumaticcraft:amadron/diesel_to_emerald'})
e.remove({id: 'pneumaticcraft:amadron/lubricant_to_emerald'})
e.remove({id: 'pneumaticcraft:amadron/emerald_to_oil'})
e.remove({id: 'pneumaticcraft:amadron/emerald_to_lubricant'})
e.remove({id: 'pneumaticcraft:amadron/assembly_program_laser'})
e.remove({id: 'pneumaticcraft:amadron/pcb_blueprint'})
e.remove({id: 'pneumaticcraft:amadron_tablet'})
})
