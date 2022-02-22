onEvent('recipes', event => {
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
                'item':'kubejs:balloon_ingot'
              },
            ],
            'output': {
              'id': 'kubejs:gobber_plate',
              'count': 4
            },
            'min_forge_tier': 1,
            'fuel_per_tick': 65
          })

          event.custom({
            type: 'alloy_forgery:forging',
            'inputs': [
              {
                'item':'gobber2:gobber2_ingot_nether'
              },
              {
                'item':'gobber2:gobber2_ingot_nether'
              },
              {
                'item':'kubejs:auritis_ingot'
              },
            ],
            'output': {
              'id': 'kubejs:nether_gobber_plate',
              'count': 4
            },
            'min_forge_tier': 2,
            'fuel_per_tick': 150
          })

          event.custom({
            type: 'alloy_forgery:forging',
            'inputs': [
              {
                'item':'gobber2:gobber2_ingot_end'
              },
              {
                'item':'gobber2:gobber2_ingot_end'
              },
              {
                'item':'kubejs:eden_ingot'
              },
            ],
            'output': {
              'id':'kubejs:end_gobber_plate',
              'count': 4
            },
            'min_forge_tier': 3,
            'fuel_per_tick': 200
          })
        })

 onEvent('recipes', event => {
        event.shaped(Item.of('interactic:item_filter'), [
              'A A',
              'A A',
              ' A '
            ], {
              A:'creeperoverhaul:tiny_cactus',
         })

         event.shaped(Item.of('kubejs:dummy_fluid_item'), [
          'A A',
          'A A',
          ' A '
        ], {
          A:'betterend:end_fish_cooked',
     })
    })