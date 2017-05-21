(function () {
    let updateCss = function (filemtime) {
        let elements = document.querySelectorAll("link[rel=stylesheet]");
        for (let i in elements) {
            if (elements.hasOwnProperty(i) == false) {
                continue;
            }
            let element = elements[i];
            if (typeof element.dataset === 'undefined' ||
              typeof element.dataset.original === 'undefined') {
                continue;
            }
            element.href = element.dataset.original + "?mtime=" + filemtime;
        }
    };

    let checkCssNeedsUpdating = function () {
        fetch('/css_filemtime.php').then(function (response) {
            return response.text();
        }).then(function (text) {
            updateCss(text.trim());
        });
    };

    setInterval(checkCssNeedsUpdating, 2000);
}());