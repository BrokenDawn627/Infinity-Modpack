// priority: 0


onEvent('item.registry', event => {
	event.create('diamond_shard', item => {
		item.displayName('钻石碎片')
	  })

	  event.create('shining_star', item => {
		item.displayName('§6闪耀之星')
	  })
	  event.create('red_packet', item => {
		item.displayName('§c红包').tooltip('§7右键任意方块使用')
	  })
	  event.create('firecracker', item => {
		item.displayName('§c鞭炮').tooltip('§7右键任意方块使用，建议不要在家里用')
	  })
	  event.create('candied_haw', item => {
		item.displayName('§c糖葫芦').tooltip('§7新年快乐！').type('sword').tier('diamond')
	  })
	  event.create('chinese_dumpling', item => {
		item.displayName('饺子').tooltip('§7好味道！')
		item.food((food) => {food.hunger(4).saturation(0.5).effect('minecraft:saturation', 100, 0, 1.0)})
	  })
	  event.create('upgrade_core_evolution', item => {
		item.displayName('§4升级核心——进化').tooltip('§7在工作台中升级你的物品。这会清除掉物品的原有特性。')
	  })
	  event.create('shi_li', item => {
		item.displayName('§8石粒').tooltip('§7屹立不倒！')
	  })
	  event.create('skill_bottle', item => {
		item.displayName('§9技能之瓶').tooltip('§7右键使用来返还一点技能点')
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
	  event.create('difficulty_changer', item => {
		item.displayName('§6难度切换器').tooltip('§7右键使用以切换难度')
		item.tooltip('§a休闲')
		item.tooltip('§7- 正常的生存，无任何词条')
		item.tooltip('§e冒险')
		item.tooltip('§7- 玩家受到的生物伤害额外增加10%')
		item.tooltip('§7- 生物在未满血的状态下受到的玩家伤害减少15%')
		item.tooltip('§7- 击杀敌对生物时有10%的概率额外获得经验等级、金币奖励')
		item.tooltip('§c困难')
		item.tooltip('§7- 玩家受到的生物伤害额外增加20%')
		item.tooltip('§7- 生物在未满血的状态下受到的玩家伤害减少30%')
		item.tooltip('§7- 击杀敌对生物时有25%的概率额外获得经验等级、金币奖励')
		item.tooltip('§4末日')
		item.tooltip('§7- 玩家受到的生物伤害额外增加30%')
		item.tooltip('§7- 生物在未满血的状态下受到的玩家伤害减少50%')
		item.tooltip('§7- 玩家受到的生物伤害额外附带15%玩家最大生命值的真实伤害')
		item.tooltip('§7- 击杀敌对生物时有50%的概率额外获得经验等级、金币奖励')
		item.rarity(Rarity.EPIC)
	  })
	  
	  
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})