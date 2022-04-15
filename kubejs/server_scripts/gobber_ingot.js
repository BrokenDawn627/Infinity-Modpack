onEvent('recipes', event => {
    event.custom({
       type: 'alloy_forgery:forging',
       'inputs': [
         {
           'item':'gobber2:gobber2_glob'
         },
         {
           'item':'minecraft:diamond'
         },
         {
          'item':'kubejs:gravilite_ingot'
        },
         {
           'item':'minecraft:gold_ingot'
         },
         {
            'item':'minecraft:iron_ingot'
          },
       ],
       'output': {
         'id': 'gobber2:gobber2_ingot',
         'count': 1
       },
       'min_forge_tier': 2,
       'fuel_per_tick': 60
     })

     event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
          {
            'item':'gobber2:gobber2_ingot'
          },
          {
            'item':'gobber2:gobber2_ingot'
          },
          {
            'item':'gobber2:gobber2_glob_nether'
          },
          {
             'item':'minecraft:netherite_scrap'
           },
           {
            'item':'mythicmetals:carmot_ingot'
          },
        ],
        'output': {
          'id': 'gobber2:gobber2_ingot_nether',
          'count': 1
        },
        'min_forge_tier': 2,
        'fuel_per_tick': 80
      })

      event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
          {
            'item':'gobber2:gobber2_glob_end'
          },
          {
            'item':'minecraft:chorus_flower'
          },
          {
            'item':'gobber2:gobber2_ingot_nether'
          },
          {
             'item':'gobber2:gobber2_ingot_nether'
           },
           {
            'item':'minecraft:nether_star'
          },
          {
            'item':'kubejs:eden_ingot'
          },
        ],
        'output': {
          'id': 'gobber2:gobber2_ingot_end',
          'count': 4
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 120
      })

      event.remove({output:'gobber2:gobber2_ingot'})
      event.remove({output:'gobber2:gobber2_ingot_nether'})
      event.remove({output:'gobber2:gobber2_ingot_end'})

    })