export const foo = (...args) => {
    return args.reduce((result, currItem) => result + currItem, 0)
}