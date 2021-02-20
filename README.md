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
  # User Routes 
  - GET `/api/users` To retrieve all Users
  - POST `/api/users` to Create a User
  
    Example JSON:
    `{
	"username" : "example",
	"email" : "example@gmail.com
  }`
  
  - PUT `/api/users/:id` to Update a User
  
  ## Contributing

 Please reach out via email if you wish to contribute (see questions section below)
  
  ## Testing

  No testing currently.
  
  ## License

  [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
  
  ## Questions
  
  * GitHub: [@fancibleunicorn](https://github.com/fancibleunicorn)
  * Email: adamcrandall91@gmail.com
