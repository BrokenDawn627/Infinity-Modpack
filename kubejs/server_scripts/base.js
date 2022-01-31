// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true



onEvent('recipes', event => {
	// Example - Infusion
	event.custom({
		type: 'betterend:infusion',
		input: {
			item:'minecraft:coal'
		},
		result: {
			item:'minecraft:diamond'
		},
		time: 100,
		catalysts:{
			north:'betterend:crystal_shards',
			north_east:'betterend:crystal_shards',
			east:'betterend:crystal_shards',
			south_east:'betterend:crystal_shards',
			south:'betterend:crystal_shards',
			south_west:'betterend:crystal_shards',
			west:'betterend:crystal_shards',
			north_west:'betterend:crystal_shards'
		}
	  })

	// Example - Alloying
	event.custom({
		type: 'betterend:alloying',
		ingredients: [Ingredient.of('minecraft:gold_ingot').toJson(),Ingredient.of('minecraft:netherite_scrap').toJson()],
		result: {
			item:'minecraft:netherite_ingot'
		},
		experience:0.5,
		smelttime:350
	  })

	  event.remove({id: 'minecraft:netherite_ingot'})

	  event.custom({
		type: 'betterend:alloying',
		ingredients: [Ingredient.of('minecraft:diamond').toJson(),Ingredient.of('enderitemod:enderite_scrap').toJson()],
		result: {
			item:'enderitemod:enderite_ingot'
		},
		experience:0.5,
		smelttime:350
	  })

	  event.remove({id: 'enderitemod:enderite_ingot_from_scrap'})





	  // Remove
	  event.remove({output: 'minecraft:iron_nugget', type: 'minecraft:smelting'})
	  event.remove({output: 'minecraft:iron_nugget', type: 'minecraft:blasting'})
	  event.remove({output: 'minecraft:gold_nugget', type: 'minecraft:smelting'})
	  event.remove({output: 'minecraft:gold_nugget', type: 'minecraft:blasting'})
	  event.remove({output: 'emeraldequipment:emerald_shard', type: 'minecraft:smelting'})
	  event.remove({output: 'emeraldequipment:emerald_shard', type: 'minecraft:blasting'})
	  event.remove({output: 'copperequipment:copper_nugget', type: 'minecraft:smelting'})
	  event.remove({output: 'copperequipment:copper_nugget', type: 'minecraft:blasting'})

	  event.remove({output: 'minecraft:stone_sword'})
	  event.remove({output: 'minecraft:stone_shovel'})
	  event.remove({output: 'minecraft:stone_pickaxe'})
	  event.remove({output: 'minecraft:stone_axe'})
	  event.remove({output: 'minecraft:stone_hoe'})

	  event.remove({output: 'minecraft:wooden_sword'})
	  event.remove({output: 'minecraft:wooden_shovel'})
	  event.remove({output: 'minecraft:wooden_pickaxe'})
	  event.remove({output: 'minecraft:wooden_axe'})
	  event.remove({output: 'minecraft:wooden_hoe'})

	  event.remove({output: 'treeaxe:wooden_treeaxe'})


	  // Blasting & smelting
	  let multiSmelt = (output, input, includeBlasting) => {
		event.smelting(output, input).xp(0.5)
		
		if (includeBlasting) {
		  event.blasting(output, input).xp(0.5)
		}
	  }

	  multiSmelt('minecraft:iron_ingot', 'minecraft:iron_helmet', true)
	  multiSmelt('2x minecraft:iron_ingot', 'minecraft:iron_chestplate', true)
	  multiSmelt('2x minecraft:iron_ingot', 'minecraft:iron_leggings', true)
	  multiSmelt('minecraft:iron_ingot', 'minecraft:iron_boots', true)
	  multiSmelt('minecraft:iron_ingot', 'minecraft:bucket', true)
	  multiSmelt('minecraft:iron_nugget', 'minecraft:iron_bars', true)
	  multiSmelt('4x minecraft:iron_ingot', 'minecraft:anvil', true)
	  multiSmelt('3x minecraft:iron_ingot', 'minecraft:chipped_anvil', true)
	  multiSmelt('2x minecraft:iron_ingot', 'minecraft:damaged_anvil', true)
	  multiSmelt('minecraft:iron_ingot', 'minecraft:iron_door', true)
	  multiSmelt('minecraft:iron_ingot', 'minecraft:iron_trapdoor', true)
	  multiSmelt('minecraft:iron_ingot', 'minecraft:iron_sword', true)
	  multiSmelt('4x minecraft:iron_nugget', 'minecraft:iron_shovel', true)
	  multiSmelt('minecraft:iron_ingot', 'minecraft:iron_pickaxe', true)
	  multiSmelt('minecraft:iron_ingot', 'minecraft:iron_axe', true)
	  multiSmelt('minecraft:iron_ingot', 'minecraft:iron_hoe', true)
	  multiSmelt('minecraft:iron_ingot', 'minecraft:iron_horse_armor', true)


	  multiSmelt('minecraft:gold_ingot', 'minecraft:golden_helmet', true)
	  multiSmelt('2x minecraft:gold_ingot', 'minecraft:golden_chestplate', true)
	  multiSmelt('2x minecraft:gold_ingot', 'minecraft:golden_leggings', true)
	  multiSmelt('minecraft:gold_ingot', 'minecraft:golden_boots', true)
	  multiSmelt('minecraft:gold_ingot', 'minecraft:golden_sword', true)
	  multiSmelt('4x minecraft:gold_nugget', 'minecraft:golden_shovel', true)
	  multiSmelt('minecraft:gold_ingot', 'minecraft:golden_pickaxe', true)
	  multiSmelt('minecraft:gold_ingot', 'minecraft:golden_axe', true)
	  multiSmelt('minecraft:gold_ingot', 'minecraft:golden_hoe', true)
	  multiSmelt('minecraft:gold_ingot', 'minecraft:golden_horse_armor', true)
	  multiSmelt('minecraft:gold_ingot', 'minecraft:golden_apple', true)
	  multiSmelt('minecraft:gold_block', 'minecraft:enchanted_golden_apple', true)

	  multiSmelt('minecraft:diamond', 'minecraft:diamond_helmet', true)
	  multiSmelt('2x minecraft:diamond', 'minecraft:diamond_chestplate', true)
	  multiSmelt('2x minecraft:diamond', 'minecraft:diamond_leggings', true)
	  multiSmelt('minecraft:diamond', 'minecraft:diamond_boots', true)
	  multiSmelt('minecraft:diamond', 'minecraft:diamond_sword', true)
	  multiSmelt('4x kubejs:diamond_shard', 'minecraft:diamond_shovel', true)
	  multiSmelt('minecraft:diamond', 'minecraft:diamond_pickaxe', true)
	  multiSmelt('minecraft:diamond', 'minecraft:diamond_axe', true)
	  multiSmelt('minecraft:diamond', 'minecraft:diamond_hoe', true)
	  multiSmelt('minecraft:diamond', 'minecraft:diamond_horse_armor', true)


	  event.shapeless('9x kubejs:diamond_shard', ['minecraft:diamond'])
	  event.shaped('minecraft:diamond', [
		'SSS',
		'SSS',
		'SSS'
	  ], {
		S: 'kubejs:diamond_shard'
	  })

	  multiSmelt('minecraft:emerald', 'emeraldequipment:emerald_helmet', true)
	  multiSmelt('2x minecraft:emerald', 'emeraldequipment:emerald_chestplate', true)
	  multiSmelt('2x minecraft:emerald', 'emeraldequipment:emerald_leggings', true)
	  multiSmelt('minecraft:emerald', 'emeraldequipment:emerald_boots', true)
	  multiSmelt('minecraft:emerald', 'emeraldequipment:emerald_sword', true)
	  multiSmelt('4x emeraldequipment:emerald_shard', 'emeraldequipment:emerald_shovel', true)
	  multiSmelt('minecraft:emerald', 'emeraldequipment:emerald_pick', true)
	  multiSmelt('minecraft:emerald', 'emeraldequipment:emerald_axe', true)
	  multiSmelt('minecraft:emerald', 'emeraldequipment:emerald_hoe', true)
	  multiSmelt('minecraft:emerald', 'emeraldequipment:emerald_horse_armor', true)

	  multiSmelt('minecraft:copper_ingot', 'copperequipment:copper_helmet', true)
	  multiSmelt('2x minecraft:copper_ingot', 'copperequipment:copper_chestplate', true)
	  multiSmelt('2x minecraft:copper_ingot', 'copperequipment:copper_leggings', true)
	  multiSmelt('minecraft:copper_ingot', 'copperequipment:copper_boots', true)
	  multiSmelt('minecraft:copper_ingot', 'copperequipment:copper_sword', true)
	  multiSmelt('4x copperequipment:copper_nugget', 'copperequipment:copper_shovel', true)
	  multiSmelt('minecraft:copper_ingot', 'copperequipment:copper_pick', true)
	  multiSmelt('minecraft:copper_ingot', 'copperequipment:copper_axe', true)
	  multiSmelt('minecraft:copper_ingot', 'copperequipment:copper_hoe', true)
	  multiSmelt('minecraft:copper_ingot', 'copperequipment:copper_horse_armor', true)

	  event.shaped('minecraft:bone', [
		'SS',
		'S ',
		'S '
	  ], {
		S: 'minecraft:bone_meal'
	  })
})

