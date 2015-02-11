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

}());
