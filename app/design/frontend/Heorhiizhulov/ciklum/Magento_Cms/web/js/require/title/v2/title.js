define(function () {
    'use strict';

    return function (config, element) {
        console.log(element);

        element.innerText = 'Version 2 (much improved)';
    }
});
