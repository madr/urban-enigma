import React from "react";
import renderer from "react-test-renderer";
import {
  ExerciseField,
  NameField,
  RatingField,
  RepsField,
  WeightField,
  IsWarmupField,
} from "../fields";

describe("ExerciseField", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ExerciseField
          value={"Bänkpress"}
          choices={["Bänkpress", "Marklyft", "Knäböj"]}
          handleOnChange={() => { }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("NameField", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <NameField value={"Bänkpress Boogie 1.1"} handleOnChange={() => { }} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("RatingField", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<RatingField value={3} handleOnChange={() => { }} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("RepsField", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<RepsField value={5} handleOnChange={() => { }} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("WeightField", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<WeightField value={100} handleOnChange={() => { }} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("IsWarmupField", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <IsWarmupField value={true} handleOnChange={() => { }} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});