import { addZeroToTheBeginOfTheNumber } from "@/utils/addZeroToTheBeginOfTheNumber";

describe("addZeroToTheBeginOfTheNumber", () => {
    it("should return '05'", () => {
        expect(addZeroToTheBeginOfTheNumber(5)).toEqual("05");
    });

    it("should return 18", () => {
        expect(addZeroToTheBeginOfTheNumber(18)).toEqual("18");
    });
});
