import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((eachContact) => {
    return (
      <ContactCard
        eachContact={eachContact}
        clickHandler={deleteContactHandler}
        key={eachContact.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue " style={{ float: "right" }}>
            Add New Contact
          </button>
        </Link>
      </h2>
      <div className="ui celled list container">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
