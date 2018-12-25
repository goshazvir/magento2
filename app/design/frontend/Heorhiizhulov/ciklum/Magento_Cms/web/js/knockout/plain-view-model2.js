define(['ko'], function (ko) {
    'use strict';

    return function (config) {
        const title = ko.observable("View Model Simple Title");

        title.subscribe(function (newValue) {
            console.log('Changed To:', newValue);
        });

        title.subscribe(function (oldValue) {
            console.log('Will be changed from:', oldValue);
        }, this, 'beforeChange');

        return {
            title: title,
            config: config
        }
    };
});
