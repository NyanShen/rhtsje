/**
 * 浅拷贝
 * @param object 
 * @returns 
 */
export const shallowClone = <T extends {}>(object: T): any => {
    let newObject = {}
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            newObject = {
                ...newObject,
                [key]: object[key]
            };
        }
    }
    return newObject;
}
/**
 * 浅拷贝
 * @param object 
 * @returns 
 */
export const jsonClone = (object: any) => {
    return JSON.parse(JSON.stringify(object));
}
/**
 * 深拷贝
 * @param object 
 * @returns 
 */
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

/**
 * 对特殊对象进行类型判断
 * @param object 
 * @param type 
 * @returns 
 */
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

/**
 * 实现一个提取flags的函数
 * @param regExp 
 * @returns 
 */
const getRegExpFlags = (regExp: RegExp) => {
    let flags = "";
    if (regExp.global) flags += "g";
    if (regExp.ignoreCase) flags += "i";
    if (regExp.multiline) flags += "m";
    return flags;
}
/**
 * 深拷贝
 * Buffer对象、Promise、Set、Map暂未处理
 * @param oldObject 
 * @returns 
 */
export const deepClone = (oldObject) => {
    // 维护两个储存循环引用的数组
    const oldObjects: any = [];
    const newObjects: any = [];

    const _deepClone = oldObject => {
        // 递归直到oldobject为null时，或类型不为“object”时停止。
        if (oldObject === null) return null;
        if (typeof oldObject !== 'object') return oldObject; // 

        let newObject, newProtoType;

        if (isType(oldObject, 'Array')) {
            /**
             * 对数组做特殊处理
             * 数组里面如果单纯只有多个基本数据类型将在判断是否时object对象时进行return
             * 比如数组[1,4,6]
             * forin循环里key为数组下标，进行循环复制，都止步于前面两个return，此时的循环不会进行定义新newObject
             * new Array(2) [undefined, undefined],下面的forin循环不会对这个Array进行循环，
             * 所以最后拷贝结果是[]不是[undefined, undefined]
             */
            newObject = [];
        } else if (isType(oldObject, 'RegExp')) {
            // 对正则对象做特殊处理，下面的newObject[key] = 此次返回的newObject
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