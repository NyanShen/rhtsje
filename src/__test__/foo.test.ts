import { foo } from "./foo";
test("test foo 1 + 2 + 3", () => {
    expect(foo(1, 2, 3)).toBe(6)
})