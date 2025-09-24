

Express.js API for a Playing Card Collection

🃏 Project Goal
This project involves creating a RESTful API with Express.js designed to manage a digital collection of playing cards. It serves as a practical exercise in backend development, covering fundamental concepts like API routing, handling various HTTP requests, and performing basic data operations within a Node.js environment.

📁 File Structure

server.js: The sole JavaScript file that contains the entire server and API logic.

✨ Core Functionality
This API provides the following capabilities for managing the card collection:

Create a Card (POST): Adds a new playing card to the collection.

Retrieve All Cards (GET): Fetches a complete list of all cards currently in the collection.

Retrieve a Specific Card (GET): Fetches a single card by its unique ID.

Update a Card (PUT): Modifies the details (suit and value) of an existing card using its ID.

Delete a Card (DELETE): Removes a specific card from the collection by its ID.

🚀 Getting Started
Follow these steps to get the server up and running on your local machine.

Initialize the Node Project:
npm init -y

Install Required Packages:
npm install express

Launch the Server:
node server.js

Once running, the API will be accessible at:
http://localhost:3000

🗺️ API Endpoints
Here is a detailed guide to the available API routes.

Method: GET
Endpoint: /cards
Description: Retrieve a list of all cards.
Request Body (Example): None
Success Response (Example): [{"id":1,"suit":"Hearts","value":"A"}]

Method: GET
Endpoint: /cards/:id
Description: Get a single card by its unique ID.
Request Body (Example): None
Success Response (Example): {"id":1,"suit":"Hearts","value":"A"}

Method: POST
Endpoint: /cards
Description: Create a new card and add it to the collection.
Request Body (Example): { "suit": "Spades", "value": "K" }
Success Response (Example): {"id":2,"suit":"Spades","value":"K"}

Method: PUT
Endpoint: /cards/:id
Description: Replace an existing card's data with new data.
Request Body (Example): { "suit": "Diamonds", "value": "10" }
Success Response (Example): {"id":2,"suit":"Diamonds","value":"10"}

Method: DELETE
Endpoint: /cards/:id
Description: Remove a card from the collection by its ID.
Request Body (Example): None
Success Response (Example): {"message":"Card was deleted."}

🧪 API Testing
All endpoints were validated using Postman to ensure they functioned as expected.

📸 Demonstration Screenshots

Retrieving All Cards
[Image: GET Request for all cards]

Retrieving a Single Card
[Image: GET Request for a single card]

Creating a New Card
[Image: POST Request with a JSON body]

Updating an Existing Card
[Image: PUT Request to update a card]

Deleting a Card
[Image: DELETE Request for a card]

Verifying Deletion
[Image: GET Request after a card has been deleted]

🎓 Key Takeaways
This project reinforced several key backend development skills:

Developed a functional REST API from scratch using Express.js.

Gained practical experience with core HTTP verbs (GET, POST, PUT, DELETE).

Mastered handling of URL parameters and request bodies for data manipulation.

Implemented basic error handling for scenarios like invalid or missing IDs.

Solidified understanding of creating CRUD (Create, Read, Update, Delete) operations.

Enhanced proficiency in API validation and testing using tools like Postman.

Gained hands-on experience with fundamental backend server logic in Node.js.