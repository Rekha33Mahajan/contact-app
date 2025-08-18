import React from "react";

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
    console.log(this.state);
  };
  
  render() {
    return (
      <form className="ui form container" onSubmit={this.add}>
        <div className="field">
          <label>First Name</label>
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
      </form>
    );
  }
}

export default AddContact;
