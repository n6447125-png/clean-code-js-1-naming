const NotDeliverableOrderError = require('./thirdparty/not-deliverable-order-error');

module.exports = class DeliveryOrderService {
    constructor(deliveryService, orderFulfilmentService) {
        this.deliveryService = deliveryService;
        this.orderFulfilmentService = orderFulfilmentService;
    }

    submitOrder(order) {
        if (this.deliveryService.isDeliverable(order)) {
            const products = order.getProducts();
            this.orderFulfilmentService.fulfilProducts(products);
        } else {
            throw new NotDeliverableOrderError();
        }
    }

    setDeliveryService(deliveryService) {
        this.deliveryService = deliveryService;
    }

    setOrderFulfilmentService(orderFulfilmentService) {
        this.orderFulfilmentService = orderFulfilmentService;
    }
};
