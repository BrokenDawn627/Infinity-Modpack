onEvent('player.logged_in', event => {
    
    if (!event.player.stages.has('difficulty_normal')&&!event.player.stages.has('difficulty_easy')&&!event.player.stages.has('difficulty_hard')&&!event.player.stages.has('difficulty_impossible')) {
      
      event.player.stages.add('difficulty_easy')
      event.server.runCommandSilent(`scoreboard players set ${event.player.name} customd 0`)

    }
  })

  onEvent('item.right_click', event => {
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:difficulty_looker')
    {
        costomd=event.server.runCommandSilent(`scoreboard players get ${event.player.name} customd`)
        //event.server.runCommand(`say ${costomd}`)
        
        //冒险难度
        if (event.player.stages.has('difficulty_normal')) {
            event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"当前难度：冒险 | 难度值：${costomd}","color":"yellow"}`)
            event.player.playSound('minecraft:entity.arrow.hit_player')
        }
        //休闲难度
        else if (event.player.stages.has('difficulty_easy')) {
            event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"当前难度：休闲 | 难度值：${costomd}","color":"green"}`)
            event.player.playSound('minecraft:entity.arrow.hit_player')
        }
        //困难难度
        else if (event.player.stages.has('difficulty_hard')) {
            event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"当前难度：困难 | 难度值：${costomd}","color":"red"}`)
            event.player.playSound('minecraft:entity.arrow.hit_player')
        }
        //末日难度
        else if (event.player.stages.has('difficulty_impossible')) {
            event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"当前难度：末日 | 难度值：${costomd}","color":"dark_red"}`)
            event.player.playSound('minecraft:entity.arrow.hit_player')
        }
    }
    if(event.player.getHeldItem(MAIN_HAND) == 'kubejs:jiushu_heart')
    {
        costomd=event.server.runCommandSilent(`scoreboard players get ${event.player.name} customd`)
        //减20点难度值，少于20点则归零
        if(costomd>=20)
        {
            event.server.runCommandSilent(`scoreboard players remove ${event.player.name} customd 20`)
            event.player.addItemCooldown('kubejs:jiushu_heart', 6000)
            event.player.mainHandItem.count -= 1
        }
        else if(costomd>0)
        {
            event.server.runCommandSilent(`scoreboard players set ${event.player.name} customd 0`)
            event.player.addItemCooldown('kubejs:jiushu_heart', 6000)
            event.player.mainHandItem.count -= 1
        }
    }
    if(event.player.getHeldItem(MAIN_HAND) == 'kubejs:death_heart')
    {
        event.server.runCommandSilent(`scoreboard players set ${event.player.name} customd 0`)
        event.player.mainHandItem.count -= 1
        event.server.runCommandSilent(`kill ${event.player.name}`)
    }
    
})

onEvent('entity.hurt',event =>{
    let target = event.getEntity()
    let source = event.getSource().getActual()
    let damage = event.getDamage()
    
    if(target.player)
    {
        if(target.stages.has('difficulty_normal'))
        {
            if(source!=null)
            {
                if(target.health>damage*0.1+1)
                {
                    //玩家受到的生物伤害额外增加10%
                    target.attack(-damage*0.1)
                }
                else target.attack(999)                 
            }          
        }  
        else if(target.stages.has('difficulty_hard'))
        {
            if(source!=null)
            {
                if(target.health>damage*0.2+1)
                {
                    //玩家受到的生物伤害额外增加20%
                    target.attack(-damage*0.2)
                }
                else target.attack(999)   
            }          
        }       
        else if(target.stages.has('difficulty_impossible'))
        {
            if(source!=null)
            {
                
                if(target.health>damage*0.5+1)
                {
                    //玩家受到的生物伤害额外增加50%
                    target.attack(-damage*0.5)
                }
                else target.attack(999)     
            }          
        }     
    }
    
})

onEvent('entity.hurt',event =>{
    let target = event.getEntity()
    let player = event.getSource().getPlayer()
    let damage = event.getDamage()

    if(player!=null)
    {
        if(player.stages.has('difficulty_normal'))
        {
            //生物在未满血的状态下受到的玩家伤害减少10%
            target.heal(damage*0.1)
        }
        else if(player.stages.has('difficulty_hard'))
        {
            //生物在未满血的状态下受到的玩家伤害减少20%
            target.heal(damage*0.2)
        }
        else if(player.stages.has('difficulty_impossible'))
        {
            //生物在未满血的状态下受到的玩家伤害减少30%
            target.heal(damage*0.3)
        }
    }
})



