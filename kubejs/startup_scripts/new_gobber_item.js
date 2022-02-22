onEvent('item.registry', event => {
	event.create('gobber2_helmet', item => {
		item.displayName('戈伯头盔基底')
    })

    event.create('gobber2_chestplate', item => {
        item.displayName('戈伯胸甲基底')
    })

    event.create('gobber2_leggings', item => {
        item.displayName('戈伯护腿基底')
    })

    event.create('gobber2_boots', item => {
        item.displayName('戈伯靴子基底')
    })

})

onEvent('item.registry', event => {
	event.create('gobber2_helmet_nether', item => {
		item.displayName('下界戈伯头盔基底')
    })
 
    event.create('gobber2_chestplate_nether', item => {
		item.displayName('下界戈伯胸甲基底')
    })

    event.create('gobber2_leggings_nether', item => {
		item.displayName('下界戈伯护腿基底')
    })

    event.create('gobber2_boots_nether', item => {
		item.displayName('下界戈伯靴子基底')
    })


})

onEvent('item.registry', event => {
	event.create('gobber2_helmet_end', item => {
		item.displayName('末影戈伯头盔基底')
    })
 
    event.create('gobber2_chestplate_end', item => {
		item.displayName('末影戈伯胸甲基底')
    })

    event.create('gobber2_leggings_end', item => {
		item.displayName('末影戈伯护腿基底')
    })

    event.create('gobber2_boots_end', item => {
		item.displayName('末影戈伯靴子基底')
    })

  })

onEvent('item.registry', event => {
	event.create('gobber_plate', item => {
		item.displayName('戈伯板')
    })

    event.create('nether_gobber_plate', item => {
		item.displayName('下界戈伯板')
    })

    event.create('end_gobber_plate', item => {
      item.displayName('末影戈伯板')
      })

    event.create('gobber_wire', item => {
		item.displayName('戈伯线')
    })

    event.create('nether_gobber_wire', item => {
		item.displayName('下界戈伯线')
  })

   event.create('end_gobber_wire', item => {
		item.displayName('末影戈伯线')
  })

})
