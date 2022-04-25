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
})


onEvent('item.registry', event => {
	event.create('custom_paper', item => {
		item.tooltip(Text.of('§7右键使用(仅定制了物品的赞助者、挑战者有效)'))
	})
    
	event.create('singer_sword', item => {
		item.tooltip(Text.of('歌者の剑'))
		item.tooltip(Text.of('          §7--@_Inory_'))
		item.type('sword').tier('singer')
		item.rarity(Rarity.EPIC)
	})

	event.create('bengdai', item => {
		item.tooltip(Text.of('          §7--@_Inory_'))
		item.rarity(Rarity.EPIC)
		item.unstackable()
	})

	event.create('ruoshui', item => {
		item.tooltip(Text.of('§1海之屏障  §7潜行时无敌'))
		item.tooltip(Text.of('§9冰之霜寒  §7战斗时冻结攻击你的目标'))
		item.tooltip(Text.of('§a水之净化  §7立刻熄灭你身上的火焰'))
		item.tooltip(Text.of('§3河之湍急  §7处于战斗状态时获得速度效果'))
		item.tooltip(Text.of('§c泉之治愈  §7潜行使用恢复最大生命值的一半，冷却时间15秒'))
		item.tooltip(Text.of('§e汽之呼吸  §7右键使用获得15秒水下呼吸，冷却时间20秒'))
		item.tooltip('')
		item.tooltip(Text.of('§7感谢 @doo 的贡献'))
		item.type('sword').tier('ruo_shui')
		item.rarity(Rarity.EPIC)
	})

	event.create('baigei_boots', item => {
		item.type('boots').tier('gold')
		item.maxDamage(400)
		item.rarity(Rarity.EPIC)
		item.tooltip(Text.of('§7感知'))
		item.tooltip(Text.of('§7生命恢复III'))
		item.tooltip(Text.of('§7速度II'))
		item.tooltip('')
		item.tooltip(Text.of('§6@极限生存挑战通关者-huasuia'))
	})

	event.create('yecao', item => {
		item.type('sword').tier('ye_cao')
		item.rarity(Rarity.EPIC)
		item.tooltip(Text.of('§7春风：右键获得5秒抗性提升5和生命回复5，冷却10秒'))
		item.tooltip(Text.of('§7蔓延：在草方块上时获得速度4'))
		item.tooltip(Text.of('§7星火：获得抗火效果'))
		item.tooltip(Text.of('§7润物：潜行时获得饱食度'))
		item.tooltip('')
		item.tooltip(Text.of('§6@极限生存挑战通关者-AKong4213'))
	})

	event.create('qixing', item => {
		item.type('sword').tier('qi_xing')
		item.rarity(Rarity.EPIC)
		item.tooltip(Text.of('§7天枢●贪狼：使用该武器杀死敌人时获得伤害吸收4'))
		item.tooltip(Text.of('§7天璇●巨门：赋予了该武器额外的攻击距离'))
		item.tooltip(Text.of('§7天玑●禄存：赋予了该武器额外的幸运（概率斩首）'))
		item.tooltip(Text.of('§7天权●文曲：赋予了该武器额外的吸血'))
		item.tooltip(Text.of('§7玉衡●廉贞：赋予了该武器额外的攻击速度'))
		item.tooltip(Text.of('§7开阳●武曲：赋予了该武器额外的攻击力'))
		item.tooltip(Text.of('§7摇光●破军：使该武器攻击附带10%目标生命值伤害'))
		item.tooltip('')
		item.tooltip(Text.of('§6@极限生存挑战通关者-A_wushi'))
	})

	event.create('zhongzi', item => {
		item.tooltip(Text.of('§7我们将其称为高效'))
		item.tooltip('')
		item.tooltip(Text.of('§6@极限生存挑战通关者-moyuguguji'))
		item.rarity(Rarity.EPIC)
		item.unstackable()
	})

	event.create('shenqi_shard', item => {
		item.tooltip(Text.of('§7收集散落的神器碎片来打造神器'))
		item.rarity(Rarity.EPIC)
	})

	event.create('shenqi_ingot', item => {
		item.tooltip(Text.of('§7收集散落的神器零件来打造神器'))
		item.rarity(Rarity.EPIC)
	})

	event.create('shenqi_random', item => {
		item.tooltip(Text.of('§7右键以获得神器'))
		item.rarity(Rarity.EPIC)
		item.unstackable()
	})
})