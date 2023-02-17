/**
 * hash值隐藏处理
 * @return {string}
 */
export function hiddenHash(str: string): string {
    let startStr = str.substring(0, 10);
    let endStr = str.substring(str.length - 4, str.length);
    return startStr + "..." + endStr
  }