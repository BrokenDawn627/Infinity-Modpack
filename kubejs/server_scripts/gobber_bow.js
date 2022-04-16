onEvent('recipes', event => {
    event.smithing('gobber2:gobber2_bow', 'gateofbabylon:diamond_bow', 'gobber2:gobber2_ingot')
    event.remove({output: 'gobber2:gobber2_bow'})
//戈伯弓
    event.smithing('gobber2:gobber2_bow_nether', 'gateofbabylon:netherite_bow', 'gobber2:gobber2_ingot_nether')
    event.remove({output: 'gobber2:gobber2_bow_nether'})
//下界戈伯弓
    event.smithing('gobber2:gobber2_bow_end', 'botania:crystal_bow', 'gobber2:gobber2_ingot_end')
    event.remove({output: 'gobber2:gobber2_bow_end'})
//末影戈伯弓
})