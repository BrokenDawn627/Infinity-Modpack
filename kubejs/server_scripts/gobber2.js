onEvent('recipes', event => {

    event.remove({id:'gobber2:dragon_star'})
    event.remove({id:'bosses_of_mass_destruction:brimstone_nectar'})
    event.remove({id:'gobber2:dragon_elytra'})

    event.shaped('gobber2:dragon_star', [
        'ABA',
        'CDC',
        'ECE'
      ], {
        A:'bosses_of_mass_destruction:ancient_anima',
        B:'bosses_of_mass_destruction:blazing_eye',
        C:'mythicmetals:celestium_ingot',
        D:'minecraft:nether_star',
        E:'minecraft:dragon_egg'

      }).id('infinity:dragon_star')

    
      event.shaped('gobber2:dragon_elytra', [
        'ABA',
        'CDC',
        'ECE'
      ], {
        A:'bosses_of_mass_destruction:void_thorn',
        B:'bosses_of_mass_destruction:blazing_eye',
        C:'mythicmetals:celestium_ingot',
        D:'betterend:elytra_crystalite',
        E:'minecraft:dragon_egg'

      }).id('infinity:dragon_elytra')

      event.shapeless('bosses_of_mass_destruction:brimstone_nectar',['mythicmetals:unobtainium','mythicmetals:hallowed_ingot','gobber2:gobber2_ingot_nether','minecraft:honeycomb'])

})