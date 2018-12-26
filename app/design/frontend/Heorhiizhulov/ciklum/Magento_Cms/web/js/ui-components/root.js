define(['uiComponent'], function (uiComponent) {
    'use strict';

    return uiComponent.extend({
        defaults: {
            imports: {
                value: "root.sharedState:value"
            },
            value: 0
        }
    });
});
