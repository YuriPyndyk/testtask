import PaidService from './paidservice';

class FixedHourlyCostPaidService extends PaidService {

    calculateAverageMonthlyCosts() {
        return 30 * 24 * this.costs;
    };
}

export default FixedHourlyCostPaidService;