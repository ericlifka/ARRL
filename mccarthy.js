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

        }

        else if (eq(caar(expr), 'lambda')) {

        }
    }

    function atom(expr) {

    }

    function eq(x, y) {

    }

    function cons(x, y) {

    }

    function car(expr) {

    }

    function cdr(expr) {

    }

    function caar(expr) {

    }

    function cadr(expr) {

    }

    function caddr(expr) {

    }

    function assoc(expr, env) {

    }

    function evcon(c, env) {

    }

}());
