define([
    'Ciklum_Checkout/js/view/coupon-step'
], function (Coupon) {
    'use strict';

    var obj;

    describe('Ciklum_Checkout/js/view/coupon-step', function () {
        describe('"navigateToNextStep" method', function () {
            it('Check method call.', function () {
                expect(obj.navigateToNextStep()).toBeUndefined();
            });
        });
    });
});
