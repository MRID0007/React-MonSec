# MonSec Website

MonSec is the official online presence for Monash University's cybersecurity club. This website provides information about the club, its activities, and membership opportunities. It aims to engage current and prospective students, industry partners, and the broader community by showcasing the club's events, initiatives, and the benefits of joining. Additionally, the website features a video introduction to the club, highlighting its mission to foster cybersecurity knowledge and skills among students.

## Features

- User authentication (registration, login, logout)
- Event information and registration
- Membership application
- Video introduction to the club
- User preferences management

## Technologies Used

- Frontend: React, React Router, Axios
- Backend: Node.js, Express
- Database: MongoDB, Mongoose
- Deployment: Vercel (Frontend), Heroku (Backend)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB (local or MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/monsec-website.git
   cd monsec-website
   ```

2. **Install dependencies for the frontend and backend**

   - Frontend
     ```bash
     cd frontend
     npm install
     ```

   - Backend
     ```bash
     cd backend
     npm install
     ```

### Configuration

1. **Backend Configuration**
   
   Create a `.env` file in the `backend` directory and add the following:
   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm start
   ```

The frontend will run on `http://localhost:3000` and the backend server will run on `http://localhost:5000`.

### Deployment

#### Frontend

1. **Build the React app**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy the `build` folder to a hosting service like Vercel, Netlify, or GitHub Pages**

#### Backend

1. **Deploy the backend to a service like Heroku, AWS, or DigitalOcean**

### API Endpoints

- `POST /api/register` - Register a new user
- `POST /api/login` - Login a user
- `GET /api/events` - Get all events
- `POST /api/events` - Create a new event
- `GET /api/user/preferences` - Get user preferences
- `PUT /api/user/preferences` - Update user preferences

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
