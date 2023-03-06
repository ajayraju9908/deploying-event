import React, { useState } from 'react';

import './Styles/Checkoutpage.css';
const EventLocationOptions = [
  {
    id: 1,
    name: 'Baghajatin, Kolkata, WB',
    distance: 10
  },
  {
    id: 2,
    name: 'Garia, Kolkata, WB',
    distance: 20
  },
  {
    id: 3,
    name: 'Sealdaha, Kolkata, WB',
    distance: 15
  },
  {
    id: 4,
    name: 'Jadavpur, Kolkata, WB',
    distance: 25
  }
];

const CheckoutPage = () => {
  const [eventStartDate, setEventStartDate] = useState('');
  const [eventEndDate, setEventEndDate] = useState('');
 
  const [location, setLocation] = useState(EventLocationOptions[0]);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [transportCharge, setTransportCharge] = useState(0);

  const calculateTransportCharge = () => {
    const distance = location.distance * 2; // multiply by 2 as it's for round trip
    if (distance <= 30) {
      setTransportCharge(1500);
    } else {
      const extraDistance = distance - 30;
      const extraCharge = extraDistance * 50;
      setTransportCharge(1500 + extraCharge);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateTransportCharge();
    // add your logic for handling form submission here
  };

  return (
    <div className='Con'>
      <div  className='fo'>
      <form onSubmit={handleSubmit}>
        <div> 
          <label>Event Start Date and Time:</label>
          <input type="datetime-local" value={eventStartDate} onChange={(e) => setEventStartDate(e.target.value)} required />
        </div>
        <div>
          <label>Event End Date and Time:</label>
          <input type="datetime-local" value={eventEndDate} onChange={(e) => setEventEndDate(e.target.value)} min={eventStartDate} required />
        </div>
        
        <div>
          <label>Location where event will be held:</label>
          <select value={location.id} onChange={(e) => setLocation(EventLocationOptions.find(option => option.id === parseInt(e.target.value)))}>
            {EventLocationOptions.map(option => (
              <option key={option.id} value={option.id}>{option.name}</option>
            ))}
          </select>
          <p>Total Distance: {location.distance * 2} km</p>
        </div>
        <div>
          <label>Payment Method:</label>
          <input type="text" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required />
        </div>
        <div>
          <label>Transport Charge:</label>
          <p>{transportCharge} rs</p>
        </div>
        <div>
          <button type="submit">Make Enquiry</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default CheckoutPage;
