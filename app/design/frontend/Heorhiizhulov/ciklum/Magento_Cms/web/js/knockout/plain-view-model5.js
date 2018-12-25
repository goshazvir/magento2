define(['ko'], function (ko) {
    'use strict';

    return function () {
        const viewModel = {
            values: ko.observableArray([
                10,
                123,
                1,
                976,
                14,
                9713
            ])
        };

        return viewModel;
    }
});
