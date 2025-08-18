import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const {id, name, email } = props.eachContact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", float: "right", marginTop: "7px" }}
        onClick={()=>props.clickHandler(id)}
      ></i>
    </div>
    /* <div role="list" className="ui celled list container">
      <div role="listitem" className="item">
        <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
          <div className="header">{name}</div>
          <div>{email}</div>
        </div>
        <div className="trash altenate outline item"></div>
      </div>
    </div> */
  );
};

export default ContactCard;
