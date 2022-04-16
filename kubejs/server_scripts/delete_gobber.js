onEvent('recipes', event => {
  event.custom({
     type: 'alloy_forgery:forging',
     'inputs': [
       {
         'item':'kubejs:gobber_wire'
       },
       {
         'item':'kubejs:gobber_wire'
       },
       {
          'item':'kubejs:gobber_wire'
        },
        {
          'item':'kubejs:gobber_wire'
        }
     ],
     'output': {
       'id': 'gobber2:gobber2_glob',
       'count': 2
     },
     'min_forge_tier': 1,
     'fuel_per_tick': 1
   })

   event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
      {
        'item':'kubejs:nether_gobber_wire'
      },
      {
        'item':'kubejs:nether_gobber_wire'
      },
      {
         'item':'kubejs:nether_gobber_wire'
       },
       {
         'item':'kubejs:nether_gobber_wire'
       }
    ],
    'output': {
      'id': 'gobber2:gobber2_glob_nether',
      'count': 2
    },
    'min_forge_tier': 1,
    'fuel_per_tick': 1
  })

  event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
      {
        'item':'kubejs:end_gobber_wire'
      },
      {
        'item':'kubejs:end_gobber_wire'
      },
      {
         'item':'kubejs:end_gobber_wire'
       },
       {
         'item':'kubejs:end_gobber_wire'
       }
    ],
    'output': {
      'id': 'gobber2:gobber2_glob_end',
      'count': 2
    },
    'min_forge_tier': 1,
    'fuel_per_tick': 1
  })
  //戈伯线回收
})

onEvent('recipes', event => {
  event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
      {
        'item':'kubejs:gobber_plate'
      },
      {
        'item':'kubejs:gobber_plate'
      },
      {
         'item':'kubejs:gobber_plate'
       },
       {
         'item':'kubejs:gobber_plate'
       }
    ],
    'output': {
      'id': 'gobber2:gobber2_ingot',
      'count': 2
    },
    'min_forge_tier': 1,
    'fuel_per_tick': 1
})
event.custom({
  type: 'alloy_forgery:forging',
  'inputs': [
    {
      'item':'kubejs:nether_gobber_plate'
    },
    {
      'item':'kubejs:nether_gobber_plate'
    },
    {
       'item':'kubejs:nether_gobber_plate'
     },
     {
       'item':'kubejs:nether_gobber_plate'
     }
  ],
  'output': {
    'id': 'gobber2:gobber2_ingot_nether',
    'count': 2
  },
  'min_forge_tier': 1,
  'fuel_per_tick': 1
})

event.custom({
  type: 'alloy_forgery:forging',
  'inputs': [
    {
      'item':'kubejs:end_gobber_plate'
    },
    {
      'item':'kubejs:end_gobber_plate'
    },
    {
       'item':'kubejs:end_gobber_plate'
     },
     {
       'item':'kubejs:end_gobber_plate'
     }
  ],
  'output': {
    'id': 'gobber2:gobber2_ingot_end',
    'count': 2
  },
  'min_forge_tier': 1,
  'fuel_per_tick': 1
})
//戈伯板回收
})