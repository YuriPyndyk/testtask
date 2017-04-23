import PaidService from './paidservice';

class FixedMonthlyCostPaidService extends PaidService {
    calculateAverageMonthlyCosts() {
        return this.costs;
    };
}
export default FixedMonthlyCostPaidService;