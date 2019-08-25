export const throttle = (fn, delay = 500) => {
    let flag = true;
    return (...args) => {
        if (!flag) return;
        flag = false;
        setTimeout(() => {
            fn.apply(this, args); // 在delay期间，fn只执行一次，在这期间fn未执行，flag一直为false,程序被return
            flag = true;
        }, delay)
    }
}