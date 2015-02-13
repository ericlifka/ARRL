(function () {

    function eval(expr, env) {
        if (atom(expr)) {
            return assoc(expr, env);
        }

        else if (atom(car(expr))) {
            var first = car(expr);

            if (eq(first, 'quote')) {
                return cadr(expr);
            }

            else if (eq(first, 'atom')) {
                return atom(eval(cadr(expr), env));
            }

            else if (eq(first, 'eq')) {
                return eq(
                    eval(cadr(expr), env),
                    eval(caddr(expr), env));
            }

            else if (eq(first, 'car')) {
                return car(eval(cadr(expr), env));
            }

            else if (eq(first, 'cdr')) {
                return cdr(eval(cadr(expr), env));
            }

            else if (eq(first, 'cons')) {
                return cons(
                    eval(cadr(expr), env),
                    eval(caddr(expr), env));
            }

            else if (eq(first, 'cond')) {
                return evcon(cdr(expr), env);
            }

            else {
                return eval(cons(assoc(car(expr), env),
                                cdr(expr)),
                            env);
            }
        }

        else if (eq(caar(expr), 'label')) {
            return eval(cons(caddar(expr), cdr(expr)),
                        cons(list(cadar(expr), car(expr)), env));
        }

        else if (eq(caar(expr), 'lambda')) {
            return eval(caddar(expr),
                        append(pair(cadar(expr), evlis(cdr(expr), env)),
                                env));
        }
    }

    function atom(expr) {
        if (expr.constructor === Array) {
            if (expr.length === 0) {
                return true;
            }
            else {
                return [];
            }
        }
        else {
            return true;
        }
    }

    function eq(x, y) {
        if (x === y) {
            return true;
        }
        else if (x.length === 0 && y.length === 0) {
            return true;
        }
        else {
            return [];
        }
    }

    function cons(x, y) {
        if (!y) {
            y = [];
        }

        var arr = y.slice();
        arr.unshift(x);
        return arr;
    }

    function list() {
        return Array.prototype.slice.call(arguments);
    }

    function isNull(expr) {
        return eq(expr, []);
    }

    function append(x, y) {
        if (isNull(x) === true) {
            return y;
        }
        else {
            return cons(car(x), append(cdr(x), y));
        }
    }

    function car(expr) {
        return expr[0] || [];
    }

    function cdr(expr) {
        return expr.slice(1);
    }

    function caar(expr) {
        return car(car(expr));
    }

    function cadr(expr) {
        return car(cdr(expr));
    }

    function cadar(expr) {
        return car(cdr(car(expr)));
    }

    function caddr(expr) {
        return car(cdr(cdr(expr)));
    }

    function caddar(expr) {
        return car(cdr(cdr(car(expr))));
    }

    function assoc(expr, env) {

    }

    function pair(x, y) {
        if (isNull(x) === true && isNull(y) === true) {
            return [];
        }
        else if (isNull(x) !== true && isNull(y) !== true) {
            return cons(
                list(car(x), car(y)),
                pair(cdr(x), cdr(y)));
        }
    }

    function evcon(c, env) {
        if (eval(caar(c), env) === true) {
            return eval(cadar(c), env);
        }
        else {
            return evcon(cdr(c), env);
        }
    }

    function evlis(m, env) {
        if (isNull(m) === true) {
            return [];
        }
        else {
            return cons(
                eval(car(m), env),
                evlis(cdr(m), env));
        }
    }

}());
