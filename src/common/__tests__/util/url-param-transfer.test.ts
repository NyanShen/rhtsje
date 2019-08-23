import { transferUrlParam, toUrlParam } from "../../util/url-param-transfer";
import { encodeParam } from "../../util/encript-param";

it("url param '?a=1&b=2&c=3' sholud be {a: '1',b:'2',c:'3'}", () => {
    const mockData = "?a=1&b=2&c=3";
    const result = { a: '1', b: '2', c: '3' };
    expect(transferUrlParam(mockData)).toEqual(result);
});

it("{a: '1',b:'2',c:'3'} sholud be url param '?a=1&b=2&c=3'", () => {
    const mockData = { a: '1', b: '2', c: '3' };
    const result = `&a=${encodeParam('1')}&b=${encodeParam('2')}&c=${encodeParam('3')}`;
    expect(toUrlParam(mockData)).toEqual(result);
})