import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";

import Main from "../Main";

describe("Main", () => {
  it("Should have an input with a label to the user", () => {
    const wrapper = mount(<Main />);
    expect(wrapper.find('input[type="checkbox"]')).to.have.length(1);
    expect(wrapper.find("label").text()).to.equal("I want to see it");
  });
  it("Should see a beatiful dogo if input is checked", () => {
    const wrapper = mount(<Main />);
    wrapper.find('input[type="checkbox"]').simulate('change', {
      target: {
        checked: true
      }
    });
    expect(wrapper.find("img")).to.have.length(1);
  });
});
