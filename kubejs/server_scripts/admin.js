onEvent('item.right_click', event => {
    if ( event.player.getHeldItem(MAIN_HAND) == 'kubejs:nightbreak')
           {
            
                event.player.give('kubejs:singer_sword')
                event.player.give('kubejs:bengdai')          
                event.player.give('kubejs:ruoshui') 
                event.player.give(Item.of('minecraft:bow', "{CustomModelData:1781,Damage:0,Unbreakable:1b,display:{Lore:['{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"dark_aqua\",\"text\":\"束缚藤蔓\"},{\"text\":\"  \"},{\"color\":\"gray\",\"text\":\"命中目标时使目标定身5秒\"}],\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"dark_green\",\"text\":\"寄生种子  \"},{\"color\":\"gray\",\"text\":\"命中目标时给予自身 生命恢复II 5秒\"}],\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"gold\",\"text\":\"自然之力\"},{\"text\":\"  \"},{\"color\":\"gray\",\"text\":\"潜行时射击命中目标将额外造成目标当前生命值20%的真实伤害，但使弓进入20秒冷却\"}],\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"light_purple\",\"text\":\"荆棘屏障  \"},{\"color\":\"gray\",\"text\":\"潜行时减免60%伤害\"}],\"text\":\"\"}','{\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"gray\",\"text\":\"@Naughty_Clock\"}],\"text\":\"\"}'],Name:'{\"italic\":false,\"extra\":[{\"text\":\"\"},{\"color\":\"green\",\"text\":\"精灵之语\"}],\"text\":\"\"}'}}").enchant('imperishableitems:imperishable', 1)) 
           }            
})