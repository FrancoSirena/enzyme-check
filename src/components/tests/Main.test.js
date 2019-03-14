import React from "react";
import { cleanup, render, fireEvent } from "react-testing-library";
import Main from "../Main";

describe("Main", () => {
  afterEach(cleanup);
  test("It should render a checkbox with a label associated", () => {
    const { getByLabelText, getByText } = render(<Main myName="franco" />);
    const component = getByLabelText(/i want to see it/i);
    expect(component.type).toBe("checkbox");
    getByText(/franco/i);
  });
  test("It should show a cute dogo pic if user wants to", () => {
    const { getByAltText, getByLabelText } = render(<Main myName="Franco" />);
    fireEvent.click(getByLabelText(/i want to see it/i));
    expect(getByAltText(/cute dogo/i)).toBeTruthy();
  });
  test("It should reset state if user changes his name", () => {
    let myName = "Franco";
    const { queryByAltText, getByText, rerender, getByAltText, getByLabelText } = render(
      <Main myName={myName} />
    );
    let component = getByLabelText(/i want to see it/i);
    fireEvent.click(component);
    expect(getByAltText(/cute dogo/i)).toBeTruthy();
    myName = "Other name";
    rerender(<Main myName={myName} />);

    getByText(/other name/i);

    component = getByLabelText(/i want to see it/i);
    expect(queryByAltText(/cute dogo/i)).toBeFalsy();
  });
});
