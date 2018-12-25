define(['ko'], function (ko) {
    'use strict';

    // for update value:
    // require('uiRegistry').get('observableEs5').additional_charge = 12
    return function () {
        const viewModel = ko.track({
            label: 'view model with knockout-ES5 observables',
            additional_charge: 2,
            items: [
                {name: 'Surprise Box', qty: 4, price: 1.5},
                {name: 'Burger', qty: 1, price: 7.5}
            ],
            rowTotal: item => item.qty * item.price,
            total: function () {
                const sum = this.items.map(this.rowTotal)
                    .reduce((acc, curr) => acc + curr);
                return sum + this.additional_charge
            }
        });

        ko.getObservable(viewModel, 'additional_charge').subscribe(function (newValue) {
            console.log('Additional Changed to: ', newValue);
        });

        return viewModel;
    }
});
