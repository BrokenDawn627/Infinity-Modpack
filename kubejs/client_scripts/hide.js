// priority: 0


onEvent('rei.hide.items', event => {
	event.hide('minecraft:stone_sword')
	event.hide('minecraft:stone_shovel')
	event.hide('minecraft:stone_pickaxe')
	event.hide('minecraft:stone_axe')
	event.hide('minecraft:stone_hoe')

	event.hide('minecraft:wooden_sword')
	event.hide('minecraft:wooden_shovel')
	event.hide('minecraft:wooden_pickaxe')
	event.hide('minecraft:wooden_axe')
	event.hide('minecraft:wooden_hoe')
	event.hide('treeaxe:wooden_treeaxe')
	event.hide('nosleep:overworld_anchor')
})