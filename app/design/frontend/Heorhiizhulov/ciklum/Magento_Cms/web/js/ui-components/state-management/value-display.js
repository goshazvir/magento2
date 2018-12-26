define(['uiComponent', 'Magento_Cms/js/ui-components/state-management/counter-state'], function (Component, state) {
    'use strict';

    return Component.extend({
        value: function () {
            return state.counter;
        }
    });
});
