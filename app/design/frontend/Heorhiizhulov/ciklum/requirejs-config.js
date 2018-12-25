var config = {
    deps: ['Magento_Cms/js/require/log-when-loaded'],

    shim: {
        'Magento_Catalog/js/require/view/compare-products': {
            deps: ['Magento_Cms/js/require/before-compare-products-example']
        }
    },

    map: {
        '*': {
            coffee: 'Magento_Cms/js/require/requirejs-example'
        }
    },

    config: {
        mixins: {
            'Magento_Checkout/js/require/checkout-data': {
                'Magento_Cms/js/require/checkout-data-mixin': true
            }
        }
    },

    paths: {
        'cat_title': 'Magento_Cms/js/require/title/v2'
        //'cat_title2': 'Magento_Cms/js/require/title/v1'
    }
};
