const functions = require("../src/functions");

describe("bootcamp()", () => {  
  describe("divide function part", () => {
    it("should return divide numbers", () => {
        expect(functions.divide(6, 2)).toBe(3);
      });

    it("should throw error when divide by zero", () => {
        expect(() => {
            functions.divide(3, 0)
        }).toThrow("Divide By Zero!");
      });

    it("should throw error when dividend is not a number", () => {
        expect(() => {
            functions.divide("NaN", 3)
        }).toThrow("Invalid Numbers!");
      });

      it("should throw error when divisor is not a number", () => {
        expect(() => {
            functions.divide(3,"NaN")
        }).toThrow("Invalid Numbers!");
      });
  });

  describe("toPascalCase function", () => {
    it("should return title with capitalize the first letter of each word", () => {
        expect(functions.toPascalCase("test")).toBe("Test");
      });   

      it("should return empty string ", () => {
        expect(functions.toPascalCase("")).toBe("");
      });   
  });
});

