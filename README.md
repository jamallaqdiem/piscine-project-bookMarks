
# piscine-project-bookMarks

This Team project is a simple web application that allows users to save their favorite website links and keep them organized
During this project, we practiced:


DOM Manipulation: Using addEventListener to create a dynamic experience.
Data Persistence: Working with JSON and localStorage.
Unit Testing: Using Node.js assert and test modules to verify my code logic.
Clean Code: Keeping logic separate from UI.


How we built it:

we used a "Separation of Concerns" approach to keep the code clean:

index.html: The structure of the app.
main.js: Handles the DOM interactions (like clicking buttons).
logic.js: Contains the "brain" of the app (the sorting and data logic).
storage.js: Handles saving and retrieving data from the browser's memory.
logic.test.js: It verifies that the sorting logic correctly puts new timestamps at the top and handles empty data without crashing.

How to run tests:

npm test