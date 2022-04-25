onEvent('item.registry', event => {
	event.create('nightbreak', item => {
		item.tooltip(Text.translate('item.kubejs.nightbreak.tooltip'))
	})
})