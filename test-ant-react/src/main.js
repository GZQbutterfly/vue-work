


import FastClick from 'fastclick';


import './pages/app/app';




((win, doc) => {
    var winWidth = win.innerWidth;
    var $htmlFontSize = 100 * winWidth / 375;
    doc.documentElement.style.fontSize = $htmlFontSize + 'px';
    if ('addEventListener' in doc) {
        doc.addEventListener('DOMContentLoaded', function () {
            FastClick.attach(doc.body);
        }, false);
    }
})(window, document);


