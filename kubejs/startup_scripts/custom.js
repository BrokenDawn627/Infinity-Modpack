
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

  })