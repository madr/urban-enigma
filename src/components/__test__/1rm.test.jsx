import React from "react";
import renderer from "react-test-renderer";
import OneRM from "../1rm";

it("renders correctly", () => {
  const tree = renderer.create(<OneRM />).toJSON();

  expect(tree).toMatchSnapshot();
});
