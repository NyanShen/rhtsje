/**
 * 防抖
 * @param fn 
 * @param delay 
 * @returns 
 */
export const debounce = (fn, delay = 50): Function => {
    let timer;
    return (...args) => {
        clearTimeout(timer); // 在delay期间，执行多次，重新计算
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay)
    }
}