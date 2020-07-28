let lol = {
    server: '比尔吉沃特',
    startGame: function() {
        console.log('link start');

    }
}
let user = Object.create(lol, {
    'name': {
        value: 'carter'
    }
})
window.tcAndroid = {
    test() {
        console.log('test');
    }
}