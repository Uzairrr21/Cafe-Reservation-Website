# ☕ Cafe Reservation System

A full-stack web application for managing cafe reservations, built with Node.js, Express, MongoDB, and React.

---

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/React-Frontend-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/MongoDB-Database-brightgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Author-Uzairrr21-orange?style=for-the-badge" />
</p>

---

## 📂 Project Structure

```text
cafe-reservation/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   ├── models_new/
│   │   └── Reservation.js
│   └── routes/
│       └── reservations.js
└── frontend/
    ├── package.json
    ├── public/
    │   └── index.html
    └── src/
        ├── App.js
        ├── index.js
        └── style.css
```

---

## ✨ Features

- **Reservation Management:** Create, view, and manage cafe reservations.
- **Modern UI:** Responsive and user-friendly interface built with React.
- **RESTful API:** Backend API for handling reservation data.
- **MongoDB Integration:** Persistent data storage for reservations.
- **Environment Configuration:** Secure environment variables for sensitive data.
- **Separation of Concerns:** Clean separation between frontend and backend code.
- **Animated UI:** Smooth transitions and interactive elements for a delightful user experience.

---

## 🛠️ Technologies Used

- **Frontend:** React, CSS (with animations)
- **Backend:** Node.js, Express
- **Database:** MongoDB (via Mongoose)
- **Other:** dotenv, REST API

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Uzairrr21/cafe-reservation.git
cd cafe-reservation
```

### 2. Backend Setup

```bash
cd backend
npm install
```

- Configure your `.env` file with MongoDB URI and other secrets.

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

---

## 🏃‍♂️ Running the Application

### 1. Start the Backend Server

```bash
cd backend
node server.js
```

### 2. Start the Frontend Development Server

```bash
cd frontend
npm start
```

- The frontend will run on [http://localhost:3000](http://localhost:3000)
- The backend API will run on [http://localhost:5000](http://localhost:5000) (default)

---

## 📚 Code Overview

### Backend

- **server.js:** Entry point for Express server, connects to MongoDB, sets up middleware and routes.
- **models_new/Reservation.js:** Mongoose schema/model for reservations.
- **routes/reservations.js:** Express routes for reservation CRUD operations.

### Frontend

- **src/App.js:** Main React component, handles UI and API calls. Includes animated transitions for reservation actions.
- **src/index.js:** Entry point for React app.
- **src/style.css:** Custom styles and CSS animations for the app.

---

## 🔒 Environment Variables

Create a `.env` file in the `backend/` directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## 📬 API Endpoints

- `GET /api/reservations` - List all reservations
- `POST /api/reservations` - Create a new reservation
- `PUT /api/reservations/:id` - Update a reservation
- `DELETE /api/reservations/:id` - Delete a reservation

---

## 🎨 Screenshots & Animations

<p align="center">
  <img src="https://user-images.githubusercontent.com/placeholder/cafe-reservation-demo.gif" alt="Cafe Reservation Demo" width="600" />
</p>

> _The UI features smooth fade-in, slide, and hover animations for a modern experience. Add your own GIFs/screenshots for a more personalized README!_

---

## 👤 Author

**Uzairrr21**  
GitHub: [Uzairrr21](https://github.com/Uzairrr21)

---

## 📄 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📧 Contact

For questions or feedback, please contact [Uzairrr21](https://github.com/Uzairrr21).

---

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=24&pause=1000&color=F7A900&center=true&vCenter=true&width=435&lines=Welcome+to+Cafe+Reservation!;Make+your+booking+now!"/>
</p>

_Thank you for checking out this project!_
