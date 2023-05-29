import Contact from "./Contact";
import { useState } from "react";
//creating for all the contacts a ul
function ContactListResults({ contacts, changeContact, me, sentList }) {

  //selected contact setter and getter
  const [selectedContact, setSelectedContact] = useState(null);

  //if a contacts selected we want to set him as selected, and
  //send it to the right side with changeContact to see his messages
  //and see his profile
  const onSelectContact = (contact) => {
    setSelectedContact(contact);
    changeContact(contact);
  };

 // sorting the contacts by the last message sent
  // const sortedContacts = contacts.sort((contactA, contactB) => {
  //   return contactA.lastMessage.created - contactB.lastMessage.created;

  
  //   const sortedMessages = fetchedData.sort((a, b) => {
  //     return new Date(a.created) - new Date(b.created);
  //   });


  //   if(contactA.lastMessage.content === ""){
  //     return 1
  //   }
  //   if(contactB.lastMessage.content === ""){
  //     return -1;
  //   }
  //   if (contactA.lastMessage.created < contactB.lastMessage.created) {
  //     return 1;
  //   } else if (contactA.lastMessage.created > contactB.lastMessage.created) {
  //     return -1;
  //   } else {
  //     return 0;
  //   }
  // });

  //make a list of all the contacts
  const contactsList = contacts.map((contact, key) => {
    const isSelected = contact === selectedContact;
    return <Contact key={key} isSelected={isSelected}
      contact={contact} onSelectContact={onSelectContact} me={me} sentList={sentList} />;
  });

  return (
    //<!--contacts-->
    <div id="contacts">
      <ul className="listClass">
        {contactsList}
      </ul>
    </div>
  );
}

export default ContactListResults