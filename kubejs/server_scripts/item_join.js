onEvent('player.logged_in', event => {
    
    if (!event.player.stages.has('starting_items')) {
      
      event.player.stages.add('starting_items')
      
      event.player.give(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:infinity_book"}'))
      event.player.give('kubejs:difficulty_changer')
      if(event.player.name=='D_O_O')
      {
        event.player.give('kubejs:ruoshui')
      }
    }
  })