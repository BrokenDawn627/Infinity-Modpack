// priority: 0


onEvent('item.registry', event => {
	event.create('diamond_shard', item => {
		item.displayName('Diamond Shard')
	  })

	  event.create('shining_star', item => {
		item.displayName('§6Shining Star').tooltip('§7Leftclick any block to reset the difficulty.')
	  })
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})