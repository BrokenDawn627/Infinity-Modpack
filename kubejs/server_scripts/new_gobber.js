onEvent('recipes', event => {
event.remove({output:'gobber2:gobber2_ring_ascent'})
event.remove({output:'gobber2:gobber2_ring_swiftness'})
event.remove({output:'gobber2:gobber2_ring_above'})
event.remove({output:'gobber2:gobber2_ring'})
event.remove({output:'gobber2:gobber2_ring_farmer'})
event.remove({output:'gobber2:gobber2_ring_sunshine'})

event.remove({output:'gobber2:gobber2_helmet'})
event.remove({output:'gobber2:gobber2_chestplate'})
event.remove({output:'gobber2:gobber2_leggings'})
event.remove({output:'gobber2:gobber2_boots'})

event.remove({output:'gobber2:gobber2_helmet_nether'})
event.remove({output:'gobber2:gobber2_chestplate_nether'})
event.remove({output:'gobber2:gobber2_leggings_nether'})
event.remove({output:'gobber2:gobber2_boots_nether'})


event.remove({output:'gobber2:gobber2_medallion_hero'})
event.remove({output:'gobber2:gobber2_medallion_healing'})

event.remove({output:'gobber2:gobber2_medallion'})
event.remove({output:'gobber2:gobber2_medallion_breathing'})
event.remove({id:'gobber2:gobber2_medallion_healing3'})

  event.custom({
     type: 'alloy_forgery:forging',
     'inputs': [
       {
         'item':'gobber2:gobber2_ingot'
       } 
     ],
     'output': {
       'id': 'gobber2:gobber2_ring',
       'count': 1
     },
     'min_forge_tier': 2,
     'fuel_per_tick': 50
   })

 event.shaped(Item.of('gobber2:gobber2_ring_farmer'),[
    'ABC',
    'DEF',
    'GHI'
],{
    A:'betternether:black_apple',
    B:'minecraft:glow_berries',
    C:'minecraft:carrot',
    D:'minecraft:sweet_berries',
    E:'gobber2:gobber2_ring',
    F:'minecraft:wheat_seeds',
    G:'minecraft:sugar_cane',
    H:'minecraft:kelp',
    I:'minecraft:beetroot'
 })

 event.shaped(Item.of('gobber2:gobber2_ring_sunshine'),[
    'CBC',
    'CDC',
    'CAC'
],{
    A:'minecraft:glowstone',
    B:'minecraft:trident',
    C:'minecraft:fire_charge',
    D:'gobber2:gobber2_ring'
 })

 event.shaped(Item.of('gobber2:gobber2_ring_return'),[
    'ACA',
    'ADA',
    'ABA'
],{
    A:'minecraft:ender_pearl',
    B:'minecraft:respawn_anchor',
    C:'#minecraft:beds',
    D:'gobber2:gobber2_ring'
 })

 event.shaped(Item.of('gobber2:gobber2_ring_ascent'),[
  'ACA',
  'EDE',
  'ABA'
],{
  A:'minecraft:chorus_fruit',
  B:'minecraft:diamond',
  C:'minecraft:shulker_shell',
  D:'gobber2:gobber2_ring',
  E:'gobber2:gobber2_glass'
})

  event.custom({
     type: 'alloy_forgery:forging',
     'inputs': [
       {
         'item':'gobber2:gobber2_ingot'
       },
       {
        'item':'gobber2:gobber2_ingot'
      } 
      ],
     'output': {
       'id': 'gobber2:gobber2_medallion',
       'count': 1
     },
     'min_forge_tier': 2,
     'fuel_per_tick': 50
   })

 event.shaped(Item.of('gobber2:gobber2_medallion_breathing'),[
    'ABA',
    'ACA',
    'ABA'
],{
    A:'environmentz:polar_bear_fur',
    B:'minecraft:pufferfish',
    C:'gobber2:gobber2_medallion'
})

})
//Gobber ring and medallion

onEvent('recipes', event => {
  event.remove({output:'gobber2:gobber2_medallion_nether'})
  event.remove({output:'gobber2:gobber2_medallion_healing2'})

  event.remove({output:'gobber2:gobber2_ring_airwalking'})
  event.remove({output:'gobber2:gobber2_ring_nether'})
  event.remove({output:'gobber2:gobber2_ring_strength'})
  event.remove({output:'gobber2:gobber2_ring_luck'})

  event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
      {
        'item':'gobber2:gobber2_ingot_nether'
      } 
    ],
    'output': {
      'id': 'gobber2:gobber2_ring_nether',
      'count': 1
    },
    'min_forge_tier': 2,
    'fuel_per_tick': 70
  })
  
  event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
      {
        'item':'gobber2:gobber2_ingot_nether'
      }, 
      {
        'item':'gobber2:gobber2_ingot_nether'
      }
    ],
    'output': {
      'id': 'gobber2:gobber2_medallion_nether',
      'count': 1
    },
    'min_forge_tier': 2,
    'fuel_per_tick': 70
  })

  event.shaped(Item.of('gobber2:gobber2_ring_luck'),[
    'AAA',
    'ABA',
    'AAA'
],{
    A:'things:luck_of_the_irish',
    B:'gobber2:gobber2_ring_nether'
  })
})
//Nether Ring and Medallion


onEvent('recipes', event => {
  event.remove({output:'gobber2:gobber2_links_end'})
  event.remove({output:'gobber2:gobber2_helmet_end'})
  event.remove({output:'gobber2:gobber2_chestplate_end'})
  event.remove({output:'gobber2:gobber2_leggings_end'})
  event.remove({output:'gobber2:gobber2_boots_end'})


  event.remove({output:'gobber2:gobber2_ring_end'})
  event.remove({output:'gobber2:gobber2_ring_dismissal'})
  event.remove({output:'gobber2:gobber2_ring_stealth'})
  event.remove({output:'gobber2:gobber2_ring_explorer'})
  event.remove({output:'gobber2:gobber2_ring_blink'})
  event.remove({output:'gobber2:gobber2_ring_teleport'})

  event.remove({output:'gobber2:gobber2_medallion_end'})
  event.remove({output:'gobber2:gobber2_boots_end'})
  event.remove({output:'gobber2:gobber2_boots_end'})
  event.remove({output:'gobber2:gobber2_boots_end'})

  event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
      {
        'item':'gobber2:gobber2_ingot_end'
      } 
    ],
    'output': {
      'id': 'gobber2:gobber2_ring_end',
      'count': 1
    },
    'min_forge_tier': 3,
    'fuel_per_tick': 100
  })

  event.shaped(Item.of('gobber2:gobber2_ring_blink'),[
    'BAB',
    'BCB',
    'DDD'
],{
    A:'#hookshot:hookshots',
    B:'minecraft:ender_eye',
    C:'gobber2:gobber2_ring_end',
    D:'minecraft:ender_pearl'
  })

  event.shaped(Item.of('gobber2:gobber2_ring_teleport'),[
    'BBB',
    'ACD',
    'BBB'
],{
    A:'waystones:waystone',
    B:'waystones:warp_dust',
    C:'gobber2:gobber2_ring_end',
    D:'waystones:warp_scroll'
  })

  event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
      {
        'item':'gobber2:gobber2_ingot_end'
      }, 
      {
        'item':'gobber2:gobber2_ingot_end'
      }
    ],
    'output': {
      'id': 'gobber2:gobber2_medallion_end',
      'count': 1
    },
    'min_forge_tier': 2,
    'fuel_per_tick': 70
  })

})