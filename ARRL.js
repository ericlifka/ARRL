window.ARRL = (function () {
    var Environment = (function () {
        function Env() { }
        Env.prototype.lookupSymbol = function (symbol) {
            if (this.symbols.hasOwnProperty(symbol)) {
                return this.symbols[symbol];
            }
            else if (this.parent) {
                return this.parent.lookupSymbol(symbol);
            }
            else {
                return null;
            }
        };
        return function (parent) {
            var e = new Env();
            e.parent = parent;
            e.symbols = {};
        };
    })();

    return function rum(array) {

    };
})();
