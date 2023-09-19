import { Component } from "react";
import "./Value.css";

class ValueData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
          <p>{this.props.text2}</p>
        </div>
        <div className="image">
          <img src={this.props.img1} alt="terapia-logopeda-1" />
          <img src={this.props.img2} alt="terapia-logopeda-2" />
        </div>
      </div>
    );
  }
}

export default ValueData;
