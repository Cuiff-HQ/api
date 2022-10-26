import { IndexService } from "../../services";

describe("indexController", () => {
    it("should return a string with Hello, World!", async () => {
        const response = await IndexService.helloWorld();
        expect(response).toEqual("Hello, World!");
    });
});
