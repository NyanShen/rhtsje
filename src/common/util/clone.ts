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

export const cloneDeep = (object: any) => {
    if (typeof object !== "object") return object;
    const newObject = object instanceof Array ? [] : {};
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            if (typeof object[key] === "object" && object[key] !== null) {
                newObject[key] = cloneDeep(object[key]);
            } else {
                newObject[key] = object[key];
            }
        }
    }
    return newObject
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
export const deepClone = oldObject => {
    // 维护两个储存循环引用的数组
    const oldObjects = [];
    const newObjects = [];

    const _deepClone = oldObject => {
        // 递归直到oldobject为null时，或类型不为“object”时停止。
        if (oldObject === null) return null;
        if (typeof oldObject !== 'object') return oldObject;

        let newObject, newProtoType;

        if (isType(oldObject, 'Array')) {
            // 对数组做特殊处理
            newObject = [];
        } else if (isType(oldObject, 'RegExp')) {
            // 对正则对象做特殊处理
            newObject = new RegExp(oldObject.source, getRegExpFlags(oldObject));
            if (oldObject.lastIndex) newObject.lastIndex = oldObject.lastIndex;
        } else if (isType(oldObject, 'Date')) {
            // 对Date对象做特殊处理
            newObject = new Date(oldObject.getTime());
        } else {
            // 处理对象原型
            newProtoType = Object.getPrototypeOf(oldObject);
            // 利用Object.create切断原型链
            newObject = Object.create(newProtoType);
        }

        // 处理循环引用
        const index = oldObjects.indexOf(oldObject);

        if (index != -1) {
            // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
            return newObjects[index];
        }
        oldObjects.push(oldObject);
        newObjects.push(newObject);

        for (const key in oldObject) {
            if (oldObject.hasOwnProperty(key)) {
                // newObject 已根据条件做了特殊处理
                newObject[key] = _deepClone(oldObject[key]);
            }
        }

        return newObject;
    };
    return _deepClone(oldObject);
};