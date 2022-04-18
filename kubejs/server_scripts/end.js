
onEvent('recipes', event => {

    event.shaped('kubejs:infinity_sword_a', [
        'AB ',
        'CDB',
        'EFA'
      ], {
        A:'mobz:boss_ingot',
        B:'dragonloot:dragon_scale',
        C:'gobber2:dragon_star',
        D:'gobber2:dragon_elytra',
        E:'gobber2:gobber2_sword_sniper',
        F:'bosses_of_mass_destruction:ancient_anima'
      }).id('kubejs:infinity_sword_a')

      event.shaped('kubejs:infinity_sword_b', [
        ' AB',
        'CDE',
        ' C '
      ], {
        A:'botania:terra_sword',
        E:'mythicmetals:metallurgium_sword',
        B:'kubejs:shining_star',
        C:'mythicmetals:celestium_ingot',
        D:'minecraft:dragon_egg'
      }).id('kubejs:infinity_sword_b')


})
