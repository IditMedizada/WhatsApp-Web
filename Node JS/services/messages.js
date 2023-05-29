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

const getUsers = async () => {
        const users = await User.find({});
        const usersArray = [];
        for (const user of users) {
            const lastMessage = await Message.findOne({ 'sender.username': user.username })
                .sort({ created: -1 })
                .select('content id created');

            const userWithLastMessage = {
                id: user.id,
                user: {
                    username: user.username,
                    displayName: user.displayName,
                    profilePic: user.profilePic
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