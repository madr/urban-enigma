import React from "react";
import renderer from "react-test-renderer";
import Set from "../set";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Set
        exercise={"Press"}
        sets={[
          { id: 0, reps: 5, weight: 60, rating: 4 },
          { id: 1, reps: 5, weight: 60, rating: 5 },
          { id: 2, reps: 5, weight: 60, rating: 3 }
        ]}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
