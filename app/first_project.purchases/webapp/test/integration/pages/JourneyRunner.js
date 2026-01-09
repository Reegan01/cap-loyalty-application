sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"firstproject/purchases/test/integration/pages/PurchasesList",
	"firstproject/purchases/test/integration/pages/PurchasesObjectPage"
], function (JourneyRunner, PurchasesList, PurchasesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('firstproject/purchases') + '/test/flpSandbox.html#firstprojectpurchases-tile',
        pages: {
			onThePurchasesList: PurchasesList,
			onThePurchasesObjectPage: PurchasesObjectPage
        },
        async: true
    });

    return runner;
});

