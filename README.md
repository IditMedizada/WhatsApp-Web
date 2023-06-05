# WhatsApp-Web
An ongoing task of creating WhatsApp Web application using a combination of several programming languages

## Table of Contents
- [Description](#description)
- [Screens](#screens)
  - [Login Screen](#login-screen)
  - [Registration Screen](#registration-screen)
  - [Chat Screen](#chat-screen)
- [Technologies Used](#technologies-used)
- [Notes](#notes)
- [Installation and Execution](#installation-and-execution)
- [Authors](#authors)

## Description
This is a chat application that allows users to register, login, and communicate with their contacts in real-time. The project includes a server-side component that handles data storage and retrieval using MongoDB as the database.

The registration screen validates all fields to ensure they are filled in correctly, and the user's information is stored in the MongoDB database. The login screen checks the user's credentials against the registered users in the database and authenticates them before granting access to the chat screen.

The chat screen now incorporates sockets to enable real-time communication between users. When a user sends a message, the socket automatically updates the recipient's screen to notify them of the new message. This ensures that users can engage in seamless and immediate conversations.

The chat application features a contact list that allows users to add, search, and select contacts for messaging. The contact information, including the list of contacts and messages, is stored in the MongoDB database and can be accessed and updated in real-time.

The user interface of the application is designed using HTML, CSS, and Bootstrap 5, providing a modern and responsive design. With the server-side functionality and the integration of sockets, this project serves as a robust foundation for building a complete chat application that facilitates efficient communication among users.

## Screens
The project includes the following screens:

### Login Screen
The login screen is the main page of the web application, accessible through the home route. On this screen, users can enter their login credentials and click the "Log in" button to access the chat screen. Users who do not yet have an account can click the "Sign up" button to navigate to the registration screen. The design of the login screen is simple and clean, making it easy for users to quickly access the application. The login form includes input fields for the username and password, with client-side validation to ensure that both fields are filled out before allowing the user to submit the form.

<img width="389" alt="Login Screen" src="https://github.com/IditMedizada/WhatsApp-Web/assets/110912180/bbeef1dd-cd40-4b9a-a7e3-796cf5cf849c"> 


### Registration Screen
The registration screen allows new users to sign up for the chat application. On this screen, users are asked to enter a username, password, display name, and picture. Each field has specific requirements, which are displayed in red under the field when the user clicks on it. Additionally, there is a password verification field to ensure that the user enters the correct password. If the user attempts to register with incomplete or invalid information, an error message is displayed in red at the bottom of the screen indicating the reason they cannot register. The design of the registration screen is similar to the login screen in terms of visibility.

<img width="389" alt="Registration Screen" src="https://github.com/IditMedizada/WhatsApp-Web/assets/110912180/066a12c7-e18b-4d83-b2e9-8c6669a1c4fe">


### Chat Screen
The chat screen consists of two main sections, providing users with an intuitive and seamless chatting experience.

The first section displays a list of contacts with whom the current user is chatting. Each contact is represented by a photo, nickname, and the last message sent or recieved, along with the date and time it arrived. The contact list is interactive, allowing users to switch conversations by simply clicking on a specific contact. To enhance user-friendliness and visual appeal, different colors are displayed when hovering over or pressing a contact.

The second section of the chat screen displays the conversation with the selected contact. Additionally, to delete contacts, providing users with the ability to remove contacts from their list. Users can send messages in real-time, and both sent and received messages are displayed with different designs to differentiate between them. This real-time communication feature enhances the user experience by providing immediate message delivery and response. Furthermore, a search bar has been added to the chat screen, allowing users to quickly find existing contacts. Additionally, there is a button to add new contacts to the list. When users click on the "Add contact" button, a popup window appears, prompting them to enter the username of the recipient they want to add.

To provide users with flexibility, a logout button has been included on the chat screen. Clicking this button allows users to seamlessly transition back to the login screen.

Overall, the chat screen offers an intuitive and visually appealing interface. With features such as real-time messaging, contact deletion, contact search, and the ability to add new contacts, the chat screen provides users with an enhanced and seamless chatting experience.

<img width="389" alt="chat Screen" src="https://github.com/IditMedizada/WhatsApp-Web/assets/110912180/469a8762-0de0-4001-897d-d8c2909a02d8">


## Notes

* Upon logging in, a user will be greeted with a welcoming header "Welcome to teamChat!" displayed on the right side of the message area.
* Messages with more than 20 characters will be truncated on the left panel, with the first 20 characters shown followed by an ellipsis (...) to indicate that there is more to the message.
* The chat system does not support large-sized pictures.
* The chat system does not allow multiple connections with the same user simultaneously. Users can have only one active session per user account at a time. 

## Technologies Used
The project uses the following technologies:

* HTML
* CSS
* Bootstrap 5
* JavaScript
* Jquery
* React
* Node JS
* Mongo DB
* Express

## installation-and-execution
    
To clone and run this application, you'll need [Git](https://git-scm.com) installed on your computer.
  
From your command line:

  
```bash
# Clone this repository.
$  git clone -b master2 https://github.com/IditMedizada/WhatsApp-Web.git

# Go into the repository.  

#Client side:
$ cd WhatsApp-Web
$ cd teamchat  
$ npm install
$ npm start

#Server side
$ cd WhatsApp-Web
$ cd "NODE JS"
$ npm install
$ npm start
```

## Authors
- [Idit Medizada](https://github.com/IditMedizada)
- [Tomer Peisikov](https://github.com/tomerp1812)
