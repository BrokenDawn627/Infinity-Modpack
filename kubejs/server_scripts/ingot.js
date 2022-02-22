onEvent('recipes', event => {
event.shapeless('9x gobber2:gobber2_ingot', ['gobber2:gobber2_block'])
event.shapeless('9x gobber2:gobber2_ingot_nether', ['gobber2:gobber2_block_nether'])
event.shapeless('9x gobber2:gobber2_ingot_end', ['gobber2:gobber2_block_end'])

event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
      {
        'item':'edenring:gravilite_shards'
      },
      {
        'item':'edenring:gravilite_shards'
      },
      {
        'item':'edenring:gravilite_shards'
      },
      {
        'item':'edenring:gravilite_shards'
      },
      {
         'item':'minecraft:iron_ingot'
      },
    ],
    'output': {
      'id': 'kubejs:gravilite_ingot',
      'count': 2
    },
    'min_forge_tier': 1,
    'fuel_per_tick': 5
  })

  event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
      {
        'item':'edenring:balloon_mushroom_block'
      },
      {
        'item':'edenring:balloon_mushroom_block'
      },
      {
        'item':'edenring:balloon_mushroom_block'
      },
      {
        'item':'edenring:balloon_mushroom_block'
      },
      {
         'item':'edenring:balloon_mushroom_stem'
      },
    ],
    'output': {
      'id': 'kubejs:balloon_ingot',
      'count': 3
    },
    'min_forge_tier': 1,
    'fuel_per_tick': 2
  })

  event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
      {
        'item':'edenring:auritis_log'
      },
      {
        'item':'edenring:auritis_log'
      },
      {
        'item':'edenring:auritis_log'
      },
      {
        'item':'edenring:auritis_log'
      },
      {
         'item':'edenring:auritis_leaves'
      },
    ],
    'output': {
      'id': 'kubejs:auritis_ingot',
      'count': 2
    },
    'min_forge_tier': 1,
    'fuel_per_tick': 5
  })

  event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
      {
        'item':'edenring:brain_tree_block_copper'
      },
      {
        'item':'edenring:brain_tree_block_copper'
      },
      {
        'item':'edenring:brain_tree_block_copper'
      },
      {
        'item':'edenring:brain_tree_block_copper'
      },
      {
        'item':'edenring:brain_tree_block_copper'
      },
      {
        'item':'edenring:brain_tree_block_copper'
      },
    ],
    'output': {
      'id': 'minecraft:copper_ingot',
      'count': 2
    },
    'min_forge_tier': 2,
    'fuel_per_tick': 5
  })

  event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
      {
        'item':'edenring:brain_tree_block_iron'
      },
      {
        'item':'edenring:brain_tree_block_iron'
      },
      {
        'item':'edenring:brain_tree_block_iron'
      },
      {
        'item':'edenring:brain_tree_block_iron'
      },
      {
        'item':'edenring:brain_tree_block_iron'
      },
      {
        'item':'edenring:brain_tree_block_iron'
      },
    ],
    'output': {
      'id': 'minecraft:iron_ingot',
      'count': 1
    },
    'min_forge_tier': 2,
    'fuel_per_tick': 5
  })

  event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
      {
        'item':'edenring:brain_tree_block_gold'
      },
      {
        'item':'edenring:brain_tree_block_gold'
      },
      {
        'item':'edenring:brain_tree_block_gold'
      },
      {
        'item':'edenring:brain_tree_block_gold'
      },
    ],
    'output': {
      'id': 'minecraft:gold_nugget',
      'count': 6
    },
    'min_forge_tier': 2,
    'fuel_per_tick': 5
  })

  event.custom({
    type: 'alloy_forgery:forging',
    'inputs': [
      {
        'item':'kubejs:balloon_ingot'
      },
      {
        'item':'kubejs:gravilite_ingot'
      },
      {
        'item':'kubejs:auritis_ingot'
      },
    ],
    'output': {
      'id': 'kubejs:eden_ingot',
      'count': 3
    },
    'min_forge_tier': 3,
    'fuel_per_tick': 10
  })

})



