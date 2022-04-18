function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function randomtag(num,limits) //范围1~limit
{
    let final = [];
    //获取0-x的数
    for (let i = 0; i < num; i++) {
        let result = parseInt(Math.random() * limits)+1;
        //将数据添加到数组当中
        final[i] = result;
        //进行数组去重
        for (let v = 0; v < final.length; v++) {
            //从当前元素的下一个开始比,当前元素v,下一个元素+1
            for (let j = v + 1; j < final.length; j++) {
                //判断arr[i]是否相等
                if (final[v] == final[j]) {
                    //如果相等,删除j
                    final.splice(j, 1);
                    j--; //需要重新比较当前位置,避免相邻位置出现重复数字
                    i--; //需要重新生成当前重复位置的随机数
                }
            }
        }
    }
    return final
}

function randomloot(num,limits) //范围0~limit-1
{
    let final = [];
    //获取0-x的数
    for (let i = 0; i < num; i++) {
        let result = parseInt(Math.random() * limits);
        //将数据添加到数组当中
        final[i] = result;
        //进行数组去重
        for (let v = 0; v < final.length; v++) {
            //从当前元素的下一个开始比,当前元素v,下一个元素+1
            for (let j = v + 1; j < final.length; j++) {
                //判断arr[i]是否相等
                if (final[v] == final[j]) {
                    //如果相等,删除j
                    final.splice(j, 1);
                    j--; //需要重新比较当前位置,避免相邻位置出现重复数字
                    i--; //需要重新生成当前重复位置的随机数
                }
            }
        }
    }
    return final
}



onEvent('entity.spawned', event => {
    
    let entity=event.getEntity()
    //event.server.runCommand(`say ${entity.name}`)

    if(entity.isLiving()&&entity.monster)
    {
        
        //5%成为精英怪
        jingying_chance=randomNum(1,20)
        if(jingying_chance==1)
        {
            //基础特性-血量翻倍,攻击力翻倍
            entity.tags.add('jingying')
            entity.setMaxHealth(entity.maxHealth*2)
            entity.setHealth(entity.maxHealth)
            entity.setCustomName("§d精英§r "+entity.name)

            //生成随机数的范围
            let limits = 8;
            //生成的数字数量
            let num = 4;
            finalTags = randomtag(num, limits)

            for(let i=0;i<finalTags.length;i++)
            {
                //苦力怕不能拥有的词条
                if(entity.type.indexOf("creeper")<0)
                {
                    //1迅捷-怪物的移动速度变快-33%
                    if(finalTags[i]==1)
                    {
                        entity.tags.add('xunjie')
                        entity.setCustomName("§b迅捷§r " + entity.name)
                    }
                    //2磐石-护甲+100%+10 但移动速度变慢 且无法被击退-33%
                    if(finalTags[i]==2)
                    {
                        entity.tags.add('panshi')
                        entity.setCustomName("§8磐石§r " + entity.name)
                    }
                    //6吸血-以造成伤害的100%回复生命值
                    if(finalTags[i]==6)
                    {
                        entity.tags.add('xixue')
                        entity.setCustomName("§4吸血§r " + entity.name)
                    }
                    //7隐身
                    if(finalTags[i]==7)
                    {
                        entity.tags.add('yinshen')
                        entity.setCustomName("§7隐身§r " + entity.name)
                    }
                }
                //3反甲-攻击者将受到30%伤害的反伤-50%
                if(finalTags[i]==3)
                {
                    entity.tags.add('fanjia')
                    entity.setCustomName("§c反甲§r " + entity.name)
                }
                //4致盲-玩家被攻击时会失明
                if(finalTags[i]==4)
                {
                    entity.tags.add('zhimang')
                    entity.setCustomName("§0致盲§r " + entity.name)
                }
                //5寒霜-玩家被攻击时会虚弱并减速
                if(finalTags[i]==5)
                {
                    entity.tags.add('hanshuang')
                    entity.setCustomName("§9寒霜§r " + entity.name)
                }
                //8重生-怪物将持有不死图腾
                if(finalTags[i]==8)
                {
                    entity.tags.add('chongsheng')
                    entity.setCustomName("§6重生§r " + entity.name)
                }
            }

        }  
         
    }
})


