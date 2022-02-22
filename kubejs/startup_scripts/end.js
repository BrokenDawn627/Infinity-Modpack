
onEvent('item.registry.tool_tiers', event => {
    event.add('infinity', tier => {
      tier.uses = 9999
      tier.speed = 20.0
      tier.attackDamageBonus = 99996.0
      tier.level = 8
      tier.enchantmentValue = 35
      tier.repairIngredient = 'minecraft:nether_star'
    })
  })


  onEvent('item.registry', event => {

    event.create('infinity_sword', item => {
        item.displayName('§1§l§ka§r§9无限支配之剑§1§l§ka§r').tooltip('§7游戏结束').type('sword').tier('infinity')
      })

    event.create('infinity_sword_a', item => {
		item.displayName('§9无限支配之剑剑柄').tooltip('§7制作材料').unstackable()
	  })

      event.create('infinity_sword_b', item => {
		item.displayName('§9无限支配之剑剑身').tooltip('§7制作材料').unstackable()
	  })

  })