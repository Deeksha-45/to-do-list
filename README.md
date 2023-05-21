To create a full stack to-do list application using ReactJS, Flask, Python, and MongoDB.
Prerequisites:

Install Node.js and npm (Node Package Manager) for frontend development.
Install Python and pip (Python Package Installer) for backend development.

Step 1: Set up the Backend

--->Create a new directory for your project.
--->Initialize a virtual environment.
--->Install Flask and other dependencies.
--->Create a Flask app and set up the basic routes and MongoDB connection. You can place this code in a file called app.py.
--->Replace <username>, <password>, <cluster-address>, and <database> in the MongoDB connection string with your actual values. Make sure you have set up a MongoDB Atlas account and created a database.
--->Run the Flask server.
  
  Step 2: Set up the Frontend
 -->Open a new terminal window and navigate to your project directory.
  --->Create a new React app.
  --->Save the file and start the React development server.
  
  Step 3: Test the Application

-->Open your web browser and visit http://localhost:3000 to see the to-do list application.
-->Enter a task in the input field and click the "Add" button. The task should be added to the list.
-->Click the "Delete" button next to a task to delete it from the list.
  
  Step 4: Add Edit and Sort Functionality

To implement the edit functionality and sorting, you can extend the frontend React code and backend Flask code. Below are some suggested modifications:

-->Add an edit functionality to the frontend by adding an additional input field for editing the task name and an update button.
-->Implement an updateTodo function in the frontend that makes a PUT request to the Flask API.
-->Update the Flask API to handle the update functionality.
-->Add sorting functionality to the frontend by adding buttons or dropdowns to select the sort order (ascending/descending) and modify the fetchTodos function to include the sorting query parameter.
-->Update the Flask API to handle the sorting functionality by adding a query parameter to the get_todos route.
  
  Remember to update the frontend and backend accordingly to make them work together.

That's it! You have created a full stack to-do list application using ReactJS, Flask, Python, and MongoDB. 
  
  
  
