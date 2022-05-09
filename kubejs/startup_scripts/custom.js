onEvent('item.registry.tool_tiers', event => {
	event.add('singer', tier => {
		tier.uses = 2000
		tier.speed = 12.0
		tier.attackDamageBonus = 17.0
		tier.level = 5
		tier.enchantmentValue = 25
		tier.repairIngredient = 'minecraft:enchanted_golden_apple'
	})

	event.add('ruo_shui', tier => {
		tier.uses = 2000
		tier.speed = 12.0
		tier.attackDamageBonus = 12.0
		tier.level = 5
		tier.enchantmentValue = 25
		tier.repairIngredient = 'minecraft:diamond'
	})
	event.add('ye_cao', tier => {
		tier.uses = 2000
		tier.speed = 12.0
		tier.attackDamageBonus = 7.0
		tier.level = 5
		tier.enchantmentValue = 25
		tier.repairIngredient = 'minecraft:emerald'
	})
	event.add('qi_xing', tier => {
		tier.uses = 2000
		tier.speed = 12.0
		tier.attackDamageBonus = 7.0
		tier.level = 5
		tier.enchantmentValue = 25
		tier.repairIngredient = 'minecraft:diamond'
	})
	event.add('shadow', tier => {
		tier.uses = 2000
		tier.speed = 12.0
		tier.attackDamageBonus = 7.0
		tier.level = 5
		tier.enchantmentValue = 25
		tier.repairIngredient = 'minecraft:diamond'
	})
	event.add('dig', tier => {
		tier.uses = 2000
		tier.speed = 20.0
		tier.attackDamageBonus = 7.0
		tier.level = 7
		tier.enchantmentValue = 25
		tier.repairIngredient = 'minecraft:diamond'
	})
})


onEvent('item.registry', event => {
	event.create('custom_paper', item => {
		item.tooltip(Text.translate('item.kubejs.custom_paper.tooltip'))
	})
    
	event.create('singer_sword', item => {
		item.tooltip(Text.translate('item.kubejs.singer_sword.tooltip'))
		item.tooltip(Text.translate('item.kubejs.singer_sword.tooltip1'))
		item.type('sword').tier('singer')
		item.rarity(Rarity.EPIC)
	})

	event.create('bengdai', item => {
		item.tooltip(Text.translate('item.kubejs.bengdai.tooltip'))
		item.rarity(Rarity.EPIC)
		item.unstackable()
	})

	event.create('ruoshui', item => {
		item.tooltip(Text.translate('item.kubejs.ruoshui.tooltip'))
		item.tooltip(Text.translate('item.kubejs.ruoshui.tooltip1'))
		item.tooltip(Text.translate('item.kubejs.ruoshui.tooltip2'))
		item.tooltip(Text.translate('item.kubejs.ruoshui.tooltip3'))
		item.tooltip(Text.translate('item.kubejs.ruoshui.tooltip4'))
		item.tooltip(Text.translate('item.kubejs.ruoshui.tooltip5'))
		item.tooltip('')
		item.tooltip(Text.translate('item.kubejs.ruoshui.tooltip6'))
		item.type('sword').tier('ruo_shui')
		item.rarity(Rarity.EPIC)
	})

	event.create('baigei_boots', item => {
		item.type('boots').tier('gold')
		item.maxDamage(400)
		item.rarity(Rarity.EPIC)
		item.tooltip(Text.translate('item.kubejs.baigei_boots.tooltip'))
		item.tooltip(Text.translate('item.kubejs.baigei_boots.tooltip1'))
		item.tooltip(Text.translate('item.kubejs.baigei_boots.tooltip2'))
		item.tooltip('')
		item.tooltip(Text.translate('item.kubejs.baigei_boots.tooltip3'))
	})

	event.create('yecao', item => {
		item.type('sword').tier('ye_cao')
		item.rarity(Rarity.EPIC)
		item.tooltip(Text.translate('item.kubejs.yecao.tooltip'))
		item.tooltip(Text.translate('item.kubejs.yecao.tooltip1'))
		item.tooltip(Text.translate('item.kubejs.yecao.tooltip2'))
		item.tooltip(Text.translate('item.kubejs.yecao.tooltip3'))
		item.tooltip('')
		item.tooltip(Text.translate('item.kubejs.yecao.tooltip4'))
	})

	event.create('qixing', item => {
		item.type('sword').tier('qi_xing')
		item.rarity(Rarity.EPIC)
		item.tooltip(Text.translate('item.kubejs.qixing.tooltip'))
		item.tooltip(Text.translate('item.kubejs.qixing.tooltip1'))
		item.tooltip(Text.translate('item.kubejs.qixing.tooltip2'))
		item.tooltip(Text.translate('item.kubejs.qixing.tooltip3'))
		item.tooltip(Text.translate('item.kubejs.qixing.tooltip4'))
		item.tooltip(Text.translate('item.kubejs.qixing.tooltip5'))
		item.tooltip(Text.translate('item.kubejs.qixing.tooltip6'))
		item.tooltip('')
		item.tooltip(Text.translate('item.kubejs.qixing.tooltip7'))
	})

	event.create('zhongzi', item => {
		item.tooltip(Text.translate('item.kubejs.zhongzi.tooltip'))
		item.tooltip('')
		item.tooltip(Text.translate('item.kubejs.zhongzi.tooltip1'))
		item.rarity(Rarity.EPIC)
		item.unstackable()
	})

	event.create('shenqi_shard', item => {
		item.tooltip(Text.translate('item.kubejs.shenqi_shard.tooltip'))
		item.rarity(Rarity.EPIC)
	})

	event.create('shenqi_ingot', item => {
		item.tooltip(Text.translate('item.kubejs.shenqi_ingot.tooltip'))
		item.rarity(Rarity.EPIC)
	})

	event.create('shenqi_random', item => {
		item.tooltip(Text.translate('item.kubejs.shenqi_random.tooltip'))
		item.rarity(Rarity.EPIC)
		item.unstackable()
	})

	event.create('shadow_katana', item => {
		item.type('sword').tier('shadow')
		item.tooltip(Text.translate('item.kubejs.shadow_katana.tooltip0'))
		item.tooltip(Text.translate('item.kubejs.shadow_katana.tooltip'))
		item.tooltip(Text.translate('item.kubejs.shadow_katana.tooltip1'))
		item.rarity(Rarity.EPIC)
	})

	event.create('digger', item => {
		item.type('pickaxe').tier('dig')
		item.rarity(Rarity.EPIC)
		item.tooltip(Text.translate('item.kubejs.digger.tooltip'))
	})

	event.create('dead_book', item => {
		item.tooltip(Text.translate('item.kubejs.dead_book.tooltip'))
		item.rarity(Rarity.EPIC)
		item.unstackable()
	})
})