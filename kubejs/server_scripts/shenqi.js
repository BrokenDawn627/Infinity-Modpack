onEvent('recipes', event => {
    event.shaped('kubejs:shenqi_ingot', [
        'SSS',
        'SSS',
        'SSS'
    ], {
        S: 'kubejs:shenqi_shard'
    })
    event.shaped('kubejs:shenqi_random', [
        'SSS',
        'SSS',
        'SSS'
    ], {
        S: 'kubejs:shenqi_ingot'
    })
})

onEvent('item.right_click', event => {
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:shenqi_random') {

        chance=randomNum(1,2)
        if(chance==1)
        {
            event.player.give('kubejs:qixing')
            event.player.mainHandItem.count -= 1
        }
        if(chance==2)
        {
            event.player.give('kubejs:yecao')
            event.player.mainHandItem.count -= 1
        }
    }
})