export const shallowClone = (object: any) => {
    const newObject = {};
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            newObject[key] = object[key];
        }
    }
    return newObject;
}

export const jsonClone = (object: any) => {
    return JSON.parse(JSON.stringify(object));
}

// 对特殊对象进行类型判断
const isType = (object, type): boolean => {
    if (typeof object !== "object") return false;
    const typeString = Object.prototype.toString.call(object);
    switch (type) {
        case "Array":
            return typeString === "[object Array]";
        case "Date":
            return typeString === "[object Date]";
        case "RegExp":
            return typeString === "[object RegExp]";
        default:
            return false;
    }
}

// 实现一个提取flags的函数
const getRegExpFlags = (regExp: RegExp) => {
    let flags = "";
    if (regExp.global) flags += "g";
    if (regExp.ignoreCase) flags += "i";
    if (regExp.multiline) flags += "m";
    return flags;
}
// Buffer对象、Promise、Set、Map暂未处理
export const deepClone = (oldObject: any) => {
    // 维护两个储存循环引用的数组
    const oldObjects = [];
    const newObjects = [];
    const _deepClone = (oldObject: any) => {
        if (typeof oldObject !== "object") return oldObject;
        let newObject, newPrototype;
        if (isType(oldObject, "Array")) {
            // 对数组做特殊处理
            newObject = []; // 为什么是空数组呢
        } else if (isType(oldObject, "RegExp")) {
            newObject = new RegExp(oldObject.source, getRegExpFlags(oldObject));
            if (oldObject.lastIndex) newObject.lastIndex = oldObject.lastIndex;
        } else if (isType(oldObject, "Date")) {
            // 对Date对象做特殊处理
            newObject = new Date(oldObject.getTime());
        } else {
            // 处理对象原型
            newPrototype = Object.getPrototypeOf(oldObject);
            // 利用Object.create切断原型链
            newObject = Object.create(newPrototype);
        }
        // 处理循环引用
        const index = oldObjects.indexOf(oldObject);
        if (index != -1) {
            return newObjects[index];
        }
        oldObjects.push(oldObject);
        newObjects.push(newObject);

        for (const key in oldObject) {
            if (oldObject.hasOwnProperty(key)) {
                newObject[key] = _deepClone(oldObject[key]) // 貌似只做了一层拷贝耶.
            }
        }
    }
    return _deepClone(oldObject);
}