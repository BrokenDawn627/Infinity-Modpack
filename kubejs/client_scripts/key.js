onEvent('client.tick', event => {
    if(Client.isKeyDown(340)&&Client.isKeyDown(32)){
        event.player.sendData("key_pressed",{key: 1})
    }
})