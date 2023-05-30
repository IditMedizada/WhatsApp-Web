import LeftPanel from "../LeftPanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";
import { useState } from "react";

//the chat block contains the chat and the contacts panel
function BigBlock({ me }) {

  const [selectedContact, setSelectedContact] = useState(null);
  const [sentList, setSentList] = useState([]);
  

  async function getMessagesForContact(contact, me) {
    const res = await fetch(`http://localhost:5000/api/Chats/${contact.id}/Messages`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + me.token // attach the token
      },
    });
    const fetchedData = await res.json();
    // const sortedMessages = fetchedData.sort((a, b) => {
    //   return new Date(a.created) - new Date(b.created);
    // });
    setSentList(fetchedData);
  };

  //each time sent message we add it to the sentList
  const addMassage = async function (message) {
    const sendMessage = {
      "msg": message,
    };
    const res = await fetch(`http://localhost:5000/api/Chats/${selectedContact.id}/Messages`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + me.token // attach the token
      },
      body: JSON.stringify(sendMessage),
    });
    if (res.ok) {
      const result = await res.text();
      const newMessage = JSON.parse(result);
      setSentList([...sentList, newMessage]);
      setSelectedContact(selectedContact);
    } else {
      console.log('Error:', res.status);
    }
  }

  //setter for the selected contact
  const changeContact = function (contact) {
    setSelectedContact(contact);
    getMessagesForContact(contact, me);
  };

  return (
    <div id="frame">

      {/* contacts, profile and search for contacts */}
      <LeftPanel changeContact={changeContact} sentList={sentList} me={me} />

      {/* messages, contact profile and input messages */}
      <RightPanel selectedContact={selectedContact} me={me}
        sentList={sentList} addMassage={addMassage} />

    </div>
  );
}

export default BigBlock;