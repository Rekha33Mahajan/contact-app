import React from "react";
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
  return <div className="ui celled list container">{renderContactList}</div>;
};

export default ContactList;
