class apierror extends error {
    constructor(statusCode, message) {
        super();
        this.statusCod = statusCode;
        this.message = message;
    }
}
module.exports = apierror;