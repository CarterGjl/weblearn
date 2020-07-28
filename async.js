(function() {
    setTimeout(() => {
        console.log(0);
    });
    new Promise(resolve => {
        console.log(1);
        setTimeout(() => {
            resolve();
            Promise.resolve().then(() => {
                console.log(2);
                setTimeout(() => console.log(3));
                Promise.resolve().then(() => console.log(4));
            });
        });
        Promise.resolve().then(() => console.log(5));
    }).then(() => {
        console.log(6);
        Promise.resolve().then(() => console.log(7));
        setTimeout(() => console.log(8));
    });
    console.log(9); <
    iframe class = "ZVideoItem-player"
    src = "https://www.zhihu.com/video/1238774074873823232"
    allowfullscreen = "" > < /iframe>
})();