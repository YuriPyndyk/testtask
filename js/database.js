import Table from './table'

class DataBase extends Table {

    sortAverageMonthlyCosts(sortArray) {
        sortArray.sort(function (a, b) {
            if (a.calculateAverageMonthlyCosts() > b.calculateAverageMonthlyCosts()) {
                return -1
            } else if (a.calculateAverageMonthlyCosts() !== b.calculateAverageMonthlyCosts()) {
                return 1
            } else {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1
                } else {
                    return 1
                }
            }
        });
    }
}

export default DataBase