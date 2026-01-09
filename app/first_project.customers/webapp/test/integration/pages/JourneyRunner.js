sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"firstproject/customers/test/integration/pages/CustomersList",
	"firstproject/customers/test/integration/pages/CustomersObjectPage"
], function (JourneyRunner, CustomersList, CustomersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('firstproject/customers') + '/test/flpSandbox.html#firstprojectcustomers-tile',
        pages: {
			onTheCustomersList: CustomersList,
			onTheCustomersObjectPage: CustomersObjectPage
        },
        async: true
    });

    return runner;
});

