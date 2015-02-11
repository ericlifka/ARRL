(function () {

    function eval(expr, env) {
        if (atom(expr)) {
            return assoc(expr, env);
        }

        else if (atom(car(expr))) {
            var first = car(expr);

            if (eq(first, 'quote')) {

            } else if (eq(first, 'atom')) {

            } else if (eq(first, 'eq')) {

            } else if (eq(first, 'car')) {

            } else if (eq(first, 'cdr')) {

            } else if (eq(first, 'cons')) {

            } else if (eq(first, 'cond')) {

            } else {

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

    function car(expr) {

    }

    function caar(expr) {

    }

    function assoc(expr, env) {

    }

}());
