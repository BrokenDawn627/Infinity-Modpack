onEvent('entity.loot_tables', event => {

    event.modifyEntity('adventurez:stone_golem', table => {
        table.addPool(pool => {
          pool.addItem('adventurez:stone_golem_heart')
          pool.addCondition({"condition": "minecraft:killed_by_player"})
          pool.addCondition({"condition": "minecraft:random_chance_with_looting",
          "chance": 0.8,
          "looting_multiplier": 0.01})
        })
      })
})