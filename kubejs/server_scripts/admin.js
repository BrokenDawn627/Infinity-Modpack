onEvent('item.right_click', event => {
    if ( event.player.getHeldItem(MAIN_HAND) == 'kubejs:nightbreak')
           {
            
                event.player.give('kubejs:singer_sword')
                event.player.give('kubejs:bengdai')          
                event.player.give('kubejs:ruoshui') 
                event.player.give(Item.of('minecraft:bow', "{CustomModelData:1781,Damage:0,Unbreakable:1b,display:{Name:'{\"italic\":false,\"extra\":[{\"text\":\"\"},{\"color\":\"green\",\"text\":\"精灵之语\"}],\"text\":\"\"}'}}").enchant('imperishableitems:imperishable', 1)) 
                event.player.give(Item.of('minecraft:bow', "{CustomModelData:1780,Damage:0,Unbreakable:1b,display:{Lore:['{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"gray\",\"text\":\"暗影之刃  命中目标时使目标失明5秒\"}],\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"gray\",\"text\":\"吉姆哈泽德之力  潜行时射击命中目标将额外造成目标当前生命值30%的真实伤害，但使弓进入25秒冷却\"}],\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"gray\",\"text\":\"化为无形  潜行时隐身\"}],\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"gray\",\"text\":\"刺客步法  潜行时加速\"}],\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"text\":\" \"}],\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"aqua\",\"text\":\"@极限生存挑战首通-GAMEHAZED\"}],\"text\":\"\"}'],Name:'{\"italic\":false,\"extra\":[{\"text\":\"\"},{\"color\":\"gold\",\"text\":\"吉姆哈泽德之暗影\"}],\"text\":\"\"}'}}").enchant('yigd:soulbound', 1))
                event.player.give('kubejs:baigei_boots')
                event.player.give('kubejs:yecao')
                event.player.give('kubejs:zhongzi')
                event.player.give('kubejs:qixing')
           }            
})