const userController = require('../controllers/user.js')
const messagesController = require('../controllers/messages.js');
const express = require('express');
var router = express.Router();

//registration- /api/Users
router.route('/').post(userController.createUser);

//get user details- /api/Users/{username}
router.route('/:username').get(userController.getUserDetails);

//login - api/Token
router.route('/Tokens').post(userController.login);

// //returns details about a specific user - /api/Chats
// router.route('/').post(userController.postUserDetails);

// //add new message to the DB -  api/Chats/{id}/Messages
// router.route('/{id}/Messages'). post(messagesController.addMessage);

// //get user messages - api/Chats/{id}/Messages
// router.route('/{id}/Messages').get(messagesController.getUserMessages);

// //get users - /api/Chats
// router.route('/').get(messagesController.getUsers);

module.exports = router;