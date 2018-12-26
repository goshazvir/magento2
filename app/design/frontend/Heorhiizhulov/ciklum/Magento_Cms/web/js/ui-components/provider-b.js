define(['uiComponent'], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            title: 'Provider Component B',
            value: 7.9,
            tracks: {
                amount: true
            }
        }
    });
});
