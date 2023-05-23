const addToBatch = (orders, orderID) => {
    if (orders.length >= 5) return orders;
    return orders.concat(orderID);
};

module.exports = addToBatch;
