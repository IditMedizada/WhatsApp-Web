const Message = require('../models/messages.js');
const User = require('../models/user.js');

let messageCounter = 0;
//add new message ti the DB
const addMessage = async (msg, userId) => {
    const user = await Message.findOne({ id: userId });
    const message = new Message({
        id: messageCounter,
        sender: {
            username: user.username,
            displayName: user.displayName,
            profilePic: user.profilePic
        },
        content: msg
    });
    messageCounter = messageCounter + 1;
    return await message.save();
};

const getUserMessages = async (userId) => {
    const user = await Message.findOne({ id: userId });
    const messages = await Message.find({ 'sender.username': user.username });
    return messages;

}

const getUsers = async (token) => {
    const usersArray = [];
    const user = await User.findOne({ token });
    const userContacts = user.contacts;
    for (const contact of userContacts) {
        const newContact = await User.findOne({ username: contact.username });
        const lastMessage = await Message.findOne({ 'sender.username': newContact.username })
            .sort({ created: -1 })
            .select('content id created');

        const userWithLastMessage = {
            id: newContact.id,
            user: {
                username: newContact.username,
                displayName: newContact.displayName,
                profilePic: newContact.profilePic
            },
            lastMessage: lastMessage ? {
                id: lastMessage.id,
                created: lastMessage.created,
                content: lastMessage.content
            } : null
        };

        usersArray.push(userWithLastMessage);
    }
    return usersArray;
}
module.exports = { addMessage, getUserMessages, getUsers };