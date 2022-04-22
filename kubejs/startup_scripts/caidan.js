
onEvent('item.registry', event => {
    event.create('nightbreak', item => {
		item.displayName('§6§l作者的头像').tooltip(Text.of('§7你是怎么发现我的？'))
	  })
})