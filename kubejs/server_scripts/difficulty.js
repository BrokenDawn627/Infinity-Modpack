onEvent('player.logged_in', event => {
    
    if (!event.player.stages.has('difficulty_normal')&&!event.player.stages.has('difficulty_easy')&&!event.player.stages.has('difficulty_hard')&&!event.player.stages.has('difficulty_impossible')) {
      
      event.player.stages.add('difficulty_easy')
    }
  })

  onEvent('player.tick', event => {
    //冒险难度
    if ( event.player.stages.has('difficulty_normal'))
    {
        event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"当前难度：冒险","color":"yellow"}`)
    }
    //休闲难度
    else if(event.player.stages.has('difficulty_easy')) 
    {
        event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"当前难度：休闲","color":"green"}`)
    }
    //困难难度
    else if(event.player.stages.has('difficulty_hard')) 
    {
        event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"当前难度：困难","color":"red"}`)
    }  
    //末日难度
    else if(event.player.stages.has('difficulty_impossible')) 
    {
        event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"当前难度：末日","color":"dark_red"}`)
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
                //玩家受到的生物伤害额外增加10%
                target.heal(-damage*0.1)
            }          
        }  
        else if(target.stages.has('difficulty_hard'))
        {
            if(source!=null)
            {
                //玩家受到的生物伤害额外增加20%
                target.heal(-damage*0.2)
            }          
        }       
        else if(target.stages.has('difficulty_impossible'))
        {
            if(source!=null)
            {
                
                //玩家受到的生物伤害额外增加30%
                target.heal(-damage*0.3)
                //玩家受到的生物伤害额外附带15%玩家最大生命值的真实伤害
                target.heal(-target.maxHealth*0.15)
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
        
    }
    if ( event.player.getHeldItem(MAIN_HAND) == 'kubejs:difficulty_normal')
    {
        event.player.stages.remove('difficulty_easy')
        event.player.stages.remove('difficulty_normal')
        event.player.stages.remove('difficulty_hard')
        event.player.stages.remove('difficulty_impossible')

        event.player.stages.add('difficulty_normal')
        event.player.playSound('minecraft:entity.arrow.hit_player')
        
    }
    if ( event.player.getHeldItem(MAIN_HAND) == 'kubejs:difficulty_hard')
    {
        event.player.stages.remove('difficulty_easy')
        event.player.stages.remove('difficulty_normal')
        event.player.stages.remove('difficulty_hard')
        event.player.stages.remove('difficulty_impossible')

        event.player.stages.add('difficulty_hard')
        event.player.playSound('minecraft:entity.arrow.hit_player')
        
    }
    if ( event.player.getHeldItem(MAIN_HAND) == 'kubejs:difficulty_impossible')
    {
        event.player.stages.remove('difficulty_easy')
        event.player.stages.remove('difficulty_normal')
        event.player.stages.remove('difficulty_hard')
        event.player.stages.remove('difficulty_impossible')

        event.player.stages.add('difficulty_impossible')
        event.player.playSound('minecraft:entity.arrow.hit_player')
    }

    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:difficulty_changer')
    {     
        if(event.player.stages.has('difficulty_easy'))
        {
        event.player.stages.remove('difficulty_easy')
        event.player.stages.remove('difficulty_normal')
        event.player.stages.remove('difficulty_hard')
        event.player.stages.remove('difficulty_impossible')

        event.player.stages.add('difficulty_normal')
        event.player.playSound('minecraft:entity.arrow.hit_player')
        
        }
        else if(event.player.stages.has('difficulty_normal'))
        {
        event.player.stages.remove('difficulty_easy')
        event.player.stages.remove('difficulty_normal')
        event.player.stages.remove('difficulty_hard')
        event.player.stages.remove('difficulty_impossible')

        event.player.stages.add('difficulty_hard')
        event.player.playSound('minecraft:entity.arrow.hit_player')
        
        }
        else if(event.player.stages.has('difficulty_hard'))
        {
        event.player.stages.remove('difficulty_easy')
        event.player.stages.remove('difficulty_normal')
        event.player.stages.remove('difficulty_hard')
        event.player.stages.remove('difficulty_impossible')

        event.player.stages.add('difficulty_impossible')
        event.player.playSound('minecraft:entity.arrow.hit_player')
        
        }
        else if(event.player.stages.has('difficulty_impossible'))
        {
        event.player.stages.remove('difficulty_easy')
        event.player.stages.remove('difficulty_normal')
        event.player.stages.remove('difficulty_hard')
        event.player.stages.remove('difficulty_impossible')

        event.player.stages.add('difficulty_easy')
        event.player.playSound('minecraft:entity.arrow.hit_player')
        }
    }
})

onEvent('recipes', event => {
    event.shapeless('kubejs:difficulty_changer', ['minecraft:clock'])
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
        //末日-击杀敌对生物时有50%的概率额外获得经验等级、金币奖励
        if(player.stages.has('difficulty_impossible'))
        {
            chance=randomNum(1,2)
            if(chance==1)
            {
                amount1=randomNum(1,3)
                amount2=randomNum(1,3)
                player.give(Item.of('numismatic-overhaul:gold_coin', amount1))
                player.addXPLevels(amount2)
            }
        }
        //困难-击杀敌对生物时有25%的概率额外获得经验等级、金币奖励
        else if(player.stages.has('difficulty_hard'))
        {
            chance=randomNum(1,4)
            if(chance==1)
            {
                amount1=randomNum(1,3)
                amount2=randomNum(1,3)
                player.give(Item.of('numismatic-overhaul:gold_coin', amount1))
                player.addXPLevels(amount2)
            }
        }
        //冒险-击杀敌对生物时有10%的概率额外获得经验等级、金币奖励
        else if(player.stages.has('difficulty_normal'))
        {
            chance=randomNum(1,10)
            if(chance==1)
            {
                //event.server.runCommand(`say 1`)
                amount1=randomNum(1,3)
                amount2=randomNum(1,3)
                player.give(Item.of('numismatic-overhaul:gold_coin', amount1))
                player.addXPLevels(amount2)
            }
        }
        
        
    }
})