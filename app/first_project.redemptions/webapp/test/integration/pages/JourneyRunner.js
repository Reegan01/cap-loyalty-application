sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"firstproject/redemptions/test/integration/pages/RedemptionsList",
	"firstproject/redemptions/test/integration/pages/RedemptionsObjectPage"
], function (JourneyRunner, RedemptionsList, RedemptionsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('firstproject/redemptions') + '/test/flpSandbox.html#firstprojectredemptions-tile',
        pages: {
			onTheRedemptionsList: RedemptionsList,
			onTheRedemptionsObjectPage: RedemptionsObjectPage
        },
        async: true
    });

    return runner;
});

