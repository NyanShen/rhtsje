import * as _ from "loadsh";

const recursionForBiggestNumber = (dataList, childName, biggestNumber) => {
    _.forEach(dataList, element => {
        if (element.number > biggestNumber) {
            biggestNumber = element.number;
        }
        if (_.isEmpty) {
            biggestNumber = recursionForBiggestNumber(element[childName], childName, biggestNumber);
        }
    });
    return;
}