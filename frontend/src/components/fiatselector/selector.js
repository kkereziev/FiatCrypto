import React, { Component } from "react";
import styles from "./fiatsselector.module.css";
class FiatSelector extends Component {
  state = {
    options: ["USD", "BGN", "EUR", "GBP"],
    option: "USD",
  };

  rednerOptions = () => {
    return this.state.options.map((opt) => {
      return (
        <option key={opt} value={opt}>
          {opt}
        </option>
      );
    });
  };

  onChangeOption = (e) => {
    this.setState({
      option: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <select
          required
          className={styles["select-css"]}
          value={this.state.option}
          onChange={this.onChangeOption}
        >
          {this.rednerOptions()}
        </select>
      </div>
    );
  }
}

export default FiatSelector;
