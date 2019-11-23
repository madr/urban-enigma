import React from "react";
import renderer from "react-test-renderer";
import Formulas from "../formulas";

it("renders correctly", () => {
  const tree = renderer.create(<Formulas />).toJSON();

  expect(tree).toMatchSnapshot();
});
