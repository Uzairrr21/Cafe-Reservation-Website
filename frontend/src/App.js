import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

function App() {
  const [reservations, setReservations] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().slice(0, 16),
    guests: 2,
    specialRequests: ''
  });

  // Fetch reservations from backend
  const fetchReservations = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/reservations');
      setReservations(data);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    }
  };

  // Submit reservation to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/reservations', formData);
      fetchReservations();
      setFormData({
        ...formData,
        name: '',
        email: '',
        phone: '',
        specialRequests: ''
      });
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };

  // Load reservations on mount
  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1> Café Reservations</h1>
        <p>Book your table with ease</p>
      </header>

      <main className="main-content">
        <section className="reservation-form-section">
          <h2>Make a Reservation</h2>
          <form onSubmit={handleSubmit} className="reservation-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Date & Time</label>
                <input
                  id="date"
                  type="datetime-local"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="guests">Guests</label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="specialRequests">Special Requests</label>
              <textarea
                id="specialRequests"
                value={formData.specialRequests}
                onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                rows="3"
              />
            </div>

            <button type="submit" className="submit-btn">Book Table</button>
          </form>
        </section>

        <section className="reservations-list">
          <h2>Upcoming Reservations</h2>
          {reservations.length > 0 ? (
            <div className="reservation-grid">
              {reservations.map(reservation => (
                <div key={reservation._id} className="reservation-card">
                  <div className="reservation-header">
                    <h3>{reservation.name}</h3>
                    <span className="guest-count">{reservation.guests} {reservation.guests === 1 ? 'person' : 'people'}</span>
                  </div>
                  <div className="reservation-details">
                    <p><span>📅</span> {new Date(reservation.date).toLocaleString()}</p>
                    <p><span>✉️</span> {reservation.email}</p>
                    <p><span>📞</span> {reservation.phone}</p>
                    {reservation.specialRequests && (
                      <p className="special-requests">
                        <span>💬</span> {reservation.specialRequests}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-reservations">No reservations yet. Be the first to book!</p>
          )}
        </section>
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Café Reservations</p>
      </footer>
    </div>
  );
}

export default App;