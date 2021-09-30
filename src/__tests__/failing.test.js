/**
 * @jest-environment jsdom
 */
import { test, expect } from "@jest/globals";

test("Failing test", () => {
  expect(true).toBe(false);
});
