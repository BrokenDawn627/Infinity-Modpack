onEvent('player.logged_in', event => {
    
    if (!event.player.stages.has('starting_items')) {
      
      event.player.stages.add('starting_items')
      
      event.player.give(Item.of('patchouli:guide_book', '{RepairCost:1,"patchouli:book":"patchouli:infinity_book"}').enchant('yigd:soulbound', 1))
      event.player.give(Item.of('kubejs:difficulty_changer', '{RepairCost:1}').enchant('yigd:soulbound', 1))
      event.player.give(Item.of('kubejs:difficulty_looker', '{RepairCost:1}').enchant('yigd:soulbound', 1))
      event.player.give('kubejs:shadow_katana')
      if(event.player.name=='D_O_O')
      {
        event.player.give('kubejs:ruoshui')
      }
    }
  })