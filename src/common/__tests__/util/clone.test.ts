import { shallowClone, jsonClone } from "../../util/clone";

it("new object in deep object should be the same", () => {
    const mockData = {
        a: 1,
        b: [1, 2, 3],
        c: { d: { e: 4 } }
    }
    const newObject: any = shallowClone(mockData);
    expect(newObject).toEqual(mockData);
    expect(newObject).not.toBe(mockData);
    expect(newObject.c.d).toBe(mockData.c.d); // 更深层的对象,则依然是通过引用指向同一块堆内存
});

it("new object in deep object should not be the same", () => {
    const mockData = {
        a: 1,
        b: [1, 2, 3],
        c: { d: { e: 4 } }
    }
    const newObject: any = jsonClone(mockData);
    expect(newObject.c.d).not.toBe(mockData.c.d);
})

it("clone complex object like RegExp", () => {
    // constructor
    function person(name) {
        this.name = name;
    }
    const personInstance = new person("test");
    const mockData = {
        a: /^[1-9]/i,
        b: new RegExp("^[a-z]", "g"),
        c: [1],
        d: new Array(1), // 稀疏数组,
        e: personInstance,
        f: person
    }
    const newObject = jsonClone(mockData);
    /**
     * old object
     { a: /^[1-9]/i,
      b: /^[a-z]/g,
      c: [ 1 ],
      d: [ <1 empty item> ],
      e: person { name: 'test' },
      f: [Function: person] }
      * new object
      { a: {}
      b: {}, RegExp
      c: [ 1 ],
      d: [ null ], Array
      e: { name: 'test' }, constructor
      f: undefind } function
      }
     */
    expect(newObject.a).toEqual({});
    expect(newObject.b).toEqual({});
    expect(newObject.c[0]).toBe(1);
    expect(newObject.d[0]).toBe(null);
    expect(mockData.d[0]).toBe(undefined);
})