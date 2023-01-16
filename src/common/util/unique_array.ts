let arrays = [11,1,2,3,2,3,4,5,6];
const uniqueArraysBySet = (arrays) => {
    let result = new Set(arrays);
    return result;
}

const uniqueArraysByObject = (arrays) => {
    let obj = {};
    let result = [];
    for (let i of arrays) {
        if (!obj[i]) {
            result.push(i);
            obj[i] = 1;
        }
    }
    return result;
}