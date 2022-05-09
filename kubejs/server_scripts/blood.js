onEvent('entity.hurt', event => {
    let target = event.getEntity()
    let player = event.getSource().getPlayer()
    let damage = event.getDamage()
    let source = event.getSource().getActual()
    let type = event.getSource().getType()


    if(player!=null && player.getHeldItem(MAIN_HAND)=='kubejs:shadow_katana')
    {
        //特效
        event.server.runCommandSilent(`execute at ${target.id} run particle minecraft:portal ${target.x} ${target.y+1} ${target.z} 0.25 0.5 0.25 0 100`)
        //累计出血量表
        event.server.runCommandSilent(`scoreboard players add ${target.id} blood 20`) 
    }

    blood_amount=event.server.runCommandSilent(`scoreboard players get ${target.id} blood`)

    if(blood_amount>=100)
    {
        event.server.runCommandSilent(`scoreboard players reset ${target.id} blood`)
        //event.server.runCommand(`say bleed`)
        event.server.runCommandSilent(`execute at ${target.id} run particle minecraft:block minecraft:redstone_block ${target.x} ${target.y+1} ${target.z} 0.25 0.5 0.25 0 100`)
        if(player!=null)
        {
            player.playSound('minecraft:entity.arrow.hit_player')
        }
        target.attack(type,target.maxHealth/10)
        
    }
})