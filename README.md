# Epslion Calculator

For this challenge you are going to create a calculator. However, the 'work' of the calculator is going to be done on the Server side. 

Here is what you will need:
- A view that has two text fields. These will be used to collect two numbers.
- Have four buttons, one for addition, subtraction, multiplication, and division. When clicked, visually represent that the user has 'selected' a specific mathematical operation. 
- Then have a equals button, when clicked, it grabs the two numbers, and the mathematical operation selected by the user. This should all be bundled up and sent to the server. 
- On the server, have a route that handles the calculation. Once the calculation is complete, send the answer back down to the client, then append that information to the DOM however you would like.

HARD MODE
Save the result to a mongo database, then once that is complete, THEN send the result back down to the client.

PRO MODE
With the information being sent back down from the server as an object that was saved to the database, capture the ID and assign that to the delete button. This means that you can have multiple calculated answers on the DOM at once, each with their own delete button. When the delete button is clicked, send that ID back up to the Server to be deleted from the database. Then, respond back down the client, AND THEN delete it off the DOM. Note: This may require some research into delete with Mongoose.
