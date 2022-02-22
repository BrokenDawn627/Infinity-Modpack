import crafttweaker.api.entity.attribute.AttributeOperation;
import crafttweaker.api.entity.equipment.EquipmentSlot;
import crafttweaker.api.recipe.SmithingRecipeManager;
import crafttweaker.api.recipe.CraftingTableRecipeManager;
import crafttweaker.api.item.IItemStack;

craftingTable.addShapeless("infinity_book", <item:patchouli:guide_book>.withTag({"patchouli:book": "patchouli:infinity_book" as string}), [<item:minecraft:book>, <item:minecraft:diamond>]);

smithing.addRecipe("upgrade_core", <item:kubejs:upgrade_core_evolution>, <item:mcda:upgrade_core>, <item:betternether:nether_ruby_block>);


craftingTable.addShapeless("a1",<item:mcda:archers_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-993074833, -2038413873, -1451363655, 122682076], Amount: 4.0 as double}]}),
 [<item:mcda:archers_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a2",<item:mcda:archers_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-498331239, -1403500226, -1948208434, 369656951], Amount: 8.0 as double}]}),
 [<item:mcda:archers_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a3",<item:mcda:archers_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1972064644, 1790919196, -1134870966, 2032015293], Amount: 6.0 as double}]}),
 [<item:mcda:archers_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a4",<item:mcda:archers_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1747557258, 973818050, -1658129035, -742089489], Amount: 4.0 as double}]}),
 [<item:mcda:archers_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a5",<item:mcda:cave_crawler_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1445957094, 1000293201, -1662252697, 1790377596], Amount: 4.0 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.movement_speed" as string, Operation: 1 as int, UUID: [-580569850, 2143897984, -1190941953, 1833542734], Amount: 0.025 as double}]}),
 [<item:mcda:cave_crawler_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a6",<item:mcda:cave_crawler_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-34594903, 681067604, -1194813531, -632972469], Amount: 8.0 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.movement_speed" as string, Operation: 1 as int, UUID: [-1495588751, 948716994, -1681028431, 1389941036], Amount: 0.025 as double}]}),
 [<item:mcda:cave_crawler_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a7",<item:mcda:cave_crawler_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1905563685, -922728325, -1232008163, 1224684638], Amount: 7.0 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.movement_speed" as string, Operation: 1 as int, UUID: [1537402431, 739331800, -1637195866, -1684413055], Amount: 0.025 as double}]}),
 [<item:mcda:cave_crawler_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a8",<item:mcda:cave_crawler_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [540514674, -36092615, -1728224745, -127475129], Amount: 4.0 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.movement_speed" as string, Operation: 1 as int, UUID: [-741878653, -694270010, -2116086541, -1043795084], Amount: 0.025 as double}]}),
 [<item:mcda:cave_crawler_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a9",<item:mcda:black_wolf_armor_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [1608452677, -2110960013, -2104879730, 2145297252], Amount: 4.0 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.attack_speed" as string, Operation: 1 as int, UUID: [-1531463365, -430948331, -1338555706, 1518870697], Amount: 0.025 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [-1712744341, 1952205003, -1620249057, -1423015628], Amount: 0.025 as double}]}),
 [<item:mcda:black_wolf_armor_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a10",<item:mcda:black_wolf_armor_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [689429380, -2125970271, -1732334251, -458927021], Amount: 8.0 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [1828986709, -769636144, -1208348424, 1943804207], Amount: 0.025 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.attack_speed" as string, Operation: 1 as int, UUID: [-553532842, 121848744, -1315009990, 812894753], Amount: 0.025 as double}]}),
 [<item:mcda:black_wolf_armor_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a11",<item:mcda:black_wolf_armor_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-52248851, 1386171609, -1099481836, 1792734145], Amount: 7.0 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [1865190965, -1902099332, -1389983923, 1939804937], Amount: 0.025 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.attack_speed" as string, Operation: 1 as int, UUID: [1239461181, 1848788383, -1995732084, -1605053109], Amount: 0.025 as double}]}),
 [<item:mcda:black_wolf_armor_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a12",<item:mcda:black_wolf_armor_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-262400312, -1808972510, -1185038661, 1213909963], Amount: 4.0 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [-180178326, -888322925, -1305590012, 1338921474], Amount: 0.025 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.attack_speed" as string, Operation: 1 as int, UUID: [974442687, -1190376972, -1117961781, 1934011927], Amount: 0.025 as double}]}),
 [<item:mcda:black_wolf_armor_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a13",<item:mcda:arctic_fox_armor_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1004416050, 2000964080, -1823741384, -1414395293], Amount: 4.0 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [-759747380, -835367642, -1869708191, 1267835795], Amount: 0.025 as double}]}),
 [<item:mcda:arctic_fox_armor_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a14",<item:mcda:arctic_fox_armor_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1535717582, 1632783503, -1666675718, 2004239083], Amount: 8.0 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [-1906541729, 198394207, -1568144152, -604773131], Amount: 0.025 as double}]}),
 [<item:mcda:arctic_fox_armor_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a15",<item:mcda:arctic_fox_armor_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1512447374, -761575175, -1155061177, 134354865], Amount: 6.0 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [-138394168, -1803664886, -1365301383, -1533848254], Amount: 0.025 as double}]}),
 [<item:mcda:arctic_fox_armor_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a16",<item:mcda:arctic_fox_armor_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1031159413, 1030701910, -1821739393, -1816920421], Amount: 4.0 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [1981059478, 1979402288, -1603298596, 380803087], Amount: 0.025 as double}]}),
 [<item:mcda:arctic_fox_armor_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a17",<item:mcda:rugged_climbing_gear_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [1304520119, 281756607, -2142176714, -1822634622], Amount: 4.0 as double}]}),
 [<item:mcda:rugged_climbing_gear_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a18",<item:mcda:rugged_climbing_gear_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [964647586, -1643427830, -1127429727, -471619206], Amount: 8.0 as double}]}),
 [<item:mcda:rugged_climbing_gear_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a19",<item:mcda:rugged_climbing_gear_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [412359068, -590591586, -1714045578, 1635574943], Amount: 7.0 as double}]}),
 [<item:mcda:rugged_climbing_gear_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a20",<item:mcda:rugged_climbing_gear_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-438616552, -2042672229, -1247140378, -1270472244], Amount: 4.0 as double}]}),
 [<item:mcda:rugged_climbing_gear_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a21",<item:mcda:goat_gear_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-2119477907, -964931603, -1142079878, 692112045], Amount: 4.0 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.knockback_resistance" as string, Operation: 0 as int, UUID: [-236326474, 1756712956, -1986709007, -892328250], Amount: 0.2 as double}]}),
 [<item:mcda:goat_gear_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a22",<item:mcda:goat_gear_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-704619036, -1030731634, -1452237761, -2038676212], Amount: 8.0 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.knockback_resistance" as string, Operation: 0 as int, UUID: [1914404672, -68206080, -1956490162, -965878677], Amount: 0.2 as double}]}),
 [<item:mcda:goat_gear_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a23",<item:mcda:goat_gear_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1794558006, -1007009168, -2075134064, 165190925], Amount: 7.0 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.knockback_resistance" as string, Operation: 0 as int, UUID: [-1752756405, -759215243, -1916020454, 704632726], Amount: 0.2 as double}]}),
 [<item:mcda:goat_gear_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a24",<item:mcda:goat_gear_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [213054099, 342443868, -1949024115, -1122247047], Amount: 4.0 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.knockback_resistance" as string, Operation: 0 as int, UUID: [-1211530908, -572043275, -1417250413, 553598129], Amount: 0.2 as double}]}),
 [<item:mcda:goat_gear_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a25",<item:mcda:splendid_robe_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [1064508401, 2119976004, -1733278423, 185329074], Amount: 5.0 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [461671546, -1666628517, -1571335543, -103139366], Amount: 0.075 as double}]}),
 [<item:mcda:splendid_robe_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a26",<item:mcda:splendid_robe_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [262968007, -104316909, -1202036446, 1075490201], Amount: 4.0 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [1482480985, 1987660808, -1324719855, -1840350077], Amount: 0.075 as double}]}),
 [<item:mcda:splendid_robe_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a27",<item:mcda:ember_robe_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-730100821, -998292452, -1884292211, -167953982], Amount: 3.0 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [2010193543, 506350622, -1929984141, -300793136], Amount: 0.05 as double}]}),
 [<item:mcda:ember_robe_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a28",<item:mcda:ember_robe_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1224751930, 998130577, -1797456939, -1591560290], Amount: 5.0 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [1739078243, 941117121, -1970723510, 2101567782], Amount: 0.05 as double}]}),
 [<item:mcda:ember_robe_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a29",<item:mcda:ember_robe_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-157202868, 938690838, -1816142147, -169681544], Amount: 5.0 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [-1391838204, -93237640, -1926164322, 2101404197], Amount: 0.05 as double}]}),
 [<item:mcda:ember_robe_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a30",<item:mcda:verdant_robe_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [705043193, -1982119693, -1260196368, -658394066], Amount: 3.0 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [1783730923, -1068350172, -1952948232, 18747331], Amount: 0.05 as double}]}),
 [<item:mcda:verdant_robe_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a31",<item:mcda:verdant_robe_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-2110678202, -1121170122, -1244909293, 2052303091], Amount: 5.0 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [87746075, 11027304, -1148786944, -601369384], Amount: 0.05 as double}]}),
 [<item:mcda:verdant_robe_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a32",<item:mcda:verdant_robe_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [1658358973, -704362355, -1074774391, 1160986854], Amount: 5.0 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [-1621083367, 1055735892, -1736472132, 226975149], Amount: 0.05 as double}]}),
 [<item:mcda:verdant_robe_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a33",<item:mcda:spider_armor_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [592531652, -500675896, -1333114258, 808326917], Amount: 4.0 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.attack_speed" as string, Operation: 1 as int, UUID: [-447159381, -341160996, -1800337489, 579461112], Amount: 0.0375 as double}]}),
 [<item:mcda:spider_armor_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a34",<item:mcda:spider_armor_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1970699592, 1894665812, -1896019825, -1386380856], Amount: 7.0 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.attack_speed" as string, Operation: 1 as int, UUID: [67026039, -1198046570, -1540400465, -552249880], Amount: 0.0375 as double}]}),
 [<item:mcda:spider_armor_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a35",<item:mcda:spider_armor_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [68353370, 1594181531, -2042503419, -733281108], Amount: 6.0 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.attack_speed" as string, Operation: 1 as int, UUID: [135396306, 1434602704, -1869856851, -243474041], Amount: 0.0375 as double}]}),
 [<item:mcda:spider_armor_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a36",<item:mcda:spider_armor_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [1468733282, 1020740639, -1156940579, -51595135], Amount: 4.0 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.attack_speed" as string, Operation: 1 as int, UUID: [-894729767, -1981856281, -1823188676, -94227799], Amount: 0.0375 as double}]}),
 [<item:mcda:spider_armor_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a37",<item:mcda:souldancer_robe_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1786388920, 1775257143, -1638680254, -991527714], Amount: 4.0 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [-1478901482, 895633960, -1291108954, -1890641551], Amount: 2.0 as double}]}),
 [<item:mcda:souldancer_robe_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a38",<item:mcda:souldancer_robe_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1968922368, -1098168010, -1146438904, 1345893199], Amount: 8.0 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [2086860777, -1065005500, -1362797666, -1149394002], Amount: 2.0 as double}]}),
 [<item:mcda:souldancer_robe_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a39",<item:mcda:souldancer_robe_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [24608222, -236042656, -1404726667, -2138070528], Amount: 7.0 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [-2011642454, 1512065185, -1701773916, -1226679977], Amount: 2.0 as double}]}),
 [<item:mcda:souldancer_robe_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a40",<item:mcda:souldancer_robe_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-983897288, -1158132012, -2012790020, -384560767], Amount: 4.0 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [-1173910896, -531282835, -1320599717, 941512368], Amount: 2.0 as double}]}),
 [<item:mcda:souldancer_robe_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a41",<item:mcda:troubadour_armor_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-274934984, -38517433, -1830443374, 1842983585], Amount: 5.0 as double}]}),
 [<item:mcda:troubadour_armor_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a42",<item:mcda:troubadour_armor_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1854221075, -721271072, -1423498941, 1941806707], Amount: 7.0 as double}]}),
 [<item:mcda:troubadour_armor_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a43",<item:mcda:troubadour_armor_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1764098961, 1137788799, -1384496242, 2139188270], Amount: 6.0 as double}]}),
 [<item:mcda:troubadour_armor_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a44",<item:mcda:troubadour_armor_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [205532290, -1627504547, -1390416661, 786609318], Amount: 5.0 as double}]}),
 [<item:mcda:troubadour_armor_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a45",<item:mcda:unstable_robe_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [258660745, -1010809634, -1193892886, -181847185], Amount: 5.0 as double}]}),
 [<item:mcda:unstable_robe_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a46",<item:mcda:unstable_robe_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1032366742, -1436268711, -1398320923, -309528462], Amount: 7.0 as double}]}),
 [<item:mcda:unstable_robe_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a47",<item:mcda:unstable_robe_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-210981832, -1103673053, -1185485435, -1478991782], Amount: 6.0 as double}]}),
 [<item:mcda:unstable_robe_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a48",<item:mcda:unstable_robe_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [1753144457, 704790942, -1105558455, 859774391], Amount: 5.0 as double}]}),
 [<item:mcda:unstable_robe_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a49",<item:mcda:frost_bite_armor_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [2055812929, -463122921, -2104612374, -140686213], Amount: 5.0 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.movement_speed" as string, Operation: 1 as int, UUID: [289102362, -208453446, -1777993442, 1708591906], Amount: 0.075 as double}]}),
 [<item:mcda:frost_bite_armor_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a50",<item:mcda:frost_bite_armor_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1904914316, -931247645, -1525891588, 1908326751], Amount: 9.0 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.movement_speed" as string, Operation: 1 as int, UUID: [-1940074507, 170411116, -1557247271, 763432172], Amount: 0.075 as double}]}),
 [<item:mcda:frost_bite_armor_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a51",<item:mcda:frost_bite_armor_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [445221672, -1312469811, -1236060439, -1783491880], Amount: 7.0 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.movement_speed" as string, Operation: 1 as int, UUID: [-14539347, 121128101, -1450027087, 1152922364], Amount: 0.075 as double}]}),
 [<item:mcda:frost_bite_armor_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a52",<item:mcda:frost_bite_armor_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [2115293663, -101431896, -1278068161, 1643882383], Amount: 5.0 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.movement_speed" as string, Operation: 1 as int, UUID: [919251376, -1552527596, -1315222159, -816667023], Amount: 0.075 as double}]}),
 [<item:mcda:frost_bite_armor_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a53",<item:mcda:wither_armor_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [2075299038, 1980256236, -1102828482, -2096106070], Amount: 5.0 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [-248570430, -1848685722, -1989762898, 1937512397], Amount: 0.0375 as double}]}),
 [<item:mcda:wither_armor_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a54",<item:mcda:wither_armor_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-539591518, -1698674624, -1769750497, -653541540], Amount: 9.0 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [-1334000775, 1213416777, -1741098084, -249826441], Amount: 0.0375 as double}]}),
 [<item:mcda:wither_armor_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a55",<item:mcda:wither_armor_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [1287067401, 281102669, -1968419745, -761936312], Amount: 7.0 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [-1214856440, 2119188529, -2021408188, -144643528], Amount: 0.0375 as double}]}),
 [<item:mcda:wither_armor_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a56",<item:mcda:wither_armor_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1222341731, -198557053, -1316234939, 68464050], Amount: 5.0 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [417521414, -1625731654, -1222316037, 409335314], Amount: 0.0375 as double}]}),
 [<item:mcda:wither_armor_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a57",<item:mcda:highland_armor_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-152199991, -690532966, -1945684297, 1784759922], Amount: 4.0 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [116669230, 664555387, -1964560405, -1091988060], Amount: 0.0375 as double}]}),
 [<item:mcda:highland_armor_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a58",<item:mcda:highland_armor_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-887397962, -1534574140, -1484861903, 1165471292], Amount: 8.0 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [2063732127, 2090879160, -2134618641, -1566425595], Amount: 0.0375 as double}]}),
 [<item:mcda:highland_armor_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a59",<item:mcda:highland_armor_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-802931363, 739002138, -1386185595, 1793685066], Amount: 7.0 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [1284731409, -1223211858, -1190763078, 667150087], Amount: 0.0375 as double}]}),
 [<item:mcda:highland_armor_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a60",<item:mcda:highland_armor_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [1663105318, -803256306, -1813183023, -1479310809], Amount: 4.0 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [716910377, -456637254, -1792125646, 2091742294], Amount: 0.0375 as double}]}),
 [<item:mcda:highland_armor_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a61",<item:mcda:heros_armor_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1649384502, 189940665, -2043490894, -1883386237], Amount: 6.0 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [767555134, 1014253572, -2090760688, -2090594911], Amount: 2.0 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.attack_speed" as string, Operation: 1 as int, UUID: [1606698276, 616386519, -1214739339, -1922686288], Amount: 0.0375 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [-1373515644, 1362185627, -1883976471, 1691699889], Amount: 0.075 as double}]}),
 [<item:mcda:heros_armor_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a62",<item:mcda:heros_armor_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.attack_speed" as string, Operation: 1 as int, UUID: [-1134599581, 1223050512, -1233121545, -776848252], Amount: 0.0375 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-288672287, -1609874587, -1647632758, 1033270822], Amount: 11.0 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [-522335946, -305051805, -1712778698, 946481194], Amount: 2.0 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [383860642, 436227849, -1743308388, 1841867047], Amount: 0.075 as double}]}),
 [<item:mcda:heros_armor_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a63",<item:mcda:heros_armor_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.attack_speed" as string, Operation: 1 as int, UUID: [-1680157932, 97864848, -1229352481, 873581288], Amount: 0.0375 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [1145850001, -142193128, -1519064184, 565382332], Amount: 9.0 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [-1577977325, 516309314, -1757709458, 26161926], Amount: 2.0 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [137234731, -1869135102, -1881529184, -596096680], Amount: 0.075 as double}]}),
 [<item:mcda:heros_armor_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a64",<item:mcda:heros_armor_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.attack_speed" as string, Operation: 1 as int, UUID: [-1240941336, 1908363175, -2030739538, 69783001], Amount: 0.0375 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1009227192, -1977267759, -1303814180, -2049216079], Amount: 6.0 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [1117167807, -1569370460, -1941458052, -1385865141], Amount: 2.0 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [1937389007, 658460512, -1637391569, 726230851], Amount: 0.075 as double}]}),
 [<item:mcda:heros_armor_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a65",<item:mcda:full_metal_armor_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1351842301, 1815102102, -1626588919, 1243728792], Amount: 6.0 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.movement_speed" as string, Operation: 1 as int, UUID: [63114143, -1647361317, -1857228145, 1036076810], Amount: -0.025 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [-1887575304, 841698579, -1602654346, -510923855], Amount: 0.05 as double}]}),
 [<item:mcda:full_metal_armor_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a66",<item:mcda:full_metal_armor_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-214626790, -1419754236, -2019339747, 1315811185], Amount: 11.0 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.movement_speed" as string, Operation: 1 as int, UUID: [795833808, 6833614, -1942463985, -856525494], Amount: -0.025 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [175872797, -1506193700, -1672028418, -835443650], Amount: 0.05 as double}]}),
 [<item:mcda:full_metal_armor_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a67",<item:mcda:full_metal_armor_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1049109182, -162969842, -1287211997, -474729880], Amount: 9.0 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.movement_speed" as string, Operation: 1 as int, UUID: [-455902525, -270711667, -1555237636, 1456136808], Amount: -0.025 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [-64802645, 344146111, -1313071983, 1452549949], Amount: 0.05 as double}]}),
 [<item:mcda:full_metal_armor_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a68",<item:mcda:full_metal_armor_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [690656714, -1829287366, -1636940796, -425105908], Amount: 6.0 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.movement_speed" as string, Operation: 1 as int, UUID: [799411139, 854017669, -1911428369, 2141112204], Amount: -0.025 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [541551177, 623397354, -1810203760, -1436432930], Amount: 0.05 as double}]}),
 [<item:mcda:full_metal_armor_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a69",<item:mcda:sturdy_shulker_armor_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.knockback_resistance" as string, Operation: 0 as int, UUID: [2126290904, 1644773615, -1730026659, 290865776], Amount: 0.2 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [1057283624, 287982120, -1654956238, -584670191], Amount: 5.0 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [458451836, -711635947, -1526045582, 289809418], Amount: 3.0 as double}]}),
 [<item:mcda:sturdy_shulker_armor_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a70",<item:mcda:sturdy_shulker_armor_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.knockback_resistance" as string, Operation: 0 as int, UUID: [-213830308, 1550667732, -1929091394, 1586236343], Amount: 0.2 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1216605164, -552317232, -1949124429, -1927943917], Amount: 10.0 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [1126953901, 1529105682, -1395778150, 1033909256], Amount: 3.0 as double}]}),
 [<item:mcda:sturdy_shulker_armor_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a71",<item:mcda:sturdy_shulker_armor_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.knockback_resistance" as string, Operation: 0 as int, UUID: [-1937472904, -986299154, -1934126599, -861434526], Amount: 0.2 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-263658178, -1824505362, -1819439018, 2102140072], Amount: 8.0 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [-2077157813, -1558363367, -1838733006, 41668006], Amount: 3.0 as double}]}),
 [<item:mcda:sturdy_shulker_armor_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a72",<item:mcda:sturdy_shulker_armor_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.knockback_resistance" as string, Operation: 0 as int, UUID: [-1401011725, -102150960, -1312140477, -1914428151], Amount: 0.2 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-37200610, -1150464323, -1111678330, 1239890176], Amount: 5.0 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [1796037089, 1374046591, -1784525946, 19120728], Amount: 3.0 as double}]}),
 [<item:mcda:sturdy_shulker_armor_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a73",<item:mcda:gilded_glory_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [1732149315, 1891061718, -1955842430, 887897953], Amount: 5.0 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.attack_speed" as string, Operation: 1 as int, UUID: [142425151, -1413461689, -1425501160, 1780174572], Amount: 0.05 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [1376502445, -1763423023, -1741671212, -81856918], Amount: 2.0 as double}]}),
 [<item:mcda:gilded_glory_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a74",<item:mcda:gilded_glory_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-2114304053, -1404550807, -1417536676, -354537843], Amount: 10.0 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.attack_speed" as string, Operation: 1 as int, UUID: [1037075502, 1395540261, -1694057513, 1349525015], Amount: 0.05 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [1226858180, 531316865, -1743746201, -1880040612], Amount: 2.0 as double}]}),
 [<item:mcda:gilded_glory_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a75",<item:mcda:gilded_glory_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [707844744, -1036497503, -1314094663, 1171480389], Amount: 8.0 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.attack_speed" as string, Operation: 1 as int, UUID: [-1569738646, 1902136381, -1614506773, 118681734], Amount: 0.05 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [-1352940019, -1557180983, -1559633580, -162412706], Amount: 2.0 as double}]}),
 [<item:mcda:gilded_glory_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a76",<item:mcda:gilded_glory_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1944034327, -1972813040, -1670772050, -1045193807], Amount: 5.0 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.attack_speed" as string, Operation: 1 as int, UUID: [-1012181892, 885147754, -1858627413, -1122715823], Amount: 0.05 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [-1068718214, -353745253, -2068733401, 43748528], Amount: 2.0 as double}]}),
 [<item:mcda:gilded_glory_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a77",<item:mcda:royal_guard_armor_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [340179494, -1887089597, -2094530501, 986233061], Amount: 0.075 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-486863099, -826258687, -1527204726, -1439954793], Amount: 5.0 as double}]}),
 [<item:mcda:royal_guard_armor_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a78",<item:mcda:royal_guard_armor_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [917302264, 1922121938, -1662133956, 552766071], Amount: 0.075 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [568208385, 1732724424, -1886960792, 1734973539], Amount: 10.0 as double}]}),
 [<item:mcda:royal_guard_armor_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a79",<item:mcda:royal_guard_armor_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [-1761697516, 671305551, -1473211660, -679250312], Amount: 0.075 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [523967984, 370952972, -1803441887, -1399985669], Amount: 8.0 as double}]}),
 [<item:mcda:royal_guard_armor_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a80",<item:mcda:royal_guard_armor_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [-1448382083, 1399276461, -1758362062, 232320240], Amount: 0.075 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [815002524, 1249591844, -1443367858, -189995309], Amount: 5.0 as double}]}),
 [<item:mcda:royal_guard_armor_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a81",<item:mcda:frost_armor_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [1506353806, 521227284, -1553219147, 26861064], Amount: 5.0 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [44692173, 2046118709, -1566154587, 696037654], Amount: 2.0 as double}]}),
 [<item:mcda:frost_armor_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a82",<item:mcda:frost_armor_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-468144473, 944655981, -1576360662, -1184785185], Amount: 9.0 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [1213160440, -589019835, -1388333976, 1475115924], Amount: 2.0 as double}]}),
 [<item:mcda:frost_armor_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a83",<item:mcda:frost_armor_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [1991419294, 755385442, -2018815266, 949153062], Amount: 7.0 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [356463889, 124012937, -1842851512, -2139287573], Amount: 2.0 as double}]}),
 [<item:mcda:frost_armor_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a84",<item:mcda:frost_armor_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [1653187924, -1184740055, -1623935155, -1103795686], Amount: 5.0 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [573993436, -416660601, -1987235810, 644367586], Amount: 2.0 as double}]}),
 [<item:mcda:frost_armor_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a85",<item:mcda:curious_armor_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1339185472, -1371650659, -1596253747, 787721792], Amount: 5.0 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [2023717117, 1120159762, -1278392179, 2086817809], Amount: 2.0 as double}]}),
 [<item:mcda:curious_armor_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a86",<item:mcda:curious_armor_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [422451938, 1479102362, -1186943100, -725985547], Amount: 9.0 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [-633035298, -1898821162, -1364745688, 47884748], Amount: 2.0 as double}]}),
 [<item:mcda:curious_armor_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a87",<item:mcda:curious_armor_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-373565783, 1384662453, -1228377364, -1218534878], Amount: 7.0 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [1295129992, 417416250, -1359754281, -1253133000], Amount: 2.0 as double}]}),
 [<item:mcda:curious_armor_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a88",<item:mcda:curious_armor_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [1276836658, -833666947, -1941288892, -142523597], Amount: 5.0 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.armor_toughness" as string, Operation: 0 as int, UUID: [1414716640, 10702624, -1497239430, 1035930165], Amount: 2.0 as double}]}),
 [<item:mcda:curious_armor_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a89",<item:mcda:beehive_armor_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [1273685032, -76725571, -1997976070, -1977008970], Amount: 0.0375 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1996967331, -1482603685, -1554044439, 703398001], Amount: 4.0 as double}]}),
 [<item:mcda:beehive_armor_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a90",<item:mcda:beehive_armor_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [-507548830, 132859303, -1333162086, -760883963], Amount: 0.0375 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-614887903, 1012810393, -1870623698, -1697250279], Amount: 8.0 as double}]}),
 [<item:mcda:beehive_armor_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a91",<item:mcda:beehive_armor_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [-1613205857, -1046394842, -1798556477, 2114821089], Amount: 0.0375 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1170622065, 1389906912, -1634863950, 702924933], Amount: 7.0 as double}]}),
 [<item:mcda:beehive_armor_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a92",<item:mcda:beehive_armor_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [-1206639132, -350140807, -1962752901, 1711450014], Amount: 0.0375 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-94674830, -1740354759, -1218099721, 1662350790], Amount: 4.0 as double}]}),
 [<item:mcda:beehive_armor_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a93",<item:mcda:ghost_kindler_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [1728371121, 845562585, -1538095745, -679288952], Amount: 0.0375 as double}, {Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1161360394, 204295083, -1716913793, 856336768], Amount: 4.0 as double}]}),
 [<item:mcda:ghost_kindler_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a94",<item:mcda:ghost_kindler_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [-1955899762, 539512648, -1124002239, -1143748166], Amount: 0.0375 as double}, {Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-189323414, 1805012057, -1673903776, -1073225198], Amount: 8.0 as double}]}),
 [<item:mcda:ghost_kindler_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a95",<item:mcda:ghost_kindler_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [-1226226737, 681527775, -1748882589, 1047533724], Amount: 0.0375 as double}, {Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [1106814561, 2012040466, -1684109511, 598705596], Amount: 7.0 as double}]}),
 [<item:mcda:ghost_kindler_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a96",<item:mcda:ghost_kindler_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.attack_damage" as string, Operation: 1 as int, UUID: [-1951785561, -645577094, -1989799029, -1190375387], Amount: 0.0375 as double}, {Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [1423058849, -1789376821, -1680440034, -573348459], Amount: 4.0 as double}]}),
 [<item:mcda:ghost_kindler_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a97",<item:mcda:golden_piglin_armor_helmet>.withTag({AttributeModifiers: [{Slot: "head" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [1021101496, -2010692407, -1269714855, -31840929], Amount: 4.0 as double}]}),
 [<item:mcda:golden_piglin_armor_helmet>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a98",<item:mcda:golden_piglin_armor_chestplate>.withTag({AttributeModifiers: [{Slot: "chest" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [1621265784, 855458478, -1145502538, -899707511], Amount: 8.0 as double}]}),
 [<item:mcda:golden_piglin_armor_chestplate>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a99",<item:mcda:golden_piglin_armor_leggings>.withTag({AttributeModifiers: [{Slot: "legs" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-2038339704, 110970340, -1415646451, 1532189888], Amount: 7.0 as double}]}),
 [<item:mcda:golden_piglin_armor_leggings>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

craftingTable.addShapeless("a100",<item:mcda:golden_piglin_armor_boots>.withTag({AttributeModifiers: [{Slot: "feet" as string, AttributeName: "minecraft:generic.armor" as string, Operation: 0 as int, UUID: [-1575887171, 963200707, -1562438961, 763744138], Amount: 4.0 as double}]}),
 [<item:mcda:golden_piglin_armor_boots>.anyDamage(), <item:kubejs:upgrade_core_evolution>]
);

