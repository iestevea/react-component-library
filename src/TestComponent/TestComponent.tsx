import React from "react";
import { TestComponentProps } from "./TestComponent.types";
import logo from "../logo.png";
import icon from "./assets/female_dev_icon.png";

import "./TestComponent.scss";

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div
    data-testid="test-compone∏nt"
    className={`test-component test-component-${theme}`}
  >
    <div className="images">
      <img src={logo} />
      <img src={icon} />
    </div>
    <h1 className="heading">I'm the test component</h1>
    <h2>Made with love by Iciar</h2>
  </div>
);

export default TestComponent;
