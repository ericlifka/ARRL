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

    }

    function eq(x, y) {

    }

    function cons(x, y) {

    }

    function list() {

    }

    function append() {

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

    function pair() {

    }

    function evcon(c, env) {

    }

    function evlis(m, env) {

    }

}());
