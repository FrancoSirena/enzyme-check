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
  it('Should reset state after name has changed', () => {
    let myName = 'franco';
    const wrapper = mount(<Main myName={myName}/>);
    expect(wrapper.find('span').text()).to.contain(myName);
    wrapper.find('input[type="checkbox"]').simulate('change', {
      target: {
        checked: true
      }
    });
    expect(wrapper.find("img")).to.have.length(1);

    wrapper.setProps({
      myName: 'other'
    });

    wrapper.update();

    expect(wrapper.find('span').text()).to.contain('other');
    expect(wrapper.find("img")).to.have.length(0);
    
  })
});
