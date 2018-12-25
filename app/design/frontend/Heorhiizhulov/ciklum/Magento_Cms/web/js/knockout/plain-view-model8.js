define(['uiElement'], function (uiElement) {
    'use strict';

    return uiElement.extend({
        defaults: {
            label: "Some random numbers",
            values: [22, 1, 5, 1024, 777]
        }
    });
});
