//paper
onEvent('recipes', event => {
    event.shapeless('kubejs:custom_paper', ['minecraft:paper','numismatic-overhaul:gold_coin']).id('infinity:custom_paper')
})

onEvent('item.right_click', event => {
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:custom_paper') {
        if (event.player.name == '_Inory_') {
            event.player.give('kubejs:singer_sword')
            event.player.give('kubejs:bengdai')
            event.player.mainHandItem.count -= 1
        }
        if (event.player.name == 'D_O_O') {
            event.player.give('kubejs:ruoshui')
            event.player.mainHandItem.count -= 1
        }
        if (event.player.name == 'Naughty_Clock') {
            event.player.give(Item.of('minecraft:bow', "{CustomModelData:1781,Damage:0,Unbreakable:1b,display:{Lore:['{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"dark_aqua\",\"text\":\"束缚藤蔓\"},{\"text\":\"  \"},{\"color\":\"gray\",\"text\":\"命中目标时使目标定身5秒\"}],\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"dark_green\",\"text\":\"寄生种子  \"},{\"color\":\"gray\",\"text\":\"命中目标时给予自身 生命恢复II 5秒\"}],\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"gold\",\"text\":\"自然之力\"},{\"text\":\"  \"},{\"color\":\"gray\",\"text\":\"潜行时射击命中目标将额外造成目标当前生命值20%的真实伤害，但使弓进入20秒冷却\"}],\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"light_purple\",\"text\":\"荆棘屏障  \"},{\"color\":\"gray\",\"text\":\"潜行时减免60%伤害\"}],\"text\":\"\"}','{\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"gray\",\"text\":\"@Naughty_Clock\"}],\"text\":\"\"}'],Name:'{\"italic\":false,\"extra\":[{\"text\":\"\"},{\"color\":\"green\",\"text\":\"精灵之语\"}],\"text\":\"\"}'}}").enchant('imperishableitems:imperishable', 1))
            event.player.mainHandItem.count -= 1
        }
        if (event.player.name == 'Night_Break') {
            event.player.give('kubejs:nightbreak')
            event.player.mainHandItem.count -= 1
        }
        if (event.player.name == 'GAMEHAZED') {
            event.player.give(Item.of('minecraft:bow', "{CustomModelData:1780,Damage:0,Unbreakable:1b,display:{Lore:['{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"gray\",\"text\":\"暗影之刃  命中目标时使目标失明5秒\"}],\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"gray\",\"text\":\"吉姆哈泽德之力  潜行时射击命中目标将额外造成目标当前生命值30%的真实伤害，但使弓进入25秒冷却\"}],\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"gray\",\"text\":\"化为无形  潜行时隐身\"}],\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"gray\",\"text\":\"刺客步法  潜行时加速\"}],\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"text\":\" \"}],\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"aqua\",\"text\":\"@极限生存挑战首通-GAMEHAZED\"}],\"text\":\"\"}'],Name:'{\"italic\":false,\"extra\":[{\"text\":\"\"},{\"color\":\"gold\",\"text\":\"吉姆哈泽德之暗影\"}],\"text\":\"\"}'}}").enchant('yigd:soulbound', 1))
            event.player.mainHandItem.count -= 1
        }
        if (event.player.name == 'huasuia') {
            event.player.give(Item.of('kubejs:baigei_boots', '{AttributeModifiers:[{Amount:8.0d,AttributeName:"minecraft:generic.armor",Operation:0,Slot:"feet",UUID:[I;-45615107,-1407171253,-1350934133,161733585]},{Amount:4.0d,AttributeName:"minecraft:generic.armor_toughness",Operation:0,Slot:"feet",UUID:[I;1223374047,-2092153921,-1251063457,-1481955000]},{Amount:6.0d,AttributeName:"minecraft:generic.max_health",Operation:0,Slot:"feet",UUID:[I;233678787,-34125416,-1961187004,-576140583]},{Amount:1.0d,AttributeName:"minecraft:generic.knockback_resistance",Operation:0,Slot:"feet",UUID:[I;5336893,1395477583,-2080663661,-950632961]},{Amount:1.0d,AttributeName:"stepheightentityattribute:stepheight",Operation:0,Slot:"feet",UUID:[I;1728871659,1969833762,-1086653552,1494668937]}],Damage:0}'))
            event.player.mainHandItem.count -= 1
        }
        if (event.player.name == 'AKong4213') {
            event.player.give('kubejs:yecao')
            event.player.mainHandItem.count -= 1
        }
        if (event.player.name == 'moyuguguji') {
            event.player.give('kubejs:zhongzi')
            event.player.mainHandItem.count -= 1
        }
        if (event.player.name == 'A_wushi') {
            event.player.give(Item.of('kubejs:qixing', '{AttributeModifiers:[{Amount:10.0d,AttributeName:"minecraft:generic.attack_damage",Operation:0,Slot:"mainhand",UUID:[I;1161605078,1120946315,-1856029877,252995158]},{Amount:-1.5d,AttributeName:"minecraft:generic.attack_speed",Operation:0,Slot:"mainhand",UUID:[I;2093672954,1279217346,-1158378869,1755092054]},{Amount:3.0d,AttributeName:"reach-entity-attributes:reach",Operation:0,Slot:"mainhand",UUID:[I;-1264711835,-1162460258,-1826288601,67784300]},{Amount:3.0d,AttributeName:"reach-entity-attributes:attack_range",Operation:0,Slot:"mainhand",UUID:[I;-1498455759,-750894282,-1630995520,1918872339]}],Damage:0}'))
            event.player.mainHandItem.count -= 1
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
    let mainItem
    let offItem
    if(player!=null)
    {
        mainItem = player.getHeldItem(MAIN_HAND)
        offItem = player.getHeldItem(OFF_HAND)
    }

    if ((mainItem == 'minecraft:bow' && mainItem.nbtString.lastIndexOf('CustomModelData:1781')>=0)||(offItem == 'minecraft:bow' && offItem.nbtString.lastIndexOf('CustomModelData:1781')>=0))
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


onEvent('player.tick', event => {
    let player = event.player
    let mainItem = player.getHeldItem(MAIN_HAND)
    let offItem = player.getHeldItem(OFF_HAND)

    if ((mainItem == 'minecraft:bow' && mainItem.nbtString.lastIndexOf('CustomModelData:1781')>=0)||(offItem == 'minecraft:bow' && offItem.nbtString.lastIndexOf('CustomModelData:1781')>=0))
    {
        if(player.crouching)
        {
            //荆棘屏障-潜行时减免60%伤害
            player.potionEffects.add('minecraft:resistance',20,2,false,false)
        }
    }
})

//Infinity
onEvent('entity.hurt',event =>{
    let target = event.getEntity()
    let player = event.getSource().getPlayer()

    let mainItem
    let offItem
    if(player!=null)
    {
        mainItem = player.getHeldItem(MAIN_HAND)
        offItem = player.getHeldItem(OFF_HAND)
    }
    if(mainItem == 'kubejs:infinity_sword')
    {
        target.kill()
    }
})

onEvent('player.tick', event => {
    let player = event.player
    let mainItem = player.getHeldItem(MAIN_HAND)
    if(mainItem == 'kubejs:infinity_sword')
    {
        event.server.runCommandSilent(`effect give ${event.player.id} minecraft:resistance 1 4 true`)
    }
})

//Shield
/*onEvent('entity.hurt',event =>{
    let target = event.getEntity()
    let target_offhand=target.getHeldItem(OFF_HAND)
    
    if(target.player&&target_offhand=='minecraft:shield'&&target_offhand.nbtString.lastIndexOf('CustomModelData:1782')>=0)
    {
        event.server.runCommand(`say 1`)
    }
    
})

onEvent('item.right_click', event => {
    let player = event.player
    let hand = event.getHand()
    let item = event.getItem()
    if(hand==OFF_HAND&&item=='minecraft:shield'&&item.nbtString.lastIndexOf('CustomModelData:1782')>=0)
    {
        event.server.runCommand(`say 1`)
    }
})*/

//gamehazed
onEvent('entity.hurt',event =>{
    
    let target = event.getEntity()
    let player = event.getSource().getPlayer()
    let entity = event.getSource().getImmediate()
    let actual = event.getSource().getActual()
    let mainItem
    let offItem
    if(player!=null)
    {
        mainItem = player.getHeldItem(MAIN_HAND)
        offItem = player.getHeldItem(OFF_HAND)
    }

    if ((mainItem == 'minecraft:bow' && mainItem.nbtString.lastIndexOf('CustomModelData:1780')>=0)||(offItem == 'minecraft:bow' && offItem.nbtString.lastIndexOf('CustomModelData:1780')>=0))
    {
        
        if(entity!=null && !entity.living)
        {
            //暗影之刃-命中目标时使目标失明5秒
            target.potionEffects.add('minecraft:blindness',100,0)
            if(player.crouching)
            {
                //吉姆哈泽德之力-潜行时射击命中目标将额外造成目标当前生命值30%的真实伤害，但使弓进入25秒冷却。
                target.heal(-target.health*0.3)
                player.addItemCooldown('minecraft:bow', 500)
            }
        }
        
    }
    
})

onEvent('player.tick', event => {
    let player = event.player
    let mainItem = player.getHeldItem(MAIN_HAND)
    let offItem = player.getHeldItem(OFF_HAND)

    if ((mainItem == 'minecraft:bow' && mainItem.nbtString.lastIndexOf('CustomModelData:1780')>=0)||(offItem == 'minecraft:bow' && offItem.nbtString.lastIndexOf('CustomModelData:1780')>=0))
    {
        if(player.crouching)
        {
            //化为无形-潜行时隐身
            player.potionEffects.add('minecraft:invisibility',20,0,false,false)
            //刺客步法-潜行时加速
            player.potionEffects.add('minecraft:speed',20,2,false,false)
        }
    }
})

//白给靴
onEvent('player.tick', event => {
    let player = event.player
    let boots= player.getFeetArmorItem()

    //event.server.runCommand(`say 1`)
    if(boots=='kubejs:baigei_boots')
    {
        if(!player.potionEffects.isActive('minecraft:regeneration'))
        {
            player.potionEffects.add('minecraft:regeneration',100,2,false,false)
        }
        player.potionEffects.add('minecraft:speed',20,1,false,false)
        player.potionEffects.add('extraalchemy:detection',20,0,false,false)
    }
})

//植物魔法-泰拉
onEvent('player.tick', event => {
    let player = event.player
    let mainItem = player.getHeldItem(MAIN_HAND)
    let offItem = player.getHeldItem(OFF_HAND)

    if (mainItem == 'botania:terra_sword'||mainItem =='botania:thunder_sword'||mainItem == 'botania:star_sword')
    {
        player.potionEffects.add('minecraft:haste',20,4,false,false)
        player.potionEffects.add('minecraft:strength',20,2,false,false)
    }
    if (mainItem == 'botania:terra_pick' )
    {
        player.potionEffects.add('extraalchemy:detection',20,0,false,false)
        player.potionEffects.add('minecraft:speed',20,2,false,false)
    }
})

//野草
onEvent('item.right_click', event => {
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:yecao')
     {
        
        let player=event.player
        //右键使用获得5秒抗性5生命恢复5，冷却时间10秒
        event.player.potionEffects.add('minecraft:regeneration',100,4,false,false)
        event.player.potionEffects.add('minecraft:resistance',100,4,false,false)
        event.player.addItemCooldown('kubejs:yecao', 200)
        
     }            
                     
})

onEvent('player.tick', event => {
    let player = event.player
    let mainItem = player.getHeldItem(MAIN_HAND)

    if (mainItem == 'kubejs:yecao')
    {
        player.potionEffects.add('minecraft:fire_resistance',20,0,false,false)
        //event.server.runCommand(`say ${event.level.getBlock(player.getX()-1,player.getY()-1,player.getZ()-1).getId()}`)
        if(event.level.getBlock(player.getX()-1,player.getY()-1,player.getZ()-1)=='minecraft:grass_block')
        {
            player.potionEffects.add('minecraft:speed',20,3,false,false)
        }
        if(player.crouching)
        {
            player.potionEffects.add('minecraft:saturation',20,3,false,false)
        }
    }
    
})

//中子灭杀
onEvent('item.right_click', event => {
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:zhongzi'||event.player.getHeldItem(OFF_HAND)=='kubejs:zhongzi')
     {
        event.server.runCommandSilent(`execute at ${event.player.name} run kill @e[distance=0..16,name=!${event.player.name}]`)
        event.player.addItemCooldown('kubejs:zhongzi', 24000)
     }            
                     
})

//七星剑
onEvent('entity.death', event => {
    let entity = event.getEntity()
    let player = event.getSource().getPlayer()
    if(player!=null)
    {
        if(player.getHeldItem(MAIN_HAND) == 'kubejs:qixing')
        {
            player.potionEffects.add('minecraft:absorption',200,3,false,false)
            let chance = randomNum(1, 2)
            if (chance == 1) {
                if (entity.type == 'minecraft:creeper') {
                    player.give('minecraft:creeper_head')
                }
                if (entity.player) {
                    event.server.runCommandSilent(`give ${player.name} minecraft:player_head{SkullOwner:"${entity.name}"} 1`)
                }
                if (entity.type == 'minecraft:zombie') {
                    player.give('minecraft:zombie_head')
                }
                if (entity.type == 'minecraft:skeleton') {
                    player.give('minecraft:skeleton_skull')
                }
                if (entity.type == 'minecraft:wither_skeleton') {
                    player.give('minecraft:wither_skeleton_skull')
                }
                if (entity.type == 'minecraft:ender_dragon') {
                    player.give('minecraft:dragon_head')
                }
            }
            
        }    
    }
})

onEvent('entity.hurt',event =>{
    
    let target = event.getEntity()
    let player = event.getSource().getPlayer()
    let entity = event.getSource().getImmediate()
    let actual = event.getSource().getActual()
    let damage = event.getDamage()
    if(player!=null)
    {
        let mainItem = player.getHeldItem(MAIN_HAND)
        if (mainItem == 'kubejs:qixing')
        {
            target.heal(-target.health * 0.1)
            player.heal((damage+target.health * 0.1)*0.1)
        }
    }
    
})