onEvent('item.modification', event => {
    event.modify('minecraft:milk_bucket', item => {
      item.maxStackSize = 8
    })
})
