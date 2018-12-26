define(['uiComponent'], function (Component) {
    'use strict';

    // at first we get original value = 12 (from component a)
    // then, in component a, value 12, was override to 5.5
    // so, we get 5.5
    return Component.extend({
        defaults: {
            title: 'Import Component B',
            value: 5.5,
            imports: {
                onAmountUpdate: 'exampleUiComponentImportsA:amount'
            }
        },

        onAmountUpdate: function (newValue) {
            console.log('Updated to ', newValue);
        }
    });
});
