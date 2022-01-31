onEvent('chest.loot_tables', event => {
    event.modify('minecraft:simple_dungeon', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })
    event.modify('minecraft:abandoned_mineshaft', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })
    event.modify('minecraft:stronghold_corridor', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })
    event.modify('minecraft:stronghold_crossing', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })
    event.modify('minecraft:stronghold_library', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })
    event.modify('minecraft:bastion_bridge', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })
    event.modify('minecraft:bastion_hoglin_stable', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })
    event.modify('minecraft:bastion_other', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })
    event.modify('minecraft:bastion_treasure', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })
    event.modify('minecraft:desert_pyramid', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })
    event.modify('minecraft:end_city_treasure', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })
    event.modify('minecraft:igloo_chest', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })
    event.modify('minecraft:jungle_temple', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })
    event.modify('minecraft:jungle_temple_dispenser', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })
    event.modify('minecraft:nether_bridge', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })
    event.modify('minecraft:pillager_outpost', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })
    event.modify('minecraft:ruined_portal', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })
    event.modify('minecraft:shipwreck_map', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })
    event.modify('minecraft:shipwreck_supply', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })
    event.modify('minecraft:shipwreck_treasure', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })
    event.modify('minecraft:underwater_ruin_big', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })
    event.modify('minecraft:underwater_ruin_small', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })
    event.modify('minecraft:woodland_mansion', table => {
      table.addPool(pool => {
        pool.rolls = [1,2]
        pool.addItem('kubejs:diamond_shard', 1)
      })
    })

  })


onEvent('entity.loot_tables', event => {
    
      
    event.modifyEntity('minecraft:zombie', table => {
      table.addPool(pool => {
        pool.addItem('numismatic-overhaul:silver_coin')
        pool.addCondition({"condition": "minecraft:killed_by_player"})
        pool.addCondition({"condition": "minecraft:random_chance_with_looting",
        "chance": 0.2,
        "looting_multiplier": 0.01})
      })
    })

    event.modifyEntity('minecraft:creeper', table => {
      table.addPool(pool => {
        pool.addItem('numismatic-overhaul:silver_coin')
        pool.addCondition({"condition": "minecraft:killed_by_player"})
        pool.addCondition({"condition": "minecraft:random_chance_with_looting",
        "chance": 0.2,
        "looting_multiplier": 0.01})
      })
    })

    event.modifyEntity('minecraft:blaze', table => {
      table.addPool(pool => {
        pool.addItem('numismatic-overhaul:silver_coin')
        pool.addCondition({"condition": "minecraft:killed_by_player"})
        pool.addCondition({"condition": "minecraft:random_chance_with_looting",
        "chance": 0.2,
        "looting_multiplier": 0.01})
      })
    })

    event.modifyEntity('minecraft:enderman', table => {
      table.addPool(pool => {
        pool.addItem('numismatic-overhaul:silver_coin')
        pool.addCondition({"condition": "minecraft:killed_by_player"})
        pool.addCondition({"condition": "minecraft:random_chance_with_looting",
        "chance": 0.2,
        "looting_multiplier": 0.01})
      })
    })

    event.modifyEntity('minecraft:skeleton', table => {
      table.addPool(pool => {
        pool.addItem('numismatic-overhaul:silver_coin')
        pool.addCondition({"condition": "minecraft:killed_by_player"})
        pool.addCondition({"condition": "minecraft:random_chance_with_looting",
        "chance": 0.2,
        "looting_multiplier": 0.01})
      })
    })

  })

  onEvent('block.loot_tables', event => {
    
    event.modifyBlock('minecraft:spawner', table => {
      table.addPool(pool => {
        pool.addItem('victus:blank_heart_aspect').randomChance(0.2)
        pool.addItem('heartytrinkets:red_heart').randomChance(0.05)
      })
    })
  })