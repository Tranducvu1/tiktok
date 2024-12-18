
# TikTok Clone with React.js

The TikTok Clone app is built with React.js, allowing users to view and upload videos, interact with videos through features like liking and commenting.

## Description

This app simulates the basic features of TikTok, including:

- **Watch Videos**: Browse videos uploaded by other users.
- **Upload Videos**: Users can upload their own videos.
- **Interact**: Like and comment on videos.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Java
- **Database**: MySQL
- **State Management**: Redux
- **Video Processing**: Multer (middleware for handling multipart/form-data, primarily used for file uploads)

## Installation and Running the Application

### 1. Install the Backend
- **Clone the repository**:

```bash
git clone https://github.com/Tranducvu1/tiktok.git
cd tiktok
```

- **Install dependencies**:

```bash
cd backend
npm install
```

- **Configure environment variables**: Create a `.env` file in the backend folder and add the following variables:

```bash
PORT=5000
MYSQL=mysqlmysqldb://localhost:3001/tiktok
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=your_cloudinary_url
```

- **Run the server**:

```bash
npm start
```

### 2. Install the Frontend
- **Install dependencies**:

```bash
cd frontend
npm install
```

- **Configure the API endpoint**: In the file `src/utils/api.js`, update the backend URL:

```javascript
const API_URL = 'http://localhost:5000/api';
```

- **Run the React app**:

```bash
npm start
```

- **Access the app**: Open your browser and go to [http://localhost:3000](http://localhost:3000) to use the app.

## Features

- **Watch Videos**: Browse videos with infinite scrolling.
- **Upload Videos**: Upload videos from your computer to the server.
- **Interact**: Like and comment on videos.

## Development Guidelines

- **Add New Features**: Create new React components in the `frontend/src/components` folder and update routes in `frontend/src/App.js`.
- **State Management**: Use Redux for global state management. Actions and reducers are defined in `frontend/src/redux`.
- **API Integration**: Use Axios for communicating with the backend. API functions are defined in `frontend/src/utils/api.js`.
