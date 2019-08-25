import { parseNumToMoney, parseStrToMoney } from "../util/parse_to_money";

it("123213.53 should be 123,213.530", () => {
    const mockData = 123213.53;
    const result = "123,213.530"
    expect(parseNumToMoney(mockData)).toBe(result);
})

it("1432345 should be 1,432,345.000", () => {
    const mockData = 1432345;
    const result = "1,432,345.000"
    expect(parseNumToMoney(mockData)).toBe(result);
})

it("‘1432345 should be ‘1,432,345", () => {
    const mockData = "1432345";
    const result = "1,432,345"
    expect(parseStrToMoney(mockData)).toBe(result);
})
