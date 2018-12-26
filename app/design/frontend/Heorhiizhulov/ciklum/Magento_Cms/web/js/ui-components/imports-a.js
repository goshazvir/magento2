define(['uiComponent'], function (Component) {
    'use strict';

    // track need in this case, because exampleUiComponentImportsB
    // isn't loaded right now
    return Component.extend({
        defaults: {
            label: 'Import Component A',
            amount: 12,
            tracks: {
                amount: true
            },
            imports: {
                amount: 'exampleUiComponentImportsB:value'
            }
        }
    });
});
