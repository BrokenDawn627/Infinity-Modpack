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
	

	  /*event.custom({
		type: 'betterend:alloying',
		ingredients: [Ingredient.of('minecraft:diamond').toJson(),Ingredient.of('enderitemod:enderite_scrap').toJson()],
		result: {
			item:'enderitemod:enderite_ingot'
		},
		experience:0.5,
		smelttime:350
	  })

	  event.remove({id: 'enderitemod:enderite_ingot_from_scrap'})*/





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

	  let armorBurning = (output,input,num) => {
		event.custom({
			type: 'lychee:item_burning',
			item_in:{
				item: input
			},
			post:{
				type:'drop_item',
				item: output,
				count: num
			}
		  })
	  }

	  armorBurning('minecraft:iron_ingot', 'minecraft:iron_helmet', 1)
	  armorBurning('minecraft:iron_ingot', 'minecraft:iron_chestplate', 2)
	  armorBurning('minecraft:iron_ingot', 'minecraft:iron_leggings', 2)
	  armorBurning('minecraft:iron_ingot', 'minecraft:iron_boots', 1)
	  armorBurning('minecraft:iron_ingot', 'minecraft:bucket', 1)
	  armorBurning('minecraft:iron_nugget', 'minecraft:iron_bars', 1)
	  armorBurning('minecraft:iron_ingot', 'minecraft:anvil', 4)
	  armorBurning('minecraft:iron_ingot', 'minecraft:chipped_anvil', 3)
	  armorBurning('minecraft:iron_ingot', 'minecraft:damaged_anvil', 2)
	  armorBurning('minecraft:iron_ingot', 'minecraft:iron_door', 1)
	  armorBurning('minecraft:iron_ingot', 'minecraft:iron_trapdoor', 1)
	  armorBurning('minecraft:iron_ingot', 'minecraft:iron_sword', 1)
	  armorBurning('minecraft:iron_nugget', 'minecraft:iron_shovel', 4)
	  armorBurning('minecraft:iron_ingot', 'minecraft:iron_pickaxe', 1)
	  armorBurning('minecraft:iron_ingot', 'minecraft:iron_axe', 1)
	  armorBurning('minecraft:iron_ingot', 'minecraft:iron_hoe', 1)
	  armorBurning('minecraft:iron_ingot', 'minecraft:iron_horse_armor', 1)

	  armorBurning('minecraft:gold_ingot', 'minecraft:golden_helmet', 1)
	  armorBurning('minecraft:gold_ingot', 'minecraft:golden_chestplate', 2)
	  armorBurning('minecraft:gold_ingot', 'minecraft:golden_leggings', 2)
	  armorBurning('minecraft:gold_ingot', 'minecraft:golden_boots', 1)
	  armorBurning('minecraft:gold_ingot', 'minecraft:golden_sword', 1)
	  armorBurning('minecraft:gold_nugget', 'minecraft:golden_shovel', 4)
	  armorBurning('minecraft:gold_ingot', 'minecraft:golden_pickaxe', 1)
	  armorBurning('minecraft:gold_ingot', 'minecraft:golden_axe', 1)
	  armorBurning('minecraft:gold_ingot', 'minecraft:golden_hoe', 1)
	  armorBurning('minecraft:gold_ingot', 'minecraft:golden_horse_armor', 1)
	  armorBurning('minecraft:gold_ingot', 'minecraft:golden_apple', 1)
	  armorBurning('minecraft:gold_block', 'minecraft:enchanted_golden_apple', 1)


	  armorBurning('minecraft:diamond', 'minecraft:diamond_helmet', 1)
	  armorBurning('minecraft:diamond', 'minecraft:diamond_chestplate', 2)
	  armorBurning('minecraft:diamond', 'minecraft:diamond_leggings', 2)
	  armorBurning('minecraft:diamond', 'minecraft:diamond_boots', 1)
	  armorBurning('minecraft:diamond', 'minecraft:diamond_sword', 1)
	  armorBurning('kubejs:diamond_shard', 'minecraft:diamond_shovel', 4)
	  armorBurning('minecraft:diamond', 'minecraft:diamond_pickaxe', 1)
	  armorBurning('minecraft:diamond', 'minecraft:diamond_axe', 1)
	  armorBurning('minecraft:diamond', 'minecraft:diamond_hoe', 1)
	  armorBurning('minecraft:diamond', 'minecraft:diamond_horse_armor', 1)

	  armorBurning('minecraft:copper_ingot', 'treeaxe:copper_treeaxe', 3)
	  armorBurning('minecraft:gold_ingot', 'treeaxe:gold_treeaxe', 3)
	  armorBurning('minecraft:iron_ingot', 'treeaxe:iron_treeaxe', 3)
	  armorBurning('minecraft:emerald', 'treeaxe:emerald_treeaxe', 3)
	  armorBurning('minecraft:diamond', 'treeaxe:diamond_treeaxe', 3)

	  armorBurning('minecraft:leather', 'minecraft:leather_helmet', 1)
	  armorBurning('minecraft:leather', 'minecraft:leather_chestplate', 2)
	  armorBurning('minecraft:leather', 'minecraft:leather_leggings', 2)
	  armorBurning('minecraft:leather', 'minecraft:leather_boots', 1)

	  armorBurning('minecraft:iron_ingot', 'minecraft:chainmail_helmet', 1)
	  armorBurning('minecraft:iron_ingot', 'minecraft:chainmail_chestplate', 2)
	  armorBurning('minecraft:iron_ingot', 'minecraft:chainmail_leggings', 2)
	  armorBurning('minecraft:iron_ingot', 'minecraft:chainmail_boots', 1)


	  armorBurning('minecraft:iron_ingot','gateofbabylon:iron_dagger', 1)
	  armorBurning('minecraft:iron_ingot','gateofbabylon:iron_spear', 1)
	  armorBurning('minecraft:iron_ingot','gateofbabylon:iron_broadsword', 2)
	  armorBurning('minecraft:iron_ingot','gateofbabylon:iron_rapier', 1)
	  armorBurning('minecraft:iron_ingot','gateofbabylon:iron_haladie', 1)
	  armorBurning('minecraft:iron_ingot','gateofbabylon:iron_waraxe', 1)
	  armorBurning('minecraft:iron_ingot','gateofbabylon:iron_katana', 1)
	  armorBurning('minecraft:iron_ingot','gateofbabylon:iron_bow', 1)
	  armorBurning('minecraft:iron_ingot','gateofbabylon:iron_shield', 2)
	  armorBurning('minecraft:iron_ingot','gateofbabylon:iron_boomerang', 2)

	  armorBurning('minecraft:gold_ingot','gateofbabylon:golden_dagger', 1)
	  armorBurning('minecraft:gold_ingot','gateofbabylon:golden_spear', 1)
	  armorBurning('minecraft:gold_ingot','gateofbabylon:golden_broadsword', 2)
	  armorBurning('minecraft:gold_ingot','gateofbabylon:golden_rapier', 1)
	  armorBurning('minecraft:gold_ingot','gateofbabylon:golden_haladie', 1)
	  armorBurning('minecraft:gold_ingot','gateofbabylon:golden_waraxe', 1)
	  armorBurning('minecraft:gold_ingot','gateofbabylon:golden_katana', 1)
	  armorBurning('minecraft:gold_ingot','gateofbabylon:golden_bow', 1)
	  armorBurning('minecraft:gold_ingot','gateofbabylon:golden_shield', 2)
	  armorBurning('minecraft:gold_ingot','gateofbabylon:golden_boomerang', 2)

	  armorBurning('minecraft:diamond','gateofbabylon:diamond_dagger', 1)
	  armorBurning('minecraft:diamond','gateofbabylon:diamond_spear', 1)
	  armorBurning('minecraft:diamond','gateofbabylon:diamond_broadsword', 1)
	  armorBurning('minecraft:diamond','gateofbabylon:diamond_rapier', 1)
	  armorBurning('minecraft:diamond','gateofbabylon:diamond_haladie', 1)
	  armorBurning('minecraft:diamond','gateofbabylon:diamond_waraxe', 1)
	  armorBurning('minecraft:diamond','gateofbabylon:diamond_katana', 1)
	  armorBurning('minecraft:diamond','gateofbabylon:diamond_bow', 1)
	  armorBurning('minecraft:diamond','gateofbabylon:diamond_shield', 2)
	  armorBurning('minecraft:diamond','gateofbabylon:diamond_boomerang', 2)

	  multiSmelt('minecraft:netherite_scrap','gateofbabylon:netherite_dagger',true)
	  multiSmelt('minecraft:netherite_scrap','gateofbabylon:netherite_spear',true)
	  multiSmelt('minecraft:netherite_scrap','gateofbabylon:netherite_broadsword',true)
	  multiSmelt('minecraft:netherite_scrap','gateofbabylon:netherite_rapier',true)
	  multiSmelt('minecraft:netherite_scrap','gateofbabylon:netherite_haladie',true)
	  multiSmelt('minecraft:netherite_scrap','gateofbabylon:netherite_waraxe',true)
	  multiSmelt('minecraft:netherite_scrap','gateofbabylon:netherite_katana',true)
	  multiSmelt('minecraft:netherite_scrap','gateofbabylon:netherite_bow',true)
	  multiSmelt('minecraft:netherite_scrap','gateofbabylon:netherite_shield',true)
	  multiSmelt('minecraft:netherite_scrap','gateofbabylon:netherite_boomerang',true)


	  multiSmelt('minecraft:netherite_scrap','treeaxe:netherite_treeaxe',true)


	  event.shapeless('9x kubejs:diamond_shard', ['minecraft:diamond'])
	  event.shaped('minecraft:diamond', [
		'SSS',
		'SSS',
		'SSS'
	  ], {
		S: 'kubejs:diamond_shard'
	  })

	  event.shaped('kubejs:golden_star', [
		'ABA',
		'BCB',
		'ABA'
	  ], {
		A: 'betternether:cincinnasite_forged',
		B:'minecraft:gold_block',
		C:'minecraft:nether_star'
	  })

	  event.shaped('kubejs:shining_star2', [
		'   ',
		'ABC',
		'   '
	  ], {
		A:'kubejs:obsidian_cutter',
		B:'kubejs:golden_star',
		C:'bosses_of_mass_destruction:void_thorn'
	  })

	  event.shaped('kubejs:obsidian_cutter', [
		' DA',
		' BD',
		'C  '
	  ], {
		A:'bosses_of_mass_destruction:obsidian_heart',
		B:'adventurez:stone_golem_arm',
		C:'bosses_of_mass_destruction:blazing_eye',
		D:'minecraft:obsidian'
	  })

	  armorBurning('minecraft:emerald', 'emeraldequipment:emerald_helmet', 1)
	  armorBurning('minecraft:emerald', 'emeraldequipment:emerald_chestplate', 2)
	  armorBurning('minecraft:emerald', 'emeraldequipment:emerald_leggings', 2)
	  armorBurning('minecraft:emerald', 'emeraldequipment:emerald_boots', 1)
	  armorBurning('minecraft:emerald', 'emeraldequipment:emerald_sword', 1)
	  armorBurning('emeraldequipment:emerald_shard', 'emeraldequipment:emerald_shovel', 4)
	  armorBurning('minecraft:emerald', 'emeraldequipment:emerald_pick', 1)
	  armorBurning('minecraft:emerald', 'emeraldequipment:emerald_axe', 1)
	  armorBurning('minecraft:emerald', 'emeraldequipment:emerald_hoe', 1)
	  armorBurning('minecraft:emerald', 'emeraldequipment:emerald_horse_armor', 1)

	  armorBurning('minecraft:copper_ingot', 'copperequipment:copper_helmet', 1)
	  armorBurning('minecraft:copper_ingot', 'copperequipment:copper_chestplate', 2)
	  armorBurning('minecraft:copper_ingot', 'copperequipment:copper_leggings', 2)
	  armorBurning('minecraft:copper_ingot', 'copperequipment:copper_boots', 1)
	  armorBurning('minecraft:copper_ingot', 'copperequipment:copper_sword', 1)
	  armorBurning('copperequipment:copper_nugget', 'copperequipment:copper_shovel', 4)
	  armorBurning('minecraft:copper_ingot', 'copperequipment:copper_pick', 1)
	  armorBurning('minecraft:copper_ingot', 'copperequipment:copper_axe', 1)
	  armorBurning('minecraft:copper_ingot', 'copperequipment:copper_hoe', 1)
	  armorBurning('minecraft:copper_ingot', 'copperequipment:copper_horse_armor', 1)

	  event.shaped('minecraft:bone', [
		'SS',
		'S ',
		'S '
	  ], {
		S: 'minecraft:bone_meal'
	  }).id('infinity:bone_meal')

	  event.shapeless('minecraft:flint', ['minecraft:gravel','minecraft:gravel','minecraft:gravel'])
})

