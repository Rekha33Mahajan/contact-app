import React from "react";
import { withNavigation } from "./withNavigation";
import { Link } from "react-router-dom";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.navigate("/");
  };

  render() {
    return (
      <form className="ui form container" onSubmit={this.add}>
        <div className="field">
          <label>Name</label>
          <input
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
            placeholder="name"
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            placeholder="email"
          />
        </div>
        <button className="ui button blue" type="submit">
          Add
        </button>
        <Link to="/">
          <button className="ui button blue" type="submit">
            Back
          </button>
        </Link>
      </form>
    );
  }
}

export default withNavigation(AddContact);
