import 'jsdom-global/register'; 
import { EditNote } from "../src/modules/EditNote";
import { mount } from "enzyme";
import React from "react";


describe("Edit note", () => {
    it("should render Edit Note", () => {
      const wrapper = mount(<EditNote />);
      expect(wrapper).toMatchSnapshot();
    });
  
  });
