let arrays = [11,1,2,3,2,3,4,5,6];
const uniqueArraysBySet = (arrays) => {
    let result = new Set(arrays);
    return result;
}

const uniqueArraysByObject = <T extends []> (arrays: T): Partial<T>[] => {
    let obj: any = {};
    let result: Partial<T>[] = [];
    for (let i of arrays) {
        if (!obj[i]) {
            result.push(i);
            obj[i] = 1;
        }
    }
    return result;
}