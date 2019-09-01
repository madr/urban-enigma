import React from "react";
import renderer from "react-test-renderer";
import Nav from "../nav";

it("renders correctly", () => {
  const tree = renderer.create(<Nav goto={() => {}} />).toJSON();

  expect(tree).toMatchSnapshot();
});
