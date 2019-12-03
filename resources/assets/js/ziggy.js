    var Ziggy = {
        namedRoutes: {"debugbar.openhandler":{"uri":"_debugbar\/open","methods":["GET","HEAD"],"domain":null},"debugbar.clockwork":{"uri":"_debugbar\/clockwork\/{id}","methods":["GET","HEAD"],"domain":null},"debugbar.telescope":{"uri":"_debugbar\/telescope\/{id}","methods":["GET","HEAD"],"domain":null},"debugbar.assets.css":{"uri":"_debugbar\/assets\/stylesheets","methods":["GET","HEAD"],"domain":null},"debugbar.assets.js":{"uri":"_debugbar\/assets\/javascript","methods":["GET","HEAD"],"domain":null},"debugbar.cache.delete":{"uri":"_debugbar\/cache\/{key}\/{tags?}","methods":["DELETE"],"domain":null},"admin.translations.index":{"uri":"admin\/translations","methods":["GET","HEAD"],"domain":null},"admin.translations.update":{"uri":"admin\/translations\/{key}","methods":["PUT"],"domain":null},"admin.settings.edit":{"uri":"admin\/settings","methods":["GET","HEAD"],"domain":null},"admin.settings.update":{"uri":"admin\/settings","methods":["PUT"],"domain":null},"admin.dashboard.index":{"uri":"admin","methods":["GET","HEAD"],"domain":null},"admin.sales_analytics.index":{"uri":"admin\/sales-analytics","methods":["GET","HEAD"],"domain":null},"admin.categories.tree":{"uri":"admin\/categories\/tree","methods":["GET","HEAD"],"domain":null},"admin.categories.tree.update":{"uri":"admin\/categories\/tree","methods":["PUT"],"domain":null},"admin.categories.index":{"uri":"admin\/categories","methods":["GET","HEAD"],"domain":null},"admin.categories.store":{"uri":"admin\/categories","methods":["POST"],"domain":null},"admin.categories.show":{"uri":"admin\/categories\/{id}","methods":["GET","HEAD"],"domain":null},"admin.categories.update":{"uri":"admin\/categories\/{id}","methods":["PUT"],"domain":null},"admin.categories.destroy":{"uri":"admin\/categories\/{id}","methods":["DELETE"],"domain":null},"admin.media.index":{"uri":"admin\/media","methods":["GET","HEAD"],"domain":null},"admin.media.store":{"uri":"admin\/media","methods":["POST"],"domain":null},"admin.media.destroy":{"uri":"admin\/media\/{ids?}","methods":["DELETE"],"domain":null},"admin.file_manager.index":{"uri":"admin\/file-manager","methods":["GET","HEAD"],"domain":null},"admin.menus.index":{"uri":"admin\/menus","methods":["GET","HEAD"],"domain":null},"admin.menus.create":{"uri":"admin\/menus\/create","methods":["GET","HEAD"],"domain":null},"admin.menus.store":{"uri":"admin\/menus","methods":["POST"],"domain":null},"admin.menus.edit":{"uri":"admin\/menus\/{id}\/edit","methods":["GET","HEAD"],"domain":null},"admin.menus.update":{"uri":"admin\/menus\/{id}","methods":["PUT"],"domain":null},"admin.menus.destroy":{"uri":"admin\/menus\/{ids?}","methods":["DELETE"],"domain":null},"admin.menus.items.create":{"uri":"admin\/menus\/{menuId}\/items\/create","methods":["GET","HEAD"],"domain":null},"admin.menus.items.store":{"uri":"admin\/menus\/{menuId}\/items","methods":["POST"],"domain":null},"admin.menus.items.edit":{"uri":"admin\/menus\/{menuId}\/items\/{id}\/edit","methods":["GET","HEAD"],"domain":null},"admin.menus.items.update":{"uri":"admin\/menus\/{menuId}\/items\/{id}","methods":["PUT"],"domain":null},"admin.menus.items.destroy":{"uri":"admin\/menus\/items\/{id}","methods":["DELETE"],"domain":null},"admin.menus.items.order.update":{"uri":"admin\/menus\/items\/order","methods":["PUT"],"domain":null},"account.dashboard.index":{"uri":"account","methods":["GET","HEAD"],"domain":null},"account.profile.edit":{"uri":"account\/profile","methods":["GET","HEAD"],"domain":null},"account.profile.update":{"uri":"account\/profile","methods":["PUT"],"domain":null},"account.orders.index":{"uri":"account\/orders","methods":["GET","HEAD"],"domain":null},"account.orders.show":{"uri":"account\/orders\/{id}","methods":["GET","HEAD"],"domain":null},"account.wishlist.index":{"uri":"account\/wishlist","methods":["GET","HEAD"],"domain":null},"account.wishlist.destroy":{"uri":"account\/wishlist\/{productId}","methods":["DELETE"],"domain":null},"account.reviews.index":{"uri":"account\/reviews","methods":["GET","HEAD"],"domain":null},"admin.products.index":{"uri":"admin\/products","methods":["GET","HEAD"],"domain":null},"admin.products.create":{"uri":"admin\/products\/create","methods":["GET","HEAD"],"domain":null},"admin.products.store":{"uri":"admin\/products","methods":["POST"],"domain":null},"admin.products.edit":{"uri":"admin\/products\/{id}\/edit","methods":["GET","HEAD"],"domain":null},"admin.products.update":{"uri":"admin\/products\/{id}","methods":["PUT"],"domain":null},"admin.products.destroy":{"uri":"admin\/products\/{ids}","methods":["DELETE"],"domain":null},"products.index":{"uri":"products","methods":["GET","HEAD"],"domain":null},"products.show":{"uri":"products\/{slug}","methods":["GET","HEAD"],"domain":null},"admin.login":{"uri":"admin\/login","methods":["GET","HEAD"],"domain":null},"admin.login.post":{"uri":"admin\/login","methods":["POST"],"domain":null},"admin.logout":{"uri":"admin\/logout","methods":["GET","HEAD"],"domain":null},"admin.reset":{"uri":"admin\/password\/reset","methods":["GET","HEAD"],"domain":null},"admin.reset.post":{"uri":"admin\/password\/reset","methods":["POST"],"domain":null},"admin.reset.complete":{"uri":"admin\/password\/reset\/{email}\/{code}","methods":["GET","HEAD"],"domain":null},"admin.reset.complete.post":{"uri":"admin\/password\/reset\/{email}\/{code}","methods":["POST"],"domain":null},"admin.users.index":{"uri":"admin\/users","methods":["GET","HEAD"],"domain":null},"admin.users.create":{"uri":"admin\/users\/create","methods":["GET","HEAD"],"domain":null},"admin.users.store":{"uri":"admin\/users","methods":["POST"],"domain":null},"admin.users.edit":{"uri":"admin\/users\/{id}\/edit","methods":["GET","HEAD"],"domain":null},"admin.users.update":{"uri":"admin\/users\/{id}\/edit","methods":["PUT"],"domain":null},"admin.users.destroy":{"uri":"admin\/users\/{ids?}","methods":["DELETE"],"domain":null},"admin.users.reset_password":{"uri":"admin\/users\/{id}\/reset-password","methods":["GET","HEAD"],"domain":null},"admin.roles.index":{"uri":"admin\/roles","methods":["GET","HEAD"],"domain":null},"admin.roles.create":{"uri":"admin\/roles\/create","methods":["GET","HEAD"],"domain":null},"admin.roles.store":{"uri":"admin\/roles","methods":["POST"],"domain":null},"admin.roles.edit":{"uri":"admin\/roles\/{id}\/edit","methods":["GET","HEAD"],"domain":null},"admin.roles.update":{"uri":"admin\/roles\/{id}\/edit","methods":["PUT"],"domain":null},"admin.roles.destroy":{"uri":"admin\/roles\/{ids?}","methods":["DELETE"],"domain":null},"admin.profile.edit":{"uri":"admin\/profile","methods":["GET","HEAD"],"domain":null},"admin.profile.update":{"uri":"admin\/profile","methods":["PUT"],"domain":null},"login":{"uri":"login","methods":["GET","HEAD"],"domain":null},"login.post":{"uri":"login","methods":["POST"],"domain":null},"login.redirect":{"uri":"login\/{provider}","methods":["GET","HEAD"],"domain":null},"login.callback":{"uri":"login\/{provider}\/callback","methods":["GET","HEAD"],"domain":null},"logout":{"uri":"logout","methods":["GET","HEAD"],"domain":null},"register":{"uri":"register","methods":["GET","HEAD"],"domain":null},"register.post":{"uri":"register","methods":["POST"],"domain":null},"reset":{"uri":"password\/reset","methods":["GET","HEAD"],"domain":null},"reset.post":{"uri":"password\/reset","methods":["POST"],"domain":null},"reset.complete":{"uri":"password\/reset\/{email}\/{code}","methods":["GET","HEAD"],"domain":null},"reset.complete.post":{"uri":"password\/reset\/{email}\/{code}","methods":["POST"],"domain":null},"admin.transactions.index":{"uri":"admin\/transactions","methods":["GET","HEAD"],"domain":null},"admin.taxes.index":{"uri":"admin\/taxes","methods":["GET","HEAD"],"domain":null},"admin.taxes.create":{"uri":"admin\/taxes\/create","methods":["GET","HEAD"],"domain":null},"admin.taxes.store":{"uri":"admin\/taxes","methods":["POST"],"domain":null},"admin.taxes.edit":{"uri":"admin\/taxes\/{id}\/edit","methods":["GET","HEAD"],"domain":null},"admin.taxes.update":{"uri":"admin\/taxes\/{id}","methods":["PUT"],"domain":null},"admin.taxes.destroy":{"uri":"admin\/taxes\/{ids?}","methods":["DELETE"],"domain":null},"cart.taxes.store":{"uri":"cart\/taxes","methods":["POST"],"domain":null},"admin.sliders.index":{"uri":"admin\/sliders","methods":["GET","HEAD"],"domain":null},"admin.sliders.create":{"uri":"admin\/sliders\/create","methods":["GET","HEAD"],"domain":null},"admin.sliders.store":{"uri":"admin\/sliders","methods":["POST"],"domain":null},"admin.sliders.edit":{"uri":"admin\/sliders\/{id}\/edit","methods":["GET","HEAD"],"domain":null},"admin.sliders.update":{"uri":"admin\/sliders\/{id}","methods":["PUT"],"domain":null},"admin.sliders.destroy":{"uri":"admin\/sliders\/{ids?}","methods":["DELETE"],"domain":null},"admin.slider_options.index":{"uri":"admin\/slider-options","methods":["GET","HEAD"],"domain":null},"admin.slider_options.create":{"uri":"admin\/slider-options\/create","methods":["GET","HEAD"],"domain":null},"admin.slider_options.store":{"uri":"admin\/slider-options","methods":["POST"],"domain":null},"admin.slider_options.edit":{"uri":"admin\/slider-options\/{id}\/edit","methods":["GET","HEAD"],"domain":null},"admin.slider_options.update":{"uri":"admin\/slider-options\/{id}","methods":["PUT"],"domain":null},"admin.slider_options.destroy":{"uri":"admin\/slider-options\/{ids?}","methods":["DELETE"],"domain":null},"admin.reviews.index":{"uri":"admin\/reviews","methods":["GET","HEAD"],"domain":null},"admin.reviews.edit":{"uri":"admin\/reviews\/{id}\/edit","methods":["GET","HEAD"],"domain":null},"admin.reviews.update":{"uri":"admin\/reviews\/{id}","methods":["PUT"],"domain":null},"admin.reviews.destroy":{"uri":"admin\/reviews\/{ids?}","methods":["DELETE"],"domain":null},"admin.products.reviews.index":{"uri":"admin\/products\/{productId}\/reviews","methods":["GET","HEAD"],"domain":null},"products.reviews.store":{"uri":"products\/{productId}\/reviews","methods":["POST"],"domain":null},"admin.reports.index":{"uri":"admin\/reports","methods":["GET","HEAD"],"domain":null},"admin.orders.index":{"uri":"admin\/orders","methods":["GET","HEAD"],"domain":null},"admin.orders.show":{"uri":"admin\/orders\/{id}","methods":["GET","HEAD"],"domain":null},"admin.orders.status.update":{"uri":"admin\/orders\/{order}\/status","methods":["PUT"],"domain":null},"admin.orders.email.store":{"uri":"admin\/orders\/{order}\/email","methods":["POST"],"domain":null},"admin.orders.print.show":{"uri":"admin\/orders\/{order}\/print","methods":["GET","HEAD"],"domain":null},"admin.options.index":{"uri":"admin\/options","methods":["GET","HEAD"],"domain":null},"admin.options.create":{"uri":"admin\/options\/create","methods":["GET","HEAD"],"domain":null},"admin.options.store":{"uri":"admin\/options","methods":["POST"],"domain":null},"admin.options.show":{"uri":"admin\/options\/{id}","methods":["GET","HEAD"],"domain":null},"admin.options.edit":{"uri":"admin\/options\/{id}\/edit","methods":["GET","HEAD"],"domain":null},"admin.options.update":{"uri":"admin\/options\/{id}","methods":["PUT"],"domain":null},"admin.options.destroy":{"uri":"admin\/options\/{ids}","methods":["DELETE"],"domain":null},"admin.currency_rates.index":{"uri":"admin\/currency-rates","methods":["GET","HEAD"],"domain":null},"admin.currency_rates.edit":{"uri":"admin\/currency-rates\/{id}\/edit","methods":["GET","HEAD"],"domain":null},"admin.currency_rates.update":{"uri":"admin\/currency-rates\/{id}","methods":["PUT"],"domain":null},"admin.currency_rates.refresh":{"uri":"admin\/currency-rates\/refresh","methods":["GET","HEAD"],"domain":null},"current_currency.store":{"uri":"current-currency\/{code}","methods":["GET","HEAD"],"domain":null},"admin.coupons.index":{"uri":"admin\/coupons","methods":["GET","HEAD"],"domain":null},"admin.coupons.create":{"uri":"admin\/coupons\/create","methods":["GET","HEAD"],"domain":null},"admin.coupons.store":{"uri":"admin\/coupons","methods":["POST"],"domain":null},"admin.coupons.edit":{"uri":"admin\/coupons\/{id}\/edit","methods":["GET","HEAD"],"domain":null},"admin.coupons.update":{"uri":"admin\/coupons\/{id}","methods":["PUT"],"domain":null},"admin.coupons.destroy":{"uri":"admin\/coupons\/{ids?}","methods":["DELETE"],"domain":null},"cart.coupon.store":{"uri":"cart\/coupon","methods":["POST"],"domain":null},"contact.create":{"uri":"contact","methods":["GET","HEAD"],"domain":null},"contact.store":{"uri":"contact","methods":["POST"],"domain":null},"compare.index":{"uri":"compare","methods":["GET","HEAD"],"domain":null},"compare.store":{"uri":"compare","methods":["POST"],"domain":null},"compare.destroy":{"uri":"compare\/{id}","methods":["DELETE"],"domain":null},"checkout.create":{"uri":"checkout","methods":["GET","HEAD"],"domain":null},"checkout.store":{"uri":"checkout","methods":["POST"],"domain":null},"checkout.complete.store":{"uri":"checkout\/complete\/{orderId}\/{paymentGateway}","methods":["GET","HEAD"],"domain":null},"checkout.complete.show":{"uri":"checkout\/complete","methods":["GET","HEAD"],"domain":null},"checkout.payment_canceled.store":{"uri":"checkout\/payment-canceled\/{orderId}","methods":["GET","HEAD"],"domain":null},"cart.index":{"uri":"cart","methods":["GET","HEAD"],"domain":null},"cart.items.store":{"uri":"cart\/items","methods":["POST"],"domain":null},"cart.items.update":{"uri":"cart\/items\/{cartItemId}","methods":["PUT"],"domain":null},"cart.items.destroy":{"uri":"cart\/items\/{cartItemId}","methods":["DELETE"],"domain":null},"cart.shipping_method.store":{"uri":"cart\/shipping-method","methods":["POST"],"domain":null},"admin.attributes.index":{"uri":"admin\/attributes","methods":["GET","HEAD"],"domain":null},"admin.attributes.create":{"uri":"admin\/attributes\/create","methods":["GET","HEAD"],"domain":null},"admin.attributes.store":{"uri":"admin\/attributes","methods":["POST"],"domain":null},"admin.attributes.edit":{"uri":"admin\/attributes\/{id}\/edit","methods":["GET","HEAD"],"domain":null},"admin.attributes.update":{"uri":"admin\/attributes\/{id}","methods":["PUT"],"domain":null},"admin.attributes.destroy":{"uri":"admin\/attributes\/{ids?}","methods":["DELETE"],"domain":null},"admin.attribute_sets.index":{"uri":"admin\/attributes-sets","methods":["GET","HEAD"],"domain":null},"admin.attribute_sets.create":{"uri":"admin\/attributes-sets\/create","methods":["GET","HEAD"],"domain":null},"admin.attribute_sets.store":{"uri":"admin\/attributes-sets","methods":["POST"],"domain":null},"admin.attribute_sets.edit":{"uri":"admin\/attributes-sets\/{id}\/edit","methods":["GET","HEAD"],"domain":null},"admin.attribute_sets.update":{"uri":"admin\/attributes-sets\/{id}","methods":["PUT"],"domain":null},"admin.attribute_sets.destroy":{"uri":"admin\/attributes-sets\/{ids?}","methods":["DELETE"],"domain":null},"wishlist.store":{"uri":"wishlist","methods":["POST"],"domain":null},"countries.states.index":{"uri":"countries\/{code}\/states","methods":["GET","HEAD"],"domain":null},"admin.pages.index":{"uri":"admin\/pages","methods":["GET","HEAD"],"domain":null},"admin.pages.create":{"uri":"admin\/pages\/create","methods":["GET","HEAD"],"domain":null},"admin.pages.store":{"uri":"admin\/pages","methods":["POST"],"domain":null},"admin.pages.edit":{"uri":"admin\/pages\/{id}\/edit","methods":["GET","HEAD"],"domain":null},"admin.pages.update":{"uri":"admin\/pages\/{id}\/edit","methods":["PUT"],"domain":null},"admin.pages.destroy":{"uri":"admin\/pages\/{ids?}","methods":["DELETE"],"domain":null},"home":{"uri":"\/","methods":["GET","HEAD"],"domain":null},"admin.storefront.settings.edit":{"uri":"admin\/storefront","methods":["GET","HEAD"],"domain":null},"admin.storefront.settings.update":{"uri":"admin\/storefront","methods":["PUT"],"domain":null},"products.quick_view.show":{"uri":"products\/{slug}\/quick-view","methods":["GET","HEAD"],"domain":null}},
        baseUrl: 'http://i-shop.ee/',
        baseProtocol: 'http',
        baseDomain: 'i-shop.ee',
        basePort: false,
        defaultParameters: []
    };

    if (typeof window.Ziggy !== 'undefined') {
        for (var name in window.Ziggy.namedRoutes) {
            Ziggy.namedRoutes[name] = window.Ziggy.namedRoutes[name];
        }
    }

    export {
        Ziggy
    }