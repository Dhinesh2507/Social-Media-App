
![Sample Image](./images/sample-image.png)

# React Blog Application

This is a simple blog application built using React, providing users with the ability to view, add, edit, and delete blog posts. The project is part of the "Learn React" tutorial series.

## Features

- **Home Page**: Displays a list of blog posts.
- **Create Post**: Users can create new blog posts.
- **Edit Post**: Users can edit existing blog posts.
- **Delete Post**: Users can delete blog posts.
- **View Post**: Users can view a single blog post.
- **Search**: Users can search for posts by title or content.
- **Responsive Design**: Adapts to different screen sizes (mobile, tablet, desktop).

## Getting Started

### Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Dhinesh2507/Social-Media-App.git
   cd Social-Media-App

Folder Structure

src: Contains all source code files.
components: Contains the main components (Header.js, Nav.js, About.js, PostPage.js, etc.)
context: Contains the DataContext.js for managing global state.
hooks: Contains custom hooks (like useWindowSize.js).
api: Contains API configurations and mock data (posts.js).
index.js: Main entry point of the React application.
App.js: Root component containing the main layout and routing.

Usage

Home Page: Displays all blog posts.
Create Post: Navigate to /post and fill out the form to create a new post.
Edit Post: Click on a post to view it, then click the "Edit Post" button to modify.
Delete Post: Click the "Delete Post" button on a post page to remove it.
Search: Use the search bar in the navigation to find posts by title or content.

API Endpoints

The project uses a mock API to simulate CRUD operations.

GET /posts: Fetch all posts.
POST /posts: Create a new post.
PUT /posts/:id: Update an existing post.
DELETE /posts/:id: Delete a post.

Custom Hooks

useWindowSize.js: A custom hook that provides the current window size.

Dependencies

react-router-dom: For routing and navigation.
date-fns: For date formatting.
axios: For API calls.
react-icons: For icons.

Development

To contribute to this project:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes.
Commit and push your changes (git commit -am 'Add new feature').
Create a Pull Request.

License

This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments

React
React Router
date-fns
Axios
React Icons
