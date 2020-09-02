# RestAPI1

1. Run the project

The project is divided in 2 parts, frontend (in Angular) and backend (in Node.js).

To run the frontend use the commands:
npm install
ng serve

To run the backend use the commands:
npm install
npm start

Then you can access through http://localhost:4200/

2. Unit tests

The backend has both Cucumber and Supertest dependencies, but due to Multer is a Middleware, it's hard of mocking and unit testing, so this would require a bit more time than the given for the assessment. 
So, in this case, there are not useful tests in the backend but the validations and file upload conditions were tested from the frontend, as a normal user.