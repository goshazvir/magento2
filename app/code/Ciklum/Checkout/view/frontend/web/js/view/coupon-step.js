define(
    [
        'ko',
        'uiComponent',
        'underscore',
        'Magento_Checkout/js/model/step-navigator',
        'Magento_Customer/js/model/customer',
        'Magento_Ui/js/form/form'
    ],
    function (
        ko,
        Component,
        _,
        stepNavigator,
        customer
    ) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Ciklum_Checkout/coupon-step'
            },

            isVisible: ko.observable(true),
            isLogedIn: customer.isLoggedIn(),
            stepCode: 'coupon',
            stepTitle: 'Coupon',

            /**
             *
             * @returns {*}
             */
            initialize: function () {
                this._super();

                stepNavigator.registerStep(
                    this.stepCode,
                    null,
                    this.stepTitle,
                    this.isVisible,
                    _.bind(this.navigate, this),
                    15
                );

                return this;
            },

            /**
            * Form submit handler
            */
            onSubmit: function() {
                this.source.set('params.invalid', false);
                this.source.trigger('customCheckoutForm.data.validate');

                if (!this.source.get('params.invalid')) {
                    var formData = this.source.get('customCheckoutForm');
                    console.dir(formData);
                }
            },

            /**
             * @returns void
             */
            navigateToNextStep: function () {
                stepNavigator.next();
            }
        });
    }
);
