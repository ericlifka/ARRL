(function () {

    function eval(expr, env) {
        if (atom(expr)) {

        }

        else if (atom(car(expr))) {

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

}());
