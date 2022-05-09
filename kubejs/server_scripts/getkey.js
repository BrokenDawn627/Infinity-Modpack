onEvent('server.load', event => {
    event.server.runCommandSilent(`scoreboard objectives add blood dummy`)
	event.server.runCommandSilent(`scoreboard objectives add shadow_cool dummy`)
})


onEvent('player.data_from_client.key_pressed', event => {
    if(event.player.getHeldItem(MAIN_HAND)=='kubejs:shadow_katana')
    {
        cool=event.server.runCommandSilent(`scoreboard players get ${event.player.name} shadow_cool`)
        if(cool<=0)
        {
            event.player.potionEffects.add('minecraft:resistance',40,4,false,false)
            event.server.runCommandSilent(`execute at ${event.player.id} run tp ${event.player.id} ^ ^1 ^5`)
            event.server.runCommandSilent(`execute at ${event.player.id} run particle minecraft:portal ${event.player.x} ${event.player.y+1} ${event.player.z} 0 0.5 0.5 0.5 50`)
            event.player.playSound('minecraft:entity.enderman.teleport')
            event.server.runCommandSilent(`scoreboard players set ${event.player.name} shadow_cool 100`)
        }
    }
})

onEvent('player.tick', event => {
	cool=event.server.runCommandSilent(`scoreboard players get ${event.player.name} shadow_cool`)
	if(cool>0)
	{
		event.server.runCommandSilent(`scoreboard players remove ${event.player.name} shadow_cool 1`)
		if(event.player.getHeldItem(MAIN_HAND)=='kubejs:shadow_katana')
		{
			if(cool==1){
				event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"Cooldown:Finish","color":"green"}`)
				event.player.playSound('minecraft:entity.arrow.hit_player')
			}
			else event.server.runCommandSilent(`title ${event.player.name} actionbar {"text":"Cooldown:${cool}","color":"red"}`)
		}
	}
})