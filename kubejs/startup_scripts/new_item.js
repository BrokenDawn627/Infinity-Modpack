// priority: 0


onEvent('item.registry', event => {
	event.create('diamond_shard', item => {
		item.displayName('钻石碎片')
	  })

	  event.create('shining_star', item => {
		item.displayName('§6闪耀之星').tooltip('§7左键点击任意方块重置难度')
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
		item.displayName('§9技能之瓶').tooltip('§7右键任意方块来返还一点技能点')
	  })
	  
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})