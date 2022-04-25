onEvent('item.registry', event => {
	event.create('nightbreak', item => {
		item.tooltip(Text.of('§7你是怎么发现我的？'))
	})
})