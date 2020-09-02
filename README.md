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

3. Demo

In the video we can see different cases of the upload process. 
First of all, we check that the application does not allow files different to png and jpg images, looking how the docx was rejected.
Second of all, we try to upload a heavy image (more than twice the 500KB limit), which is also rejected.
Finally, the upload of an image that matches the conditions is successful.
All results are informed to the user on the screen in a simple way.