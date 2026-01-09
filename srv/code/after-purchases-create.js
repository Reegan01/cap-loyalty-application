/**
 * The custom logic attached to the Purchases entity to calculate reward points based on the purchase value, update the total purchase value and total reward points of the related customer.
 * @After(event = { "CREATE" }, entity = "first_projectSrv.Purchases")
 * @param {(Object|Object[])} results - For the After phase only: the results of the event processing
 * @param {cds.Request} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(results, request) {
  const { Customers } = cds.entities;

  // Ensure results is an array for consistent processing
  const purchases = Array.isArray(results) ? results : [results];

  for (const purchase of purchases) {
    if (!purchase || !purchase.customer_ID || !purchase.purchaseValue) continue;

    // Calculate reward points based on the purchase value
    const rewardPoints = purchase.purchaseValue * 0.1; // Example calculation

    // Update the purchase with calculated reward points
    purchase.rewardPoints = rewardPoints;

    // Update the related customer's total purchase value and total reward points
    await cds.run(() =>
      UPDATE(Customers)
        .set({
          totalPurchaseValue: { '+=': purchase.purchaseValue },
          totalRewardPoints: { '+=': rewardPoints }
        })
        .where({ ID: purchase.customer_ID })
    );
  }
}
