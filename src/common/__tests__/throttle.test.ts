import { throttle } from "../util/throttle";

jest.useFakeTimers();

it("fn should be called once within 500s", () => {
    const fn = jest.fn();
    const throttleExecute = throttle(fn);
    throttleExecute({ position: { x: 2, y: 5 } });
    throttleExecute({ position: { x: 10, y: 15 } });
    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(500);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith({ position: { x: 2, y: 5 } });
})