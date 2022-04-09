onEvent('recipes', event => {
    
    event.custom({
        type: 'lychee:item_burning',
        item_in:{
            tag:'logs_that_burn'
        },
        post:{
            type:'drop_item',
            item:'charcoal'
        }
      })
    
    event.custom({
        type: 'lychee:item_burning',
        item_in:{
            tag:'c:flesh'
        },
        post:{
            type:'drop_item',
            item:'minecraft:leather'
        }
      })

      event.custom({
        type: 'lychee:item_burning',
        item_in:{
            item:'minecraft:saddle'
        },
        post:{
            type:'drop_item',
            item:'minecraft:leather',
            count:3
        }
      })


      event.custom({
        type: 'lychee:item_burning',
        item_in:{
            item:'minecraft:stick'
        },
        post:{
            type:'drop_item',
            item:'minecraft:torch'
        }
      })

      event.custom({
        type: 'lychee:item_inside',
        item_in:{
            item:'minecraft:bucket'
        },
        block_in:{
            blocks:['water_cauldron'],
            state:{
                level:3
            }
        },
        post:[{
            type:'drop_item',
            item:'water_bucket'
        },
        {
            type:'place',
            block:'cauldron'

        }]
      })

      event.custom({
        type: 'lychee:block_interacting',
        item_in:{
            item:'kubejs:red_packet'
        },
        block_in:'*',
        post:[{
            type:'drop_item',
            item:'numismatic-overhaul:gold_coin',
            count:8,
        },
        {
            type:'drop_item',
            item:'numismatic-overhaul:gold_coin',
            count:88,
            "contextual": {
                "type": "chance",
                "chance": 0.01
            }
        }
    ]
      })

      event.custom({
        type: 'lychee:block_interacting',
        item_in:{
            item:'kubejs:firecracker'
        },
        block_in:'*',
        post:{
            type:'execute',
            command:'/summon minecraft:tnt ~ ~ ~ {Fuse:60}'
        }
      })



  })

  onEvent('item.right_click', event => {
    if ( event.player.getHeldItem(MAIN_HAND) == 'kubejs:skill_bottle')
           {
            event.server.runCommandSilent(`execute as ${event.player.id} run playerex refund @s 1`)
            event.player.mainHandItem.count-=1
           }
    if ( event.player.getHeldItem(MAIN_HAND) == 'kubejs:shi_li')
           {
            event.server.runCommandSilent(`effect give ${event.player.id} minecraft:resistance 5 4 true`)
            event.player.mainHandItem.count-=1
           }             
})