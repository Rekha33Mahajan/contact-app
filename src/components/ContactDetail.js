import React, { useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import user from "../images/user.png";

const ContactDetail = ({ contacts }) => {
  const location = useLocation();
  const params = useParams();

  let contact = location.state?.eachContact;

  if (!contact && contacts) {
    contact = contacts.find((c) => c.id === params.id);
  }

  useEffect(() => {
    console.log("Fetched Contact Data:", contact);
  }, [contact]);

  if (!contact) {
    return (
      <div className="main">
        <h3>No contact found</h3>
        <Link
          to="/"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button className="ui button blue center">
            Back to contact list
          </button>
        </Link>
      </div>
    );
  }

  const { name, email } = contact;

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div>
        <Link
          to="/"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button className="ui button blue">Back to contact list</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
