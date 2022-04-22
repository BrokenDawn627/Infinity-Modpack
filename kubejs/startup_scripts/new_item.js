// priority: 0


onEvent('item.registry', event => {
	event.create('diamond_shard', item => {
		item.displayName('钻石碎片')
	  })

	  event.create('shining_star', item => {
		item.displayName('§6闪耀之星')
	  })
	  event.create('red_packet', item => {
		item.displayName('§c红包').tooltip(Text.of('§7右键任意方块使用'))
	  })
	  event.create('firecracker', item => {
		item.displayName('§c鞭炮').tooltip(Text.of('§7右键任意方块使用，建议不要在家里用'))
	  })
	  event.create('candied_haw', item => {
		item.displayName('§c糖葫芦').tooltip(Text.of('§7新年快乐！')).type('sword').tier('diamond')
	  })
	  event.create('chinese_dumpling', item => {
		item.displayName('饺子').tooltip(Text.of('§7好味道！'))
		item.food((food) => {food.hunger(4).saturation(0.5).effect('minecraft:saturation', 100, 0, 1.0)})
	  })
	  event.create('upgrade_core_evolution', item => {
		item.displayName('§4升级核心——进化').tooltip(Text.of('§7在工作台中升级你的物品。这会清除掉物品的原有特性。'))
	  })
	  event.create('shi_li', item => {
		item.displayName('§8石粒').tooltip(Text.of('§7屹立不倒！'))
	  })
	  event.create('skill_bottle', item => {
		item.displayName('§9技能之瓶').tooltip(Text.of('§7右键使用来返还一点技能点'))
	  })

	  event.create('difficulty_easy', item => {
		item.displayName('切换为简单难度')
	  })
	  event.create('difficulty_normal', item => {
		item.displayName('切换为普通难度')
	  })
	  event.create('difficulty_hard', item => {
		item.displayName('切换为困难难度')
	  })
	  event.create('difficulty_impossible', item => {
		item.displayName('切换为末日难度')
	  })
	  event.create('jiushu_heart', item => {
		item.displayName('§b救赎之心')
		item.tooltip(Text.of('§7右键使用以减少20点难度值，冷却时间5分钟'))
		item.rarity(Rarity.EPIC)
	  })
	  event.create('death_heart', item => {
		item.displayName('§4命定之死')
		item.tooltip(Text.of('§7右键使用 以死亡换取难度值的归零'))
		item.rarity(Rarity.EPIC)
	  })
	  event.create('difficulty_changer', item => {
		item.displayName('§6难度切换器').tooltip(Text.of('§7右键使用以切换难度'))
		item.tooltip(Text.of('§c游戏id请勿使用中文名'))
		item.tooltip(Text.of('§c使用时请勿在副手持有物品'))
		item.tooltip(Text.of('§a休闲'))
		item.tooltip(Text.of('§7- 正常的生存'))
		item.tooltip(Text.of('§7- 敌对生物掉落普通物品'))
		item.tooltip(Text.of('§e冒险'))
		item.tooltip(Text.of('§7- 怪物的攻击力增加10%'))
		item.tooltip(Text.of('§7- 生物受到的玩家伤害减少10%'))
		item.tooltip(Text.of('§7- 敌对生物有概率掉落稀有物品'))
		item.tooltip(Text.of('§c困难'))
		item.tooltip(Text.of('§7- 怪物的攻击力增加25%'))
		item.tooltip(Text.of('§7- 生物受到的玩家伤害减少20%'))
		item.tooltip(Text.of('§7- 敌对生物有概率掉落史诗物品'))
		item.tooltip(Text.of('§4末日'))
		item.tooltip(Text.of('§7- 怪物的攻击力增加50%'))
		item.tooltip(Text.of('§7- 生物受到的玩家伤害减少30%'))
		item.tooltip(Text.of('§7- 敌对生物有概率掉落传说物品'))
		item.rarity(Rarity.EPIC)
	  })
	  event.create('difficulty_looker', item => {
		item.displayName('§b难度查看器')
		item.tooltip(Text.of('§7右键以查看难度'))
		item.rarity(Rarity.EPIC)
	  })
	  event.create('jiushu_heart_shard', item => {
		item.displayName('§b救赎之心碎片')
		item.rarity(Rarity.EPIC)
	  })
	  event.create('random_enchant', item => {
		item.displayName('§fI阶-随机附魔书')
		item.tooltip(Text.of('§7右键使用以获得随机附魔书'))
		item.rarity(Rarity.EPIC)
	  })
	  event.create('random_enchant2', item => {
		item.displayName('§aII阶-随机附魔书')
		item.tooltip(Text.of('§7右键使用以获得随机附魔书'))
		item.rarity(Rarity.EPIC)
	  })
	  event.create('random_enchant3', item => {
		item.displayName('§9III阶-随机附魔书')
		item.tooltip(Text.of('§7右键使用以获得随机附魔书'))
		item.rarity(Rarity.EPIC)
	  })
	  event.create('random_enchant4', item => {
		item.displayName('§dIV阶-随机附魔书')
		item.tooltip(Text.of('§7右键使用以获得随机附魔书'))
		item.rarity(Rarity.EPIC)
	  })
	  event.create('random_enchant5', item => {
		item.displayName('§cV阶-随机附魔书')
		item.tooltip(Text.of('§7右键使用以获得随机附魔书'))
		item.rarity(Rarity.EPIC)
	  })
	  event.create('death_heart_shard', item => {
		item.displayName('§4命定之死碎片')
		item.rarity(Rarity.EPIC)
	  })
	  
	  
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})