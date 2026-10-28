import { describe, it, expect } from "vitest";
import { findFunctions } from "./extract.js";

describe("findFunctions works", () => {
    it("finds a single function", () => {
        const source = "function hello() { return 1; }"
        const result = findFunctions(source)

        expect(result.length).toBe(1)
        expect(result[0]!.name).toBe("hello")
    })

    it("finds 0 function", () => {
        const source = "nothing to find here"
        const result = findFunctions(source)

        expect(result.length).toBe(0)
    })
})