define(['uiComponent'], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            title: 'Export Component B',
            value: 2.5,
            onReceiveExport: function (value) {
                console.log('received export:',  value);
            }
        }
    });
});
