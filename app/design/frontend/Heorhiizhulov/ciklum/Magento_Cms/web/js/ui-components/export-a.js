define(['uiComponent'], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            label: 'Export Component A',
            amount: 7,
            exports: {
                amount: 'exampleUiComponentExportB:onReceiveExport'
            }
        }
    });
});
