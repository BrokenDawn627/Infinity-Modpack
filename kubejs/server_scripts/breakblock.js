
	onEvent('block.loot_tables', event => {
        
        event.modifyBlock('minecraft:stone', table => {
          table.addPool(pool => {
            pool.addItem('kubejs:shi_li').randomChance(0.002)
          })
        })
      })

