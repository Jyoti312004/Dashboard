# Dashboard

This project is a full-stack application that provides a dashboard interface for managing students and mentors.

## Client

The client-side of the application is built with React and Vite. It provides a user-friendly interface for interacting with the data. The main components are:

- App.jsx: The main application component.
- Dashboard.jsx: The dashboard component that displays the overall data.
- main.jsx: The entry point of the application.

## Server

The server-side of the application is built with Node.js. It provides several controllers for managing different aspects of the application:

- assignController.js: Handles the assignment of students to mentors.
- evaluations.js: Manages the evaluations of students.
- getStudents.js: Retrieves the list of students.
- lockController.js: Controls the locking mechanism for the application.
- sendMail.js: Handles sending emails.
- studentDetails.js: Manages the details of individual students.

The server also defines two models:

- Mentor.js: The data model for mentors.
- Student.js: The data model for students.

## Routes

The server defines several routes for interacting with the data:

- evaluationRoutes.js: Routes for managing evaluations.
- mentor.js: Routes for managing mentors.

## Getting Started

To get started with this project, clone the repository and install the dependencies with npm install. Then, you can start the server with npm start and the client with npm run dev.

Please note that you will need to create a .env file in the server directory with your environment variables.

## Contributing

Contributions are welcome! Please read the contributing guidelines before making any changes.

## License

This project is licensed under the MIT License.
