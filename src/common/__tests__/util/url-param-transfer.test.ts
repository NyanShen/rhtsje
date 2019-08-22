import { transferUrlParam } from "../../util/url-param-transfer";

it("url param '?a=1&b=2&c=3' sholud be {a: '1',b:'2',c:'3'}", () => {
    const mockData = "?a=1&b=2&c=3";
    const result = { a: '1', b: '2', c: '3' };
    expect(transferUrlParam(mockData)).toEqual(result);
});