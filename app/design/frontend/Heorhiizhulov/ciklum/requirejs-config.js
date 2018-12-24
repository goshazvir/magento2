var config = {
    deps: ['Magento_Cms/js/log-when-loaded'],

    shim: {
        'Magento_Catalog/js/view/compare-products': {
            deps: ['Magento_Cms/js/before-compare-products-example']
        }
    },

    map: {
        '*': {
            coffee: 'Magento_Cms/js/requirejs-example'
        }
    },

    config: {
        mixins: {
            'Magento_Checkout/js/checkout-data': {
                'Magento_Cms/js/checkout-data-mixin': true
            }
        }
    },

    paths: {
        'cat_title': 'Magento_Cms/js/title/v2'
    }
};
