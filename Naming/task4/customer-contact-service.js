const CustomerContact = require('./thirdparty/customer-contact');
const CustomerContactDAO = require('./thirdparty/customer-contact-dao');

module.exports = class CustomerContactService {
    /** @param {CustomerContactDAO} customerContactDAO */
    constructor(customerContactDAO) {
        this.customerContactDAO = customerContactDAO;
    }

    findContactDetailsByCustomerId(customerId) {
        return this.customerContactDAO.findById(customerId);
    }

    /** @param {CustomerContact} customerContactDetails */
    updateContactDetails(customerContactDetails) {
        this.customerContactDAO.update(customerContactDetails);
    }
};
