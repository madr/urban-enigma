import React from "react";
import renderer from "react-test-renderer";
import SetStats from "../set-stats";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <SetStats sets={[{ weight: 100, reps: 5 }, { weight: 80, reps: 8 }]} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
