# Online Course Client


This is the client-side application for an online course platform, designed to provide a user-friendly interface for students to browse courses, enroll in classes, and interact with instructors. The platform is built using React and Vite for efficient development and includes features for user authentication, course management, payment processing, and more.

## Overview

This project is built using [React](https://reactjs.org/) and [Vite](https://vitejs.dev/) for fast and efficient development.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Atik-Sahariyar/online-course-client.git

2. Navigate to the project directory:
   ```bash
   cd online-course-client
3. Install dependencies:
   ```bash
   npm install
## Usage 
1. Create an `.env.local` file in the root of the project.
2. Copy the content from example.env and replace placeholders with your actual credentials.
3. Save the `.env.local` file with your updated values.
4. Start the development server:
   ```bash
   npm run dev
## Live Demo

[Live Demo Link](https://disillusioned-rabbit.surge.sh/) 

## Backend Code

The backend code for this project can be found [here](https://github.com/Atik-Sahariyar/online-course-server) 

## Tools and Technologies Used

- **Frontend**:
  - [React](https://reactjs.org/): JavaScript library for building user interfaces.
  - [Vite](https://vitejs.dev/): Frontend build tool for modern web development.
  - [React Router](https://reactrouter.com/): Declarative routing for React applications.
  - [Axios](https://axios-http.com/): Promise-based HTTP client for browser and Node.js.

- **Styling**:
  - [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework.
  - [DaisyUI](https://daisyui.com/): Tailwind CSS component library.

- **State Management**:
  - [@tanstack/react-query](https://react-query.tanstack.com/): Data fetching and caching library.

- **Other Utilities**:
  - [Firebase](https://firebase.google.com/): Backend services like authentication, database, etc.
  - [Stripe](https://stripe.com/): Online payment processing for internet businesses.
  - [LocalForage](https://localforage.github.io/localForage/): Offline storage using IndexedDB.

## Routes

### Public Routes

- `/` - Home page
- `/signup` - Sign up page
- `/login` - Login page
- `/courseDetails/:id` - Course details page
- `/courseEnrollment/:id` - Course enrollment page
- `/teachers` - Teachers page
- `/success` - Success page

### Protected Routes

- `/dashboard` - User dashboard
  - `/dashboard/myClasses` - User's enrolled classes
  - `/dashboard/addCourse` - Admin route to add a new course
  - `/dashboard/manageCourse` - Admin route to manage courses
  - `/dashboard/uploadContent/:id` - Admin route to upload content for a specific course

</br>

## Project Folder Structure

The project folder structure follows a modular approach to organize files and components logically:

```plaintext
├── src/
│   ├── main.jsx
│   ├── index.css
│   ├── Provider/
│   │   └── AuthProvider.jsx
│   ├── Routes/
│   │   └── routes.jsx
|   |   |─  PrivateRoute.jsx
│   |   └── adminRoute.jsx
│   ├── Layout/
│   │   ├── Root.jsx
│   │   └── Dashboard.jsx
│   ├── Pages/
│      ├── Home/
│      │   ├── Home.jsx
│      │   └── Courses/
│      │       ├── CourseDetails.jsx
│      │       └── CourseEnrollment.jsx
│      ├── LogIn/
│      │   └── LogIn.jsx
│      ├── SignUp/
│      │   └── SignUp.jsx
│      ├── Teachers/
│      │   └── Teachers.jsx
│      ├── Success/
│      │   └── Success.jsx
│      └── Dashboard/
│         ├── AdminDashboard/
│         │   ├── AddCourse/
│         │   │   └── AddCourse.jsx
│         │   ├── ManageCourse/
│         │   │   └── ManageCourse.jsx
│         │   └── UploadContent/
│         │       └── UploadContent.jsx
│         └── UserDashboard/
│             └── MyClasses/
│                 └── MyClasses.jsx
│   
├── index.html
├── .env.example
├── package.json
├── README.md
└── ...other project files and directories