onEvent('entity.death', event => {
    
    let entity = event.getEntity()
    let player = event.getSource().getPlayer()
    let immediate = event.getSource().getImmediate()
    //event.server.runCommand(`say ${entity.name}`)
    if(entity.tags.contains('jingying'))
    {
        if (player != null) {
            //event.server.runCommand(`say ${entity.name}`)
            customd=event.server.runCommandSilent(`scoreboard players get ${player.name} customd`)
            //掉落随机数量的金币与等级
            //amount1 = Math.floor(randomNum(8, 15) * customd * 0.01)
            //player.give(Item.of('numismatic-overhaul:gold_coin', amount1))
            amount2 = Math.floor(randomNum(8, 15) * customd * 0.02)
            player.addXPLevels(amount2)
            //掉落特殊物品
            lootno = randomloot(3, jingying_loot.length)
            for (let i = 0; i < lootno.length; i++) {
                player.give(jingying_loot[lootno[i]])
            }
        }
    }
})

onEvent('level.tick', event => {

    let level=event.level
    let entities=level.getEntities()
    i=0
    while(i<entities.size())
    {
        if(!entities[i].tags.contains('finish'))
        {
            //精英
            if(entities[i].tags.contains('jingying'))
            {
                result=event.server.runCommandSilent(`attribute ${entities[i].id} minecraft:generic.attack_damage base get`)
                //event.server.runCommand(`say ${result}`)
                event.server.runCommandSilent(`attribute ${entities[i].id} minecraft:generic.attack_damage base set ${result*2}`)
                event.server.runCommandSilent(`scale set pehkui:base 1.5 ${entities[i].id}`)
                entities[i].tags.add('finish')
            }
            //迅捷
            if(entities[i].tags.contains('xunjie'))
            {
                //result=event.server.runCommandSilent(`attribute ${entities[i].id} minecraft:generic.movement_speed base get`)
                //event.server.runCommand(`say ${result}`)
                entities[i].potionEffects.add('minecraft:speed',20*99999,2)
                //event.server.runCommandSilent(`attribute ${entities[i].id} minecraft:generic.movement_speed base set 0.5`)
                entities[i].tags.add('finish')
            }
            //磐石
            if(entities[i].tags.contains('panshi'))
            {
                result=event.server.runCommandSilent(`attribute ${entities[i].id} minecraft:generic.armor base get`)
                //event.server.runCommandSilent(`attribute ${entities[i].id} minecraft:generic.movement_speed base set 0.2`)
                event.server.runCommandSilent(`attribute ${entities[i].id} minecraft:generic.knockback_resistance base set 1`)
                event.server.runCommandSilent(`attribute ${entities[i].id} minecraft:generic.armor base set ${result*2+10}`)
                entities[i].potionEffects.add('minecraft:slowness',20*99999,2)
                entities[i].tags.add('finish')
            }
            //隐身
            if(entities[i].tags.contains('yinshen'))
            {
                entities[i].potionEffects.add('minecraft:invisibility',20*99999,0,false,false)
                entities[i].tags.add('finish')
            }
            //重生
            if(entities[i].tags.contains('chongsheng'))
            {
                entities[i].setHeldItem(OFF_HAND, 'minecraft:totem_of_undying')
                entities[i].tags.add('finish')
            }
            
        }
        i++
    }
    
    
})

onEvent('entity.hurt', event => {
    let target = event.getEntity()
    let player = event.getSource().getPlayer()
    let damage = event.getDamage()
    let immediate = event.getSource().getImmediate()

    
    if(player!=null)
    {
        //反甲 反真伤10% 上限为血量50%
        if(target.tags.contains('fanjia'))
        {
            //event.server.runCommand(`say 1`)
            if(damage*0.1<player.maxHealth/2) damage_result=damage*0.1
            else damage_result=player.maxHealth/2
            player.attack(-damage_result)
        }
    }
})

onEvent('entity.hurt',event =>{
    let target = event.getEntity()
    let source = event.getSource().getActual()
    let damage = event.getDamage()
    
    if(target.player)
    {
        if (source != null) 
        {
            if (source.tags.contains('zhimang')) 
            {
                //致盲-玩家被攻击时会失明
                target.potionEffects.add('minecraft:blindness',100,0,false,false)
            }
            if (source.tags.contains('hanshuang')) 
            {
                //寒霜-玩家被攻击时会虚弱并减速
                target.potionEffects.add('minecraft:weakness',100,0,false,false)
                target.potionEffects.add('minecraft:slowness',100,0,false,false)
            }
            if (source.tags.contains('xixue')) 
            {
                //吸血-以造成伤害的100%回复生命值
                source.heal(damage)
            }
            
        }
          
    }
    
})

onEvent('item.right_click', event => {
    if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:random_enchant') {
        
        lootno = randomloot(1, jingying_loot.length)
        for (let i = 0; i < lootno.length; i++) {
            event.player.give(jingying_loot[lootno[i]])
        }
        event.player.mainHandItem.count -= 1
    }
})