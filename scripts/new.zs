import crafttweaker.api.item.FabricItemStack;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.entity.attribute.AttributeOperation;
import crafttweaker.api.entity.equipment.EquipmentSlot;
import crafttweaker.api.item.property.Rarity;

<item:botania:terra_sword>.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_speed>, "speed", 100, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:botania:terra_sword>.setRarity(Rarity.EPIC);

<item:botania:thunder_sword>.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_speed>, "speed", 100, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:botania:thunder_sword>.setRarity(Rarity.EPIC);

<item:botania:star_sword>.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_speed>, "speed", 100, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:botania:star_sword>.setRarity(Rarity.EPIC);

<item:mobz:sword>.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "damage", 5, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:mobz:sword>.setRarity(Rarity.EPIC);

<item:mythicmetals:celestium_sword>.addGlobalAttributeModifier(<attribute:minecraft:generic.knockback_resistance>, "knockback", 1, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);

<item:kubejs:qixing>.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_speed>, "speed", 0.9, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:kubejs:qixing>.addGlobalAttributeModifier(<attribute:reach-entity-attributes:reach>, "range", 3, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:kubejs:qixing>.addGlobalAttributeModifier(<attribute:reach-entity-attributes:attack_range>, "attrange", 3, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);