//paper
onEvent('recipes', event => {
    event.shapeless('kubejs:custom_paper', ['minecraft:paper','numismatic-overhaul:gold_coin']).id('infinity:custom_paper')
})

onEvent('item.right_click', event => {
    if ( event.player.getHeldItem(MAIN_HAND) == 'kubejs:custom_paper')
           {
            if(event.player.name=='_Inory_'){
                event.player.give('kubejs:singer_sword')
                event.player.give('kubejs:bengdai')
                event.player.mainHandItem.count-=1
            }
            if(event.player.name=='D_O_O')
           {
                event.player.give('kubejs:ruoshui')
                event.player.mainHandItem.count-=1
           }
           if(event.player.name=='Naughty_Clock')        
           {
            event.player.give(Item.of('minecraft:bow', "{CustomModelData:1781,Damage:0,Unbreakable:1b,display:{Lore:['{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"dark_aqua\",\"text\":\"束缚藤蔓\"},{\"text\":\"  \"},{\"color\":\"gray\",\"text\":\"命中目标时使目标定身5秒\"}],\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"dark_green\",\"text\":\"寄生种子  \"},{\"color\":\"gray\",\"text\":\"命中目标时给予自身 生命恢复II 5秒\"}],\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"gold\",\"text\":\"自然之力\"},{\"text\":\"  \"},{\"color\":\"gray\",\"text\":\"潜行时射击命中目标将额外造成目标当前生命值20%的真实伤害，但使弓进入20秒冷却\"}],\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"light_purple\",\"text\":\"荆棘屏障  \"},{\"color\":\"gray\",\"text\":\"潜行时减免60%伤害\"}],\"text\":\"\"}','{\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"gray\",\"text\":\"@Naughty_Clock\"}],\"text\":\"\"}'],Name:'{\"italic\":false,\"extra\":[{\"text\":\"\"},{\"color\":\"green\",\"text\":\"精灵之语\"}],\"text\":\"\"}'}}").enchant('imperishableitems:imperishable', 1)) 
            event.player.mainHandItem.count-=1
           }
           }            
})

//Inory
onEvent('player.tick', event => {
    if ( event.player.getHeldItem(MAIN_HAND) == 'kubejs:singer_sword')
           {      
           event.server.runCommandSilent(`effect give ${event.player.id} minecraft:strength 1 2 true`)
           }            
})

onEvent('item.right_click', event => {
    if ( event.player.getHeldItem(MAIN_HAND) == 'kubejs:bengdai'||event.player.getHeldItem(OFF_HAND) == 'kubejs:bengdai')
           { 
           event.server.runCommandSilent(`effect give ${event.player.id} minecraft:regeneration 10 1`)
           event.player.addItemCooldown('kubejs:bengdai', 300)
           }            
})

onEvent('item.right_click', event => {
    if ( event.player.getHeldItem(MAIN_HAND) == 'kubejs:singer_sword')
           { 
           event.server.runCommandSilent(`effect give ${event.player.id} minecraft:haste 5 0`)
           event.player.addItemCooldown('kubejs:singer_sword', 140)
           }            
})



//doo
onEvent('player.tick', event => {
    if ( event.player.getHeldItem(MAIN_HAND) == 'kubejs:ruoshui')
           {  
               if(event.player.crouching)
               {
                //海之屏障-潜行时无敌
                event.server.runCommandSilent(`effect give ${event.player.id} minecraft:resistance 1 4 true`)
               }
               if(event.player.attackingEntity!=null)
               {
                //冰之霜寒-战斗时冻结攻击你的目标
                event.server.runCommandSilent(`effect give ${event.player.attackingEntity.id} minecraft:slowness 3 9 true`)
               }            
               //水之净化-立刻熄灭你身上的火焰
               event.player.extinguish()

               //河之湍急-处于战斗状态时获得速度效果
               if(event.player.lastAttackedEntity!=null&&event.player.lastAttackedEntity.attackingEntity!=null)
               {
                event.server.runCommandSilent(`effect give ${event.player.id} minecraft:speed 1 0`)        
               }
                
           }            
})

onEvent('item.right_click', event => {
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:ruoshui')
     {
        if(event.player.crouching)
        {
            //泉之治愈-潜行使用恢复最大生命值的一半，冷却时间15秒
            event.player.heal(event.player.maxHealth/2)
            event.player.addItemCooldown('kubejs:ruoshui', 300)
        }
        else
        {
            //汽之呼吸-右键使用获得15秒水下呼吸，冷却时间20秒
            event.server.runCommandSilent(`effect give ${event.player.id} minecraft:water_breathing 15 0 true`)
            event.player.addItemCooldown('kubejs:ruoshui', 400)
        }
     }            
                     
})

//Naughty_Clock
onEvent('entity.hurt',event =>{
    
    let target = event.getEntity()
    let player = event.getSource().getPlayer()
    let entity = event.getSource().getImmediate()
    let actual = event.getSource().getActual()
    let mainItem = player.getHeldItem(MAIN_HAND)
    let offItem = player.getHeldItem(OFF_HAND)

    if ((mainItem == 'minecraft:bow' && mainItem.nbtString.lastIndexOf('CustomModelData:1781')>0)||(offItem == 'minecraft:bow' && offItem.nbtString.lastIndexOf('CustomModelData:1781')>0))
    {
        //event.server.runCommand(`say ${target.name}`)
        //event.server.runCommand(`say ${player.name}`)
        //event.server.runCommand(`say ${entity.name}`)
        
        if(entity!=null && !entity.living)
        {
            //束缚藤蔓-命中目标时使目标定身5秒
            target.potionEffects.add('minecraft:slowness',100,9)
            //寄生种子-命中目标时给予自身 生命恢复II 5秒
            player.potionEffects.add('minecraft:regeneration',100,1,false,false)
            if(player.crouching)
            {
                //自然之力-潜行时射击命中目标将额外造成目标当前生命值20%的真实伤害，但使弓进入20秒冷却。
                target.heal(-target.health/5)
                player.addItemCooldown('minecraft:bow', 400)
            }
        }
        
    }
    
})

onEvent('player.hurt',event =>{
    event.server.runCommand(`say ${event.player.name}`)
})

onEvent('player.tick', event => {
    let player = event.player
    let mainItem = player.getHeldItem(MAIN_HAND)
    let offItem = player.getHeldItem(OFF_HAND)

    if ((mainItem == 'minecraft:bow' && mainItem.nbtString.lastIndexOf('CustomModelData:1781')>0)||(offItem == 'minecraft:bow' && offItem.nbtString.lastIndexOf('CustomModelData:1781')>0))
    {
        if(player.crouching)
        {
            //荆棘屏障-潜行时减免60%伤害
            player.potionEffects.add('minecraft:resistance',20,2,false,false)
        }
    }
})
