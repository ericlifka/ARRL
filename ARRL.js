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
    var GLOBAL_ENV = Environment();

    function eval(statement, env) {
        if (Array.isArray(statement)) {
            return eval_array(statement, env);
        }

        else if (typeof statement === "string") {
            return env.lookupSymbol(statement);
        }

        else {
            return statement;
        }
    }

    function eval_array(array, env) {
        if (array.length === 0) {
            return array;
        }
        var callable = env.lookupSymbol(array[0]);
        if (!callable) {
            return callable;
        }
        var params = array.slice(1);

        if (callable.special) {
            return callable(params, env);
        }
        else if (callable.func) {
            return callable(eval_params(params, env));
        }
        else {
            return null;
        }
    }

    function eval_params(params, env) {
        var evaluated = [];
        params.forEach(function (statement) {
            evaluated.push(eval(statement, env));
        });
        return evaluated;
    }

    return function (array) {
        eval(array, GLOBAL_ENV);
    };
})();
