onEvent('recipes', event => {
    
    event.shaped('bosses_of_mass_destruction:soul_star', [
		' S ',
		'SDS',
		' S '
	  ], {
		S: 'minecraft:diamond',
        D: 'minecraft:ender_eye'
	  }).id('infinity:soul_star')

    event.shaped('victus:blank_heart_aspect', [
		'DSD',
		'SAS',
		'DSD'
	  ], {
		S: 'minecraft:amethyst_shard',
        D: 'minecraft:gold_ingot',
		A: 'minecraft:experience_bottle'
	  }).id('infinity:blank')
	
	  event.shaped('victus:void_heart_aspect', [
		'SSS',
		'SDS',
		'SSS'
	  ], {
		S: 'copperequipment:copper_nugget',
        D: 'victus:blank_heart_aspect'
	  }).id('infinity:void')

	  event.shapeless('victus:broken_heart', ['victus:void_heart_aspect','minecraft:netherite_axe']).id('infinity:broken')

	  event.shaped('minecraft:dragon_egg', [
		'SSS',
		'SDS',
		'SSS'
	  ], {
		S: 'dragonloot:dragon_scale',
        D: 'minecraft:dragon_head'
	  })

	  event.remove({mod: 'heartytrinkets'})

	  event.shaped('heartytrinkets:canister', [
		'SSS',
		'SDS',
		'SSS'
	  ], {
		S: 'minecraft:iron_ingot',
        D: 'victus:blank_heart_aspect'
	  }).id('infinity:canister')

	  event.smithing('heartytrinkets:red_heart_crystal', 'heartytrinkets:red_heart','victus:blank_heart_aspect').id('infinity:red_h_c')
	  event.smithing('heartytrinkets:orange_heart_crystal', 'heartytrinkets:orange_heart','victus:blank_heart_aspect')
	  event.smithing('heartytrinkets:green_heart_crystal', 'heartytrinkets:green_heart','victus:blank_heart_aspect')
	  event.smithing('heartytrinkets:blue_heart_crystal', 'heartytrinkets:blue_heart','victus:blank_heart_aspect')

	  event.smithing('heartytrinkets:red_heart_canister', 'heartytrinkets:red_heart_crystal','heartytrinkets:canister').id('infinity:red_h_cc')
	  event.smithing('heartytrinkets:orange_heart_canister', 'heartytrinkets:orange_heart_crystal','heartytrinkets:canister')
	  event.smithing('heartytrinkets:green_heart_canister', 'heartytrinkets:green_heart_crystal','heartytrinkets:canister')
	  event.smithing('heartytrinkets:blue_heart_canister', 'heartytrinkets:blue_heart_crystal','heartytrinkets:canister')

	  event.shaped('heartytrinkets:canister_belt', [
		'SSS',
		'SDS',
		'SSS'
	  ], {
		S: 'minecraft:leather',
        D: 'victus:blank_heart_aspect'
	  }).id('infinity:health_belt')

	  event.shaped('heartytrinkets:orange_heart', [
		'SAS',
		'SDS',
		'SAS'
	  ], {
		S: 'minecraft:netherite_ingot',
        D: 'betternether:nether_ruby',
		A: 'heartytrinkets:red_heart'
	  })

	  event.shaped('heartytrinkets:green_heart', [
		'SAS',
		'SDS',
		'SAS'
	  ], {
		S: 'mobz:boss_ingot',
        D: 'betterend:eternal_crystal',
		A: 'heartytrinkets:orange_heart'
	  })

	  event.shaped('heartytrinkets:blue_heart', [
		'SAB',
		' D ',
		'CAE'
	  ], {
		S: 'victus:lapis_heart_aspect',
        D: 'victus:broken_heart',
		A: 'heartytrinkets:green_heart',
		B: 'victus:ocean_heart_aspect',
		C: 'victus:diamond_heart_aspect',
		E: 'victus:icy_heart_aspect'

	  })

	  event.shaped('minecraft:wither_skeleton_skull', [
		'SSS',
		'SDS',
		'SSS'
	  ], {
		S: 'heartytrinkets:wither_rib',
        D: 'minecraft:skeleton_skull'
	  })

	  event.shaped('heartytrinkets:amethyst_apple', [
		'SSS',
		'SDS',
		'SSS'
	  ], {
		S: 'minecraft:golden_apple',
        D: 'betternether:black_apple'
	  })


	  event.smithing('kubejs:shining_star', 'kubejs:shining_star2','adventurez:source_stone').id('infinity:shining_star')

	  event.shaped('heartytrinkets:red_heart', [
		'SSS',
		'SDS',
		'SSS'
	  ], {
		S: 'minecraft:redstone_block',
        D: 'victus:blank_heart_aspect'
	  }).id('infinity:red_heart')

	  event.shapeless('minecraft:powder_snow_bucket', ['minecraft:bucket','minecraft:snow_block'])

	  event.shaped('5x minecraft:experience_bottle', [
		'SDS',
		'DDD',
		'SDS'
	  ], {
		S: 'minecraft:redstone_block',
        D: 'minecraft:glass_bottle'
	  }).id('infinity:experience_bottle')


	  event.shapeless('kubejs:firecracker', ['minecraft:tnt','minecraft:firework_rocket']).id('infinity:firecracker')

	  event.shapeless('kubejs:skill_bottle', ['minecraft:experience_bottle','minecraft:lapis_lazuli']).id('infinity:skill_bottle')
  })