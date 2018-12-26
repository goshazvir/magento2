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
            },
            'Magento_Catalog/js/catalog-add-to-cart': {
                'Magento_Cms/js/widgets/add-to-cart-mixin': true
            },
            'Magento_Checkout/js/view/minicart': {
                'Magento_Cms/js/ui-components/minicart-mixin': true
            }
        }
    },

    paths: {
        'cat_title': 'Magento_Cms/js/require/title/v2'
        //'cat_title2': 'Magento_Cms/js/require/title/v1'
    }
};
