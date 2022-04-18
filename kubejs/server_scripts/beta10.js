onEvent('recipes', event => {

    event.shapeless('4x dragonloot:dragon_scale', ['minecraft:dragon_egg'])
    event.remove({id:'victus:diamond_heart_aspect'})

    event.shaped('victus:diamond_heart_aspect', [
		' C ',
		'BAB',
		' C '
	  ], {
		A:'victus:blank_heart_aspect',
        B:'minecraft:diamond_block',
        C:'gobber2:gobber2_ingot'
	  }).id('infinity:diamond_heart')
    
    event.remove({id:'victus:grilled_heart_aspect'})
    event.shaped('victus:grilled_heart_aspect', [
		'CCC',
		'BAB',
		'CCC'
	  ], {
		A:'victus:blank_heart_aspect',
        B:'gobber2:gobber2_gooey_beef',
        C:'minecraft:cooked_beef'
	  }).id('infinity:grilled_heart')

      event.remove({id:'victus:evoking_heart_aspect'})
      event.shaped('victus:evoking_heart_aspect', [
          'CBC',
          'BAB',
          'CBC'
        ], {
          A:'victus:blank_heart_aspect',
          B:'xtraarrows:vex_wing',
          C:'minecraft:iron_sword'
        }).id('infinity:evoking_heart')

       event.remove({id:'victus:victus_journal'})

       event.remove({id:'victus:golden_heart_aspect'})

       event.shaped('victus:golden_heart_aspect', [
        'DCD',
        'BAB',
        'DBD'
        ], {
         A: 'victus:blank_heart_aspect',
         B: 'minecraft:gold_block',
         C: 'mobz:boss_ingot',
         D: 'mythicmetals:adamantite_ingot'
       }).id('infinity:gold_heart')

})

