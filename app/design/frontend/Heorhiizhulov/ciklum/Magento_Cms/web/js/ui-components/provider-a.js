define(['uiComponent'], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            label: 'Provider Component A',
            amount: 7.1,
            tracks: {
                amount: true
            },
            imports: {
                amount: '${$.provider}:value'
            }
        }
    });
});
