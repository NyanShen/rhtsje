
export const parseNumToMoney = (num: number): string => { // 23.4
    /**
     * num = parseFloat(num.toFixed(3)); // "23.400"
     * number类型也可以使用split方法
     * let [integer, decimal] = String.prototype.split.call(num, ".");
     * 11234.4 -> 11,234.4 not 11,234.400
     * strInt.replace(/\d(?=(\d{3})+$)/g, "$&,") == strInt.replace(/(?=(?!\b)(\d{3})+$)/g, ",") 
     */
    const strNum = num.toFixed(3);
    let [integer, decimal] = strNum.split(".");
    // integer = integer.replace(/\d(?=(\d{3})+$)/g, "$&,");
    const reg = /(?=(?!\b)(\d{3})+$)/g;
    integer = integer.replace(reg, ",");
    return `${integer}.${decimal}`
}

export const parseStrToMoney = (str: string) => {
    // 对位置进行匹配
    const reg = /(?=(?!\b)(\d{3})+$)/g;
    return str.replace(reg, ",");
}