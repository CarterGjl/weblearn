class HashRouter {
    constructor() {
            this.routers = {};
            window.addEventListener('hashchange', this.load.bind(this), false);
        }
        //用于注册每个视图
    register(hash, callback = function() {}) {
            this.routers[hash] = callback;
        }
        //用于注册页
    registerIndex(callback = function() {}) {
        this.routers['index'] = callback;
    }
    registerNotFound(callback = function() {}) {
        this.routers['404'] = callback;
    }
    registerError(callback = function() {}) {
            this.routers['error'] = callback;
        }
        //用于调用不同的视图的回调函数
    load() {
        let hash = location.hash.slice(1);
        let handler;
        if (!hash) {
            handler = this.routers.index;
        } else if (!this.routers.hasOwnProperty(hash)) {
            handler = this.routers['404'] || function() {

            };
        } else {
            handler = this.routers[hash];
        }
        try {
            handler.apply(this);
        } catch (e) {
            console.log(e);
            (this.routers['error'] || function() {}).call(this, e);
        }
        // handler.call(this);
    }
}