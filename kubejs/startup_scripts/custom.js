
onEvent('item.registry.tool_tiers', event => {
    event.add('singer', tier => {
      tier.uses = 2000
      tier.speed = 12.0
      tier.attackDamageBonus = 17.0
      tier.level = 5
      tier.enchantmentValue = 25
      tier.repairIngredient = 'minecraft:enchanted_golden_apple'
    })

    event.add('ruo_shui', tier => {
      tier.uses = 2000
      tier.speed = 12.0
      tier.attackDamageBonus = 12.0
      tier.level = 5
      tier.enchantmentValue = 25
      tier.repairIngredient = 'minecraft:diamond'
    })
    event.add('ye_cao', tier => {
      tier.uses = 2000
      tier.speed = 12.0
      tier.attackDamageBonus = 7.0
      tier.level = 5
      tier.enchantmentValue = 25
      tier.repairIngredient = 'minecraft:emerald'
    })
    event.add('qi_xing', tier => {
      tier.uses = 2000
      tier.speed = 12.0
      tier.attackDamageBonus = 7.0
      tier.level = 5
      tier.enchantmentValue = 25
      tier.repairIngredient = 'minecraft:diamond'
    })
  })
 

  onEvent('item.registry', event => {

    event.create('custom_paper', item => {
        item.displayName('§b定制物品兑换券').tooltip('§7右键使用(仅定制了物品的赞助者、挑战者有效)')
      })
    
      event.create('singer_sword', item => {
        item.displayName('§6虚空の剑').tooltip(['歌者の剑'])
        item.tooltip('          §7--@_Inory_')
        item.type('sword').tier('singer')
        item.rarity(Rarity.EPIC)
      })

      event.create('bengdai', item => {
        item.displayName('恋人の绷带').tooltip('          §7--@_Inory_')
        item.rarity(Rarity.EPIC)
        item.unstackable()
      })

      event.create('ruoshui', item => {
        item.displayName('§b上善若水')
        item.tooltip('§1海之屏障  §7潜行时无敌')
        item.tooltip('§9冰之霜寒  §7战斗时冻结攻击你的目标')
        item.tooltip('§a水之净化  §7立刻熄灭你身上的火焰')
        item.tooltip('§3河之湍急  §7处于战斗状态时获得速度效果')
        item.tooltip('§c泉之治愈  §7潜行使用恢复最大生命值的一半，冷却时间15秒')
        item.tooltip('§e汽之呼吸  §7右键使用获得15秒水下呼吸，冷却时间20秒')
        item.tooltip(' ')
        item.tooltip('§7感谢 @doo 的贡献')
        item.type('sword').tier('ruo_shui')
        item.rarity(Rarity.EPIC)
      })

      event.create('baigei_boots', item => {
        item.displayName('§6白给靴').type('boots').tier('gold')
        item.maxDamage(400)
        item.rarity(Rarity.EPIC)
        item.tooltip('§7感知')
        item.tooltip('§7生命恢复III')
        item.tooltip('§7速度II')
        item.tooltip(' ')
        item.tooltip('§6@极限生存挑战通关者-huasuia')
      })

      event.create('yecao', item => {
        item.displayName('§2野草').type('sword').tier('ye_cao')
        item.rarity(Rarity.EPIC)
        item.tooltip('§7春风：右键获得5秒抗性提升5和生命回复5，冷却10秒')
        item.tooltip('§7蔓延：在草方块上时获得速度4')
        item.tooltip('§7星火：获得抗火效果')
        item.tooltip('§7润物：潜行时获得饱食度')
        item.tooltip(' ')
        item.tooltip('§6@极限生存挑战通关者-AKong4213')
      })

      event.create('qixing', item => {
        item.displayName('§6七星剑').type('sword').tier('qi_xing')
        item.rarity(Rarity.EPIC)
        item.tooltip('§7天枢●贪狼：使用该武器杀死敌人时获得伤害吸收4')
        item.tooltip('§7天璇●巨门：赋予了该武器额外的攻击距离')
        item.tooltip('§7天玑●禄存：赋予了该武器额外的幸运（概率斩首）')
        item.tooltip('§7天权●文曲：赋予了该武器额外的吸血')
        item.tooltip('§7玉衡●廉贞：赋予了该武器额外的攻击速度')
        item.tooltip('§7开阳●武曲：赋予了该武器额外的攻击力')
        item.tooltip('§7摇光●破军：使该武器攻击附带10%目标生命值伤害')
        item.tooltip(' ')
        item.tooltip('§6@极限生存挑战通关者-A_wushi')
      })

      event.create('zhongzi', item => {
        item.displayName('§c中子灭杀')
        item.tooltip('§7我们将其称为高效')
        item.tooltip(' ')
        item.tooltip('§6@极限生存挑战通关者-moyuguguji')
        item.rarity(Rarity.EPIC)
        item.unstackable()
      })

      event.create('shenqi_shard', item => {
        item.displayName('§6神器碎片')
        item.tooltip('§7收集散落的神器碎片来打造神器')
        item.rarity(Rarity.EPIC)
      })

      event.create('shenqi_ingot', item => {
        item.displayName('§6神器零件')
        item.tooltip('§7收集散落的神器零件来打造神器')
        item.rarity(Rarity.EPIC)
      })

      event.create('shenqi_random', item => {
        item.displayName('§6未幻化的神器')
        item.tooltip('§7右键以获得神器')
        item.rarity(Rarity.EPIC)
        item.unstackable()
      })

  })