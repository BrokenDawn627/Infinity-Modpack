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
        type: 'lychee:block_clicking',
        item_in:{
            item:'kubejs:shining_star'
        },
        block_in:'*',
        post:{
            type:'execute',
            command:'/improvedmobs difficulty set 0'
        }
      })

      event.custom({
        type: 'lychee:item_burning',
        item_in:{
            item:'minecraft:stick'
        },
        post:{
            type:'drop_item',
            item:'hardcore_torches:lit_torch'
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

      

  })