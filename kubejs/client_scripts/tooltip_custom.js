onEvent("item.tooltip", tooltip => {
    tooltip.addAdvanced('minecraft:bow', (item, advanced, text) => {
		if(item.hasNBT() && item.nbt['CustomModelData'] == 1781) {
			text.add(1, "§7束缚藤蔓：命中目标时使目标定身5秒")
            text.add(2, "§7寄生种子：命中目标时给予自身 生命恢复II 5秒")
            text.add(3, "§7自然之力：潜行时射击命中目标将额外造成目标当前生命值20%的真实伤害，但使弓进入20秒冷却")
            text.add(4, "§7荆棘屏障：潜行时减免60%伤害")
            text.add(5, "")
            text.add(6, "§7@赞助者-Naughty_Clock")
			//Lore:['{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"dark_aqua\",\"text\":\"束缚藤蔓\"},{\"text\":\"  \"},{\"color\":\"gray\",\"text\":\"命中目标时使目标定身5秒\"}],\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"dark_green\",\"text\":\"寄生种子  \"},{\"color\":\"gray\",\"text\":\"命中目标时给予自身 生命恢复II 5秒\"}],\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"gold\",\"text\":\"自然之力\"},{\"text\":\"  \"},{\"color\":\"gray\",\"text\":\"潜行时射击命中目标将额外造成目标当前生命值20%的真实伤害，但使弓进入20秒冷却\"}],\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"light_purple\",\"text\":\"荆棘屏障  \"},{\"color\":\"gray\",\"text\":\"潜行时减免60%伤害\"}],\"text\":\"\"}','{\"text\":\"\"}','{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"gray\",\"text\":\"@Naughty_Clock\"}],\"text\":\"\"}'],
		}
	})
})