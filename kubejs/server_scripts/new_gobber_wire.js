onEvent('recipes', event => {
    event.custom({
       type: 'alloy_forgery:forging',
       'inputs': [
         {
           'item':'gobber2:gobber2_glob'
         },
         {
           'item':'gobber2:gobber2_glob'
         },
       ],
       'output': {
         'id': 'kubejs:gobber_wire',
         'count': 4
       },
       'min_forge_tier': 1,
       'fuel_per_tick': 50
     })

     event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
          {
            'item':'gobber2:gobber2_glob_nether'
          },
          {
            'item':'gobber2:gobber2_glob_nether'
          },
        ],
        'output': {
          'id': 'kubejs:nether_gobber_wire',
          'count': 4
        },
        'min_forge_tier': 2,
        'fuel_per_tick': 100
      })

      event.custom({
        type: 'alloy_forgery:forging',
        'inputs': [
          {
            'item':'gobber2:gobber2_glob_end'
          },
          {
            'item':'gobber2:gobber2_glob_end'
          },
        ],
        'output': {
          'id': 'kubejs:end_gobber_wire',
          'count': 4
        },
        'min_forge_tier': 3,
        'fuel_per_tick': 150
      })

})