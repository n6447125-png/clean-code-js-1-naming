const { message } = require('./thirdparty/message');

const INFO_NOTIFICATION_LEVEL = 4;
const CRITICAL_NOTIFICATION_LEVEL = 1;

module.exports = class CollectOrderService {
    constructor(eligibilityService, notificationService) {
        this.eligibilityService = eligibilityService;
        this.notificationService = notificationService;
    }

    submitOrder(order) {
        if (this.eligibilityService.isEligibleForCollection(order))
            this.notificationService.notifyCustomer(message.READY_FOR_COLLECT, INFO_NOTIFICATION_LEVEL);
        else
            this.notificationService.notifyCustomer(message.IMPOSSIBLE_TO_COLLECT, CRITICAL_NOTIFICATION_LEVEL);
    }

    setEligibilityService(eligibilityService) {
        this.eligibilityService = eligibilityService;
    }

    setNotificationService(notificationService) {
        this.notificationService = notificationService;
    }
};
