(function () {
    function create(type, cls, parent, child) {
        var pane = document.createElement(type);
        pane.classList.add(cls);
        if (parent && parent.appendChild) {
            parent.appendChild(pane);
        }
        if (child) {
            pane.appendChild(child);
        }
        return pane;
    }

    window['onload'] = function () {
        var content = create("div", "content", document.body);
        var output = create("div", "output", content);
        var input = create("input", "input", content);

        input.addEventListener("keydown", function (event) {
            if (event.keyIdentifier === "Enter") {
                event.stopPropagation();
                var inputString = this.value;
                create("div", "input-line", output, document.createTextNode("$ " + inputString));

                var inputLiteral = eval("(" + inputString + ")");
                var result = ARRL(inputLiteral);
                create("div", "output-line", output, document.createTextNode(">>> " + result));

                this.value = "";
            }
        });
    };
})();
