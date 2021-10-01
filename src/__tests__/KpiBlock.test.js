/**
 * @jest-environment jsdom
 */
import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import KpiBlock from "../components/base/KpiBlock";

test("displays correct color of value to user when greater than target value", async () => {
  //   ARRANGE
  render(
    <KpiBlock
      svgComponent={null}
      title="conversion"
      time="today"
      value="19%"
      targetValue={15}
    />
  );

  // ACT
  let displayedValue = await screen.getByText("19%");

  //   ASSERT
  expect(displayedValue.className).toContain("text-cyan-400");
});

test("displays correct color of value to user when less than target value", async () => {
  //   ARRANGE
  render(
    <KpiBlock
      svgComponent={null}
      title="conversion"
      time="today"
      value="19%"
      targetValue={20}
    />
  );

  // ACT
  let displayedValue = await screen.getByText("19%");

  //   ASSERT
  expect(displayedValue.className).toContain("text-fuchsia-800");
});
