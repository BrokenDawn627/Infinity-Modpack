// priority: 0


onEvent('item.registry', event => {
	event.create('diamond_shard', item => {})

	event.create('shining_star', item => {})

	event.create('red_packet', item => {
		item.tooltip(Text.translate('item.kubejs.red_packet.tooltip'))
	})
	event.create('firecracker', item => {
		item.tooltip(Text.translate('item.kubejs.firecracker.tooltip'))
	})
	event.create('candied_haw', item => {
		item.tooltip(Text.translate('item.kubejs.candied_haw.tooltip'))
	})
	event.create('chinese_dumpling', item => {
		item.tooltip(Text.translate('item.kubejs.chinese_dumpling.tooltip'))
		item.food((food) => {food.hunger(4).saturation(0.5).effect('minecraft:saturation', 100, 0, 1.0)})
	})
	event.create('upgrade_core_evolution', item => {
		item.tooltip(Text.translate('item.kubejs.upgrade_core_evolution.tooltip'))
	})
	event.create('shi_li', item => {
		item.tooltip(Text.translate('item.kubejs.shi_li.tooltip'))
	})
	event.create('skill_bottle', item => {
		item.tooltip(Text.translate('item.kubejs.skill_bottle.tooltip'))
	})

	event.create('difficulty_easy', item => {})
	event.create('difficulty_normal', item => {})
	event.create('difficulty_hard', item => {})
	event.create('difficulty_impossible', item => {})

	event.create('jiushu_heart', item => {
		item.tooltip(Text.translate('item.kubejs.jiushu_heart.tooltip'))
		item.rarity(Rarity.EPIC)
	})
	event.create('death_heart', item => {
		item.tooltip(Text.translate('item.kubejs.death_heart.tooltip'))
		item.rarity(Rarity.EPIC)
	})
	event.create('difficulty_changer', item => {
		item.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip'))
		item.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip1'))
		item.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip2'))
		item.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip3'))
		item.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip4'))
		item.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip5'))
		item.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip6'))
		item.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip7'))
		item.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip8'))
		item.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip9'))
		item.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip10'))
		item.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip11'))
		item.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip12'))
		item.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip13'))
		item.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip14'))
		item.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip15'))
		item.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip16'))
		item.tooltip(Text.translate('item.kubejs.difficulty_changer.tooltip17'))
		item.rarity(Rarity.EPIC)
	})
	event.create('difficulty_looker', item => {
		item.tooltip(Text.translate('item.kubejs.difficulty_looker.tooltip'))
		item.rarity(Rarity.EPIC)
	})
	event.create('jiushu_heart_shard', item => {
		item.rarity(Rarity.EPIC)
	})
	event.create('random_enchant', item => {
		item.tooltip(Text.translate('item.kubejs.random_enchant.tooltip'))
		item.rarity(Rarity.EPIC)
	})
	event.create('random_enchant2', item => {
		item.tooltip(Text.translate('item.kubejs.random_enchant.tooltip'))
		item.rarity(Rarity.EPIC)
	})
	event.create('random_enchant3', item => {
		item.tooltip(Text.translate('item.kubejs.random_enchant.tooltip'))
		item.rarity(Rarity.EPIC)
	})
	event.create('random_enchant4', item => {
		item.tooltip(Text.translate('item.kubejs.random_enchant.tooltip'))
		item.rarity(Rarity.EPIC)
	})
	event.create('random_enchant5', item => {
		item.tooltip(Text.translate('item.kubejs.random_enchant.tooltip'))
		item.rarity(Rarity.EPIC)
	})
	event.create('death_heart_shard', item => {
		item.rarity(Rarity.EPIC)
	})
})