onEvent('item.registry.armor_tiers', event => {
	event.add('balloon',tier =>{
		tier.slotProtections = [2,4,6,2] //靴子，护腿，胸甲，头盔
		tier.durabilityMultiplier = 20 //耐久倍率 基础值为 头11 胸16 腿15 鞋13
		tier.toughness = 2.5
		tier.knockbackResistance = 0.0
		tier.enchantmentValue = 20
		tier.repairIngredient = 'kubejs:balloon_ingot'
		tier.equipSound = 'minecraft:item.armor.equip_diamond'
	})
	event.add('gravilite',tier =>{
		tier.slotProtections = [3,6,7,3] //靴子，护腿，胸甲，头盔
		tier.durabilityMultiplier = 30 //耐久倍率 基础值为 头11 胸16 腿15 鞋13
		tier.toughness = 2.5
		tier.knockbackResistance = 0.0
		tier.enchantmentValue = 25
		tier.repairIngredient = 'kubejs:gravilite_ingot'
		tier.equipSound = 'minecraft:item.armor.equip_diamond'
	})
})

let armors = ['boots','leggings','chestplate','helmet']

onEvent('item.registry', event => {
	armors.forEach(a =>{
		event.create('balloon_' + a ,item => {
			item.type(a).tier('balloon')
		})
	})

	armors.forEach(a =>{
		event.create('gravilite_' + a ,item => {
			item.type(a).tier('gravilite')
		})
	})
})