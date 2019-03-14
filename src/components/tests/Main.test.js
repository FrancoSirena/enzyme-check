import React from "react";
import { cleanup, render, fireEvent } from "react-testing-library";
import Main from "../Main";

describe("Main", () => {
  afterEach(cleanup);
  test("It should render a checkbox with a label associated", () => {
    const { getByLabelText } = render(<Main />);
    const component = getByLabelText(/i want to see it/i);
    expect(component.type).toBe("checkbox");
  });
  test("It should show a cute dogo pic if user wants to", () => {
    const { getByAltText, getByLabelText } = render(<Main />);
    fireEvent.click(getByLabelText(/i want to see it/i));
    expect(getByAltText(/cute dogo/i)).toBeTruthy();
  });
  test('It should reset state if user changes his name', () => {
    const myName = 'Franco';
    const { getByText } = render(<Main myName={myName} />)
  })
});
