import React from "react";
import { shallow } from "enzyme";

import App from "../App";

describe("<App /> root component", () => {
  test("renders without crashing", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });

  test("renders <Navigation /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Connect(Navigation)")).toHaveLength(1);
  });
});
