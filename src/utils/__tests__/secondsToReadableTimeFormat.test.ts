import {secondsToReadableTimeFormat} from "../secondsToReadableTimeFormat";

describe("secondToReadableTimeFormat", () => {
    it("should return without hours", () => {
        const result = secondsToReadableTimeFormat(80);
        expect(result).toEqual("01:20");
    });

    it("should return with hours", () => {
        const result = secondsToReadableTimeFormat(4880);
        expect(result).toEqual("01:21:20");
    });
})