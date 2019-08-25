import { debounce } from "../util/debounce";
jest.useFakeTimers();
it("fn should be call once with in 100s", () => {
    const fn = jest.fn();
    const debounceExecute = debounce(fn, 100);
    debounceExecute(1);
    debounceExecute(2);
    debounceExecute(3);
    expect(fn).not.toBeCalled();
    jest.advanceTimersByTime(100);
    expect(fn).toBeCalled();
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(3);
})