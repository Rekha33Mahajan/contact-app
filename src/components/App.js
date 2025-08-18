import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import Header from "./Header";
import AddContact from "./AddContact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ContactCard from "./ContactCard";
import ContactList from "./ContactList";
import "./App.css";

function App() {
  // const contacts = [
  //   {
  //     id: "1",
  //     "name":"Rekha",
  //     "email":"Rekha@123",
  //   },
  //    {
  //     id: "2",
  //     "name":"Rashmi",
  //     "email":"Rashmi@123",
  //   }
  // ];
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  // => {
  //   const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
  //   return savedContacts ? JSON.parse(savedContacts) : [];
  // });

  const addContactHandler = (eachContact) => {
    console.log(eachContact);
    setContacts([...contacts, { id: uuid(), ...eachContact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((eachContact) => {
      return eachContact.id !== id;
    });
    return setContacts(newContactList);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts && retrieveContacts.length > 0) {
      setContacts(retrieveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            // Component={() => (
            //   <ContactList
            //     contacts={contacts}
            //     getContactId={removeContactHandler}
            //   />)}
            // render={(props) => (
            //   <ContactList
            //     {...props}
            //     contacts={contacts}
            //     getContactId={removeContactHandler}
            //   />
            //)}
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          ></Route>
          <Route
            path="/add"
            // Component={() => (
            //   <AddContact addContactHandler={addContactHandler} />
            // )}
            //render={(props) => (
              // <AddContact {...props} addContactHandler={addContactHandler} />
              
            //)}
            element={<AddContact addContactHandler={addContactHandler} />}
          ></Route>
          {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
          {/* <ContactCard/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
