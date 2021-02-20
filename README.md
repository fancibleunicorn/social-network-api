# social-network-api

  ## Description

 A back-end application to create, update, and maintain a NoSQL database of users, friends, thoughts, and reactions for a social network site.
  
To view a walkthrough, [Click Here](https://drive.google.com/file/d/1UDQmfLQG4CP5Pzqe7s9Gp6ENQgPQMbJJ/view)
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation

  You will need Node.js to run this program.  After cloning the code to your local device, be sure to run "node npm install" to include essential npm packages, includings Express and Mongoose.
  
  ## Usage 

Run "node server" or "npm start" to start the program.  You will need to run the api routes via Insomnia in order to update the database:

  ### User Routes 
  - GET `/api/users` to retrieve all Users
  - GET `/api/users/:id` to rtreive a single User by their id
  - POST `/api/users` to create a User
  
    Example JSON:
    
    ```json
    {
    
	"username" : "example",
	
	"email" : "example@gmail.com
	
 	}
	```
  
  - PUT `/api/users/:id` to update a User's information based on their id
  - DELETE `/api/users/:id` to delete a User based on their id

### Friend Routes
- POST `/api/users/:userId/friends/:friendId` to add a User to another User's friends array based on their respective id's
- DELETE `/api/users/:userId/friends/:friendId` to remove a User from another User's friends array based on their respective id's

### Thought Routes
- GET `/api/thoughts` to retrieve all Thoughts
- GET `/api/thoughts/:id` to retrieve a single Thought by its id
- POST `/api/thoughts/:userId` to create a Thought for a specific User based on their id

	Example JSON:
	
	
    ```json
    {
    
	"thoughtText": "new thought",
	"username": "example name"
	
 	}
	```

- PUT `/api/thoughts/:userId/:thoughtId` to update a Thought based on its id and the user who created it
- DELETE `/api/thoughts/:userId/:thoughtId` to delete a Thought based on its id and the user who created it

### Reaction Routes
- POST `/api/thoughts/:thoughtId/reactions` to create a Reaction to a specific Thought based on its id

	Example JSON:

```json
    {
    
	"reactionBody": "What a great thought!",
	"username": "Robert"
	
 	}
	```
	
- DELETE `/api/thoughts/:thoughtId/reactions/:reactionId` to delete a Reaction based on its id and the Thought its reacting on's id

  
  ## Contributing

 Please reach out via email if you wish to contribute (see questions section below)
  
  ## Testing

  No testing currently.
  
  ## License

  [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
  
  ## Questions
  
  * GitHub: [@fancibleunicorn](https://github.com/fancibleunicorn)
  * Email: adamcrandall91@gmail.com
