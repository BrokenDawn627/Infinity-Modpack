
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
		item.tooltip(Text.translate('item.kubejs.infinity_sword.tooltip'))
		item.tooltip('')
		item.tooltip(Text.translate('item.kubejs.infinity_sword.tooltip1'))
		item.tooltip(Text.translate('item.kubejs.infinity_sword.tooltip2'))
		item.type('sword').tier('infinity')
		item.rarity(Rarity.EPIC)
		item.glow(true)
	})

	event.create('infinity_sword_a', item => {
		item.tooltip(Text.translate('item.kubejs.infinity_sword_part.tooltip'))
		item.rarity(Rarity.EPIC)
	})

	event.create('infinity_sword_b', item => {
		item.tooltip(Text.translate('item.kubejs.infinity_sword_part.tooltip'))
		item.rarity(Rarity.EPIC)
	})

})