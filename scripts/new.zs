import crafttweaker.api.item.FabricItemStack;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.entity.attribute.AttributeOperation;
import crafttweaker.api.entity.equipment.EquipmentSlot;
import crafttweaker.api.item.property.Rarity;

<item:botania:terra_sword>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_speed>, "speed", 100, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:botania:terra_sword>.setRarity(Rarity.EPIC);

<item:botania:thunder_sword>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_speed>, "speed", 100, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:botania:thunder_sword>.setRarity(Rarity.EPIC);

<item:botania:star_sword>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_speed>, "speed", 100, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:botania:star_sword>.setRarity(Rarity.EPIC);

<item:mobz:sword>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "damage", 5, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:mobz:sword>.setRarity(Rarity.EPIC);

<item:mythicmetals:celestium_sword>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.knockback_resistance>, "knockback", 1, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);

<item:kubejs:qixing>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.attack_speed>, "speed", 0.9, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:kubejs:qixing>.anyDamage().addGlobalAttributeModifier(<attribute:reach-entity-attributes:reach>, "range", 3, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
<item:kubejs:qixing>.anyDamage().addGlobalAttributeModifier(<attribute:reach-entity-attributes:attack_range>, "attrange", 3, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);

<item:kubejs:baigei_boots>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor>, "a", 7, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:feet>]);
<item:kubejs:baigei_boots>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.armor_toughness>, "b", 4, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:feet>]);
<item:kubejs:baigei_boots>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.max_health>, "c", 6, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:feet>]);
<item:kubejs:baigei_boots>.anyDamage().addGlobalAttributeModifier(<attribute:minecraft:generic.knockback_resistance>, "d", 1, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:feet>]);
<item:kubejs:baigei_boots>.anyDamage().addGlobalAttributeModifier(<attribute:stepheightentityattribute:stepheight>, "e", 1, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:feet>]);

<item:kubejs:yecao>.anyDamage().addGlobalAttributeModifier(<attribute:stepheightentityattribute:stepheight>, "step", 1, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);