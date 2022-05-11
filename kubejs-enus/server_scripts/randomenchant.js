function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

onEvent('item.right_click', event => {
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:random_enchant') {
        
        if(event.player.getHeldItem(OFF_HAND)!=null)
        {
            event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"You can't use this item when you hold item in your offhand.","color":"red"}`)
        }
        else
        {
            lootno = randomNum(0, random1_loot.length - 1)
            event.player.give(random1_loot[lootno])
            event.player.mainHandItem.count -= 1
        }
        

    }
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:random_enchant2') {

        if(event.player.getHeldItem(OFF_HAND)!=null)
        {
            event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"You can't use this item when you hold item in your offhand.","color":"red"}`)
        }
        else
        {
            lootno = randomNum(0, random2_loot.length - 1)
            event.player.give(random2_loot[lootno])
            event.player.mainHandItem.count -= 1
        }
        
    }
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:random_enchant3') {
        if(event.player.getHeldItem(OFF_HAND)!=null)
        {
            event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"You can't use this item when you hold item in your offhand.","color":"red"}`)
        }
        else
        {
            lootno = randomNum(0, random3_loot.length - 1)
            event.player.give(random3_loot[lootno])
            event.player.mainHandItem.count -= 1
        }
        
    }
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:random_enchant4') {
        if(event.player.getHeldItem(OFF_HAND)!=null)
        {
            event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"You can't use this item when you hold item in your offhand.","color":"red"}`)
        }
        else
        {
            lootno = randomNum(0, random4_loot.length - 1)
            event.player.give(random4_loot[lootno])
            event.player.mainHandItem.count -= 1
        }
        
    }
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:random_enchant5') {
        if(event.player.getHeldItem(OFF_HAND)!=null)
        {
            event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"You can't use this item when you hold item in your offhand.","color":"red"}`)
        }
        else
        {
            lootno = randomNum(0, random5_loot.length - 1)
            event.player.give(random5_loot[lootno])
            event.player.mainHandItem.count -= 1
        }
        
    }
})

onEvent('recipes', event => {
    event.smithing('kubejs:random_enchant2', 'kubejs:random_enchant','kubejs:random_enchant')
    event.smithing('kubejs:random_enchant3', 'kubejs:random_enchant2','kubejs:random_enchant2')
    event.smithing('kubejs:random_enchant4', 'kubejs:random_enchant3','kubejs:random_enchant3')
    event.smithing('kubejs:random_enchant5', 'kubejs:random_enchant4','kubejs:random_enchant4')
})
