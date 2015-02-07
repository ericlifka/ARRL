(function () {
    function create(type, cls, parent) {
        var pane = document.createElement(type);
        pane.classList.add(cls);
        if (parent && parent.appendChild) {
            parent.appendChild(pane);
        }
        return pane;
    }

    window['onload'] = function () {
        var content = create("div", "content", document.body);
        var output = create("div", "output", content);
        var input = create("input", "input", content);
    };
})();
