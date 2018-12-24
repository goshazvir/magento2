define([], function () {
    'use strict';

    // rewrite customer address logic:
    // checkout-data.js
    // getSelectedShippingAddress
    return function (checkoutData) {
        const orig = checkoutData.getSelectedShippingAddress;

        checkoutData.getSelectedShippingAddress = function () {
            const address = orig.bind(checkoutData)();

            console.log('New shipping address: ', address);
            return address;
        };

        return checkoutData;
    };
});
