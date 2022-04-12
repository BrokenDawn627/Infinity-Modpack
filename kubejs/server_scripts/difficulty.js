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
                
                if(target.health>damage*0.3+1)
                {
                    //玩家受到的生物伤害额外增加30%
                    target.attack(-damage*0.3)
                }
                if(target.health-target.maxHealth*0.15>1) 
                {
                    //玩家受到的生物伤害额外附带15%玩家最大生命值的真实伤害
                    target.heal(-target.maxHealth*0.15)
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
            //生物在未满血的状态下受到的玩家伤害减少15%
            target.heal(damage*0.15)
        }
        else if(player.stages.has('difficulty_hard'))
        {
            //生物在未满血的状态下受到的玩家伤害减少30%
            target.heal(damage*0.3)
        }
        else if(player.stages.has('difficulty_impossible'))
        {
            //生物在未满血的状态下受到的玩家伤害减少50%
            target.heal(damage*0.5)
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
})

//概率事件

function randomNum(min, max) {
    max=max+1;
    return Math.floor(Math.random() * (min- max) + max);
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
            //击杀普通敌对生物难度值增加1，精英怪增加5
            event.server.runCommandSilent(`scoreboard players add ${player.name} customd 1`)
            if(entity.tags.contains('jingying'))
            {
                event.server.runCommandSilent(`scoreboard players add ${player.name} customd 4`)
            }
            
            //末日-击杀敌对生物时有50%的概率额外获得经验等级、金币奖励
            if (player.stages.has('difficulty_impossible')) {
                chance = randomNum(1, 2)
                if (chance == 1) {
                    amount1 = randomNum(1, 3)
                    amount2 = randomNum(1, 3)
                    player.give(Item.of('numismatic-overhaul:gold_coin', amount1))
                    player.addXPLevels(amount2)
                }
            }
            //困难-击杀敌对生物时有25%的概率额外获得经验等级、金币奖励
            else if (player.stages.has('difficulty_hard')) {
                chance = randomNum(1, 4)
                if (chance == 1) {
                    amount1 = randomNum(1, 3)
                    amount2 = randomNum(1, 3)
                    player.give(Item.of('numismatic-overhaul:gold_coin', amount1))
                    player.addXPLevels(amount2)
                }
            }
            //冒险-击杀敌对生物时有10%的概率额外获得经验等级、金币奖励
            else if (player.stages.has('difficulty_normal')) {
                chance = randomNum(1, 10)
                if (chance == 1) {
                    //event.server.runCommand(`say 1`)
                    amount1 = randomNum(1, 3)
                    amount2 = randomNum(1, 3)
                    player.give(Item.of('numismatic-overhaul:gold_coin', amount1))
                    player.addXPLevels(amount2)
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
            //event.server.runCommand(`say ${result}`)
            event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.attack_damage base set ${result+customd*0.1}`)
            result=event.server.runCommandSilent(`attribute ${target.id} minecraft:generic.attack_damage base get`)
            //event.server.runCommand(`say ${result}`)
        }
    }
})