onEvent('item.right_click', event => {
    if ( event.player.getHeldItem(MAIN_HAND) == 'kubejs:difficulty_easy')
    {
        event.player.stages.remove('difficulty_easy')
        event.player.stages.remove('difficulty_normal')
        event.player.stages.remove('difficulty_hard')
        event.player.stages.remove('difficulty_impossible')

        event.player.stages.add('difficulty_easy')
        event.player.playSound('minecraft:entity.arrow.hit_player')
        event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"当前难度：休闲","color":"green"}`)
        
    }
    if ( event.player.getHeldItem(MAIN_HAND) == 'kubejs:difficulty_normal')
    {
        event.player.stages.remove('difficulty_easy')
        event.player.stages.remove('difficulty_normal')
        event.player.stages.remove('difficulty_hard')
        event.player.stages.remove('difficulty_impossible')

        event.player.stages.add('difficulty_normal')
        event.player.playSound('minecraft:entity.arrow.hit_player')
        event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"当前难度：冒险","color":"yellow"}`)
        
    }
    if ( event.player.getHeldItem(MAIN_HAND) == 'kubejs:difficulty_hard')
    {
        event.player.stages.remove('difficulty_easy')
        event.player.stages.remove('difficulty_normal')
        event.player.stages.remove('difficulty_hard')
        event.player.stages.remove('difficulty_impossible')

        event.player.stages.add('difficulty_hard')
        event.player.playSound('minecraft:entity.arrow.hit_player')
        event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"当前难度：困难","color":"red"}`)
        
    }
    if ( event.player.getHeldItem(MAIN_HAND) == 'kubejs:difficulty_impossible')
    {
        event.player.stages.remove('difficulty_easy')
        event.player.stages.remove('difficulty_normal')
        event.player.stages.remove('difficulty_hard')
        event.player.stages.remove('difficulty_impossible')

        event.player.stages.add('difficulty_impossible')
        event.player.playSound('minecraft:entity.arrow.hit_player')
        event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"当前难度：末日","color":"dark_red"}`)
    }

    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:difficulty_changer')
    {     
        if (event.player.stages.has('difficulty_easy')) {
            event.player.stages.remove('difficulty_easy')
            event.player.stages.remove('difficulty_normal')
            event.player.stages.remove('difficulty_hard')
            event.player.stages.remove('difficulty_impossible')

            event.player.stages.add('difficulty_normal')
            event.player.playSound('minecraft:entity.arrow.hit_player')
            event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"当前难度：冒险","color":"yellow"}`)
        }
        else if (event.player.stages.has('difficulty_normal')) {
            event.player.stages.remove('difficulty_easy')
            event.player.stages.remove('difficulty_normal')
            event.player.stages.remove('difficulty_hard')
            event.player.stages.remove('difficulty_impossible')

            event.player.stages.add('difficulty_hard')
            event.player.playSound('minecraft:entity.arrow.hit_player')
            event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"当前难度：困难","color":"red"}`)
        }
        else if (event.player.stages.has('difficulty_hard')) {
            event.player.stages.remove('difficulty_easy')
            event.player.stages.remove('difficulty_normal')
            event.player.stages.remove('difficulty_hard')
            event.player.stages.remove('difficulty_impossible')

            event.player.stages.add('difficulty_impossible')
            event.player.playSound('minecraft:entity.arrow.hit_player')
            event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"当前难度：末日","color":"dark_red"}`)
        }
        else if (event.player.stages.has('difficulty_impossible')) {
            event.player.stages.remove('difficulty_easy')
            event.player.stages.remove('difficulty_normal')
            event.player.stages.remove('difficulty_hard')
            event.player.stages.remove('difficulty_impossible')

            event.player.stages.add('difficulty_easy')
            event.player.playSound('minecraft:entity.arrow.hit_player')
            event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"当前难度：休闲","color":"green"}`)
        }
        else
        {
            event.player.stages.remove('difficulty_easy')
            event.player.stages.remove('difficulty_normal')
            event.player.stages.remove('difficulty_hard')
            event.player.stages.remove('difficulty_impossible')

            event.player.stages.add('difficulty_easy')
            event.player.playSound('minecraft:entity.arrow.hit_player')
            event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"当前难度：休闲","color":"green"}`)
        }
    }
})

onEvent('recipes', event => {
    event.shapeless('kubejs:difficulty_changer', ['minecraft:clock'])
    event.shapeless('kubejs:difficulty_looker', ['kubejs:difficulty_changer'])
    event.shaped('kubejs:jiushu_heart', [
		'AAA',
		'AAA',
		'AAA'
	  ], {
		A:'kubejs:jiushu_heart_shard'
	  })
    event.shapeless('kubejs:jiushu_heart_shard', ['kubejs:eden_ingot','victus:blank_heart_aspect','botania:mana_diamond'])
    event.shapeless('kubejs:death_heart', ['kubejs:golden_star','botania:terrasteel_ingot','minecraft:dragon_head'])
})

//概率事件

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }



/*onEvent('item.right_click', event => {
    if (event.player.getHeldItem(MAIN_HAND) == 'minecraft:diamond')
    {
        n = randomNum(1,3)
        if(n==1) event.server.runCommand(`say 1`)
        else if(n==2) event.server.runCommand(`say 2`)
        else if(n==3) event.server.runCommand(`say 3`)
    }
})*/

onEvent('entity.death', event => {
    let entity = event.getEntity()
    let player = event.getSource().getPlayer()

    if(entity.monster)
    {
        if(player!=null)
        {
            //获取难度
            customdiff=event.server.runCommandSilent(`scoreboard players get ${player.name} customd`)
            
            //击杀普通敌对生物难度值增加1，精英怪增加5
            event.server.runCommandSilent(`scoreboard players add ${player.name} customd 1`)
            if(entity.tags.contains('jingying'))
            {
                event.server.runCommandSilent(`scoreboard players add ${player.name} customd 4`)
            }

            //额外掉落概率-最大50%
            let chance=randomNum(1,1000)
            let ifloot=false

            
            //每级难度*0.05 封顶15%
            if(Math.floor(customdiff*0.2)<=150)
            {
                if(chance<=Math.floor(customdiff*0.2)) ifloot=true;
            }
            else
            {
                if(chance<=150) ifloot=true;
            }

            
            if(ifloot)
            {
                //player.give(Item.of('numismatic-overhaul:gold_coin', Math.floor(customdiff*0.1)))
                player.addXPLevels(Math.floor(customdiff*0.1))
                
                if (player.stages.has('difficulty_easy'))
                {
                    //event.server.runCommand(`say 0`)
                }
                else if (player.stages.has('difficulty_normal'))
                {
                    lootno = randomloot(1, normal_loot.length)
                    for (let i = 0; i < lootno.length; i++) 
                    {
                        player.give(normal_loot[lootno[i]])
                    }
                    //event.server.runCommand(`say 1`)
                }
                else if (player.stages.has('difficulty_hard'))
                {
                    lootno = randomloot(1, normal_loot.length)
                    for (let i = 0; i < lootno.length; i++) 
                    {
                        player.give(normal_loot[lootno[i]])
                    }
                    lootno = randomloot(1, hard_loot.length)
                    for (let i = 0; i < lootno.length; i++) 
                    {
                        player.give(hard_loot[lootno[i]])
                    }
                    //event.server.runCommand(`say 2`)
                }
                else if (player.stages.has('difficulty_impossible'))
                {
                    lootno = randomloot(1, normal_loot.length)
                    for (let i = 0; i < lootno.length; i++) 
                    {
                        player.give(normal_loot[lootno[i]])
                    }
                    lootno = randomloot(1, hard_loot.length)
                    for (let i = 0; i < lootno.length; i++) 
                    {
                        player.give(hard_loot[lootno[i]])
                    }
                    lootno = randomloot(1, impossible_loot.length)
                    for (let i = 0; i < lootno.length; i++) 
                    {
                        player.give(impossible_loot[lootno[i]])  
                    }
                    //event.server.runCommand(`say 3`)
                }
            }
            
        }
    }

    if(entity.player)
    {
        //event.server.runCommand(`say ${entity.name}`)
        costomd=event.server.runCommandSilent(`scoreboard players get ${entity.name} customd`)
        //每次死亡减5点难度值，少于5点则归零
        if(costomd>=5)
        {
            event.server.runCommandSilent(`scoreboard players remove ${entity.name} customd 5`)
        }
        else
        {
            event.server.runCommandSilent(`scoreboard players set ${entity.name} customd 0`)
        }
    }

})

onEvent('server.load', event => {
    event.server.runCommandSilent(`scoreboard objectives add customd dummy`)
    event.server.runCommandSilent(`scoreboard objectives setdisplay list customd`)
})

onEvent('entity.hurt', event => {
    let target = event.getEntity()
    let player = event.getSource().getPlayer()
    let damage = event.getDamage()
    let source = event.getSource().getActual()

    if(player!=null)
    {
        customd=event.server.runCommandSilent(`scoreboard players get ${player.name} customd`)
        if(target.monster&&!target.tags.contains('attacked'))
        {
            //event.server.runCommand(`say 1`)
            //血量加难度值*0.3
            target.setMaxHealth(target.maxHealth+customd*0.3)
            target.tags.add('attacked')
            target.heal(customd*0.3)
            //攻击力加难度值*0.1
            result=event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.attack_damage base get`)           
            event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.attack_damage base set ${result+customd*0.1}`)
            
            //event.server.runCommand(`say ${result}`)
            //护甲值加难度值*0.05 上限80
            result=event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base get`) 
            if(result+customd*0.05<=80) event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set ${result+customd*0.05}`)
            else event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.armor base set 80`)
        }
    }
    if(target.player)
    {
        customd=event.server.runCommandSilent(`scoreboard players get ${target.name} customd`)
        if(source!=null&&source.monster&&!source.tags.contains('attacked'))
        {
            //最大生命值
            source.setMaxHealth(source.maxHealth+customd*0.3)
            source.tags.add('attacked')
            source.heal(customd*0.3)
            //攻击力
            result=event.server.runCommandSilent(`attribute ${source.id} minecraft:generic.attack_damage base get`)           
            event.server.runCommandSilent(`attribute ${source.id} minecraft:generic.attack_damage base set ${result+customd*0.1}`)
            //护甲值
            result=event.server.runCommandSilent(`attribute ${source.id} minecraft:generic.armor base get`) 
            if(result+customd*0.05<=80) event.server.runCommandSilent(`attribute ${source.id} minecraft:generic.armor base set ${result+customd*0.05}`)
            else event.server.runCommandSilent(`attribute ${source.id} minecraft:generic.armor base set 80`)
        }
    }
})