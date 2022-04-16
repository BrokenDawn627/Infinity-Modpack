onEvent('recipes', event => {


    event.shapeless('ringsofascension:ring_dolphin', ['gobber2:gobber2_ring','victus:ocean_heart_aspect','things:bater_wucket'])
    
    event.shapeless('ringsofascension:ring_fire_resistance', ['gobber2:gobber2_ring_nether','adventurez:stone_golem_heart'])

    event.shaped('ringsofascension:ring_invisibility', [
		'   ',
		'BAB',
		'   '
	  ], {
		A: 'gobber2:gobber2_ring',
        B: 'mcda:upgrade_core_shadows'
	  })

      event.shaped('ringsofascension:ring_jump_boost', [
		' B ',
		'BAB',
		' B '
	  ], {
		A: 'gobber2:gobber2_ring',
        B: 'minecraft:rabbit_foot'
	  })

      event.shaped('ringsofascension:ring_luck', [
		' B ',
		'BAB',
		' B '
	  ], {
		A: 'gobber2:gobber2_ring_end',
        B: 'mcda:upgrade_core_highland'
	  })

      event.shapeless('ringsofascension:ring_mining', ['gobber2:gobber2_ring','mcda:upgrade_core_golden','mcda:upgrade_core_depth'])

      event.shaped('ringsofascension:ring_night_vision', [
		' C ',
		'BAB',
		' C '
	  ], {
		A: 'gobber2:gobber2_ring',
        B: 'mcda:upgrade_core_golden',
        C: 'mcda:upgrade_core_void'
	  })

      event.shapeless('ringsofascension:ring_regeneration', ['gobber2:gobber2_ring_nether','mcda:upgrade_core_depth','minecraft:enchanted_golden_apple','victus:golden_heart_aspect'])

      event.shapeless('ringsofascension:ring_slow_falling', ['gobber2:gobber2_ring_end','mcda:upgrade_core_depth','victus:light_heart_aspect'])

      event.shaped('ringsofascension:ring_speed', [
		'BCB',
		'BAB',
		'BCB'
	  ], {
		A: 'gobber2:gobber2_ring',
        B: 'minecraft:sugar',
        C: 'mcda:upgrade_core_ember'
	  })

      event.shapeless('ringsofascension:ring_strength', ['gobber2:gobber2_ring_nether','mcdw:sword_heartstealer','gobber2:gobber2_sword'])

      event.shaped('ringsofascension:ring_water_breathing', [
		' C ',
		'BAB',
		' D '
	  ], {
		A: 'gobber2:gobber2_ring',
        B: 'mcda:upgrade_core_oceanic',
        C: 'mcda:upgrade_core_depth',
        D: 'minecraft:heart_of_the_sea'
	  })

      event.shaped('ringsofascension:ring_slow_resistance', [
		' C ',
		'BAD',
		' E '
	  ], {
		A: 'gobber2:gobber2_ring',
        B: 'mcda:upgrade_core_spider',
        C: 'mcda:upgrade_core_soul',
        D: 'mcda:upgrade_core_magicked',
        E: 'mcda:upgrade_core_ember'
	  })

      event.shapeless('ringsofascension:ring_poison_resistance', ['gobber2:gobber2_ring_end','bosses_of_mass_destruction:void_lily','bosses_of_mass_destruction:void_thorn'])

      event.shaped('ringsofascension:ring_wither', [
		' B ',
		'CAD',
		' E '
	  ], {
		A: 'gobber2:gobber2_ring_nether',
        B: 'minecraft:experience_bottle',
        C: 'mcda:upgrade_core_soul',
        D: 'mcda:upgrade_core_wither',
        E: 'minecraft:nether_star'
	  })

      event.shapeless('ringsofascension:ring_magnetism', ['gobber2:gobber2_ring','mcda:upgrade_core_metal','things:item_magnet'])

      event.shaped('ringsofascension:ring_flight', [
		'ECE',
		'BAB',
		'ECE'
	  ], {
		A: 'gobber2:gobber2_ring_ascent',
        B: 'minecraft:elytra',
        C: 'bosses_of_mass_destruction:ancient_anima',
        E: 'dragonloot:dragon_scale'
	  })

      event.shaped('ringsofascension:ring_experience', [
		'BBB',
		'BAB',
		'BBB'
	  ], {
		A: 'gobber2:gobber2_ring',
        B: 'minecraft:experience_bottle'
	  })

      event.shaped('ringsofascension:ring_health', [
		'BBB',
		'BAB',
		'BBB'
	  ], {
		A: 'gobber2:gobber2_ring_end',
        B: 'heartytrinkets:orange_heart_canister'
	  })

      event.shaped('ringsofascension:ring_undying', [
		'   ',
		'BAB',
		'   '
	  ], {
		A: 'gobber2:gobber2_ring_end',
        B: 'minecraft:totem_of_undying'
	  })

      event.shaped('ringsofascension:ring_sponge', [
		'BCB',
		'BAB',
		' B '
	  ], {
		A: 'gobber2:gobber2_ring',
        B: 'minecraft:sponge',
        C: 'things:bater_wucket'
	  })

      event.shapeless('ringsofascension:ring_water_walking', ['gobber2:gobber2_ring','mcda:upgrade_core_frost','mcda:upgrade_core_oceanic'])

      event.shapeless('ringsofascension:ring_knockback_resistance', ['gobber2:gobber2_ring','mcda:upgrade_core_metal','mcda:upgrade_core_depth'])

      event.shapeless('ringsofascension:ring_hungerless', ['gobber2:gobber2_ring_nether','minecraft:enchanted_golden_apple','heartytrinkets:amethyst_apple','bosses_of_mass_destruction:void_thorn'])

      event.shapeless('ringsofascension:ring_growth', ['gobber2:gobber2_ring_nether','mcda:upgrade_core_glut'])
})