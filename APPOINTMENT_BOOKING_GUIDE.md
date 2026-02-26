# Appointment Booking Implementation Guide

## Overview
This document describes the appointment booking system implemented in the CH Automobile website. Users can now schedule service appointments online and submit their information to the backend.

## Features

### 1. **Appointment Form Fields**
The booking form collects the following information from customers:

#### Customer Information
- **Customer ID** (Optional): Customer's ID if they have an existing account
- **Full Name** (Required): Customer's full name
- **Phone Number** (Required): Customer's contact number
- **Email** (Required): Customer's email address

#### Vehicle Details
- **Vehicle Number** (Required): Vehicle registration/plate number
- **Vehicle Model** (Required): Make and model of the vehicle
- **Vehicle Type** (Optional): Type of vehicle (Sedan, SUV, Truck, etc.)
- **Vehicle Year** (Optional): Year of manufacture

#### Service Details
- **Service Type** (Required): Type of service needed (General Repairs, Engine Service, etc.)
- **Preferred Date** (Required): Appointment date
- **Preferred Time** (Required): Appointment time (8 AM - 4 PM available)

#### Additional Information
- **Additional Notes** (Optional): Any special requirements or vehicle issues

### 2. **Backend Data Structure**
The following data is sent to the backend in the appointment creation request:

```json
{
  "customerId": "string - unique customer identifier",
  "customerName": "string - full name",
  "customerContactNumber": "string - phone number",
  "appointmentDate": "string - YYYY-MM-DD format",
  "appointmentTime": "string - HH:MM format (24-hour)",
  "vehicleNumber": "string - license plate/registration",
  "vehicleModel": "string - vehicle make and model",
  "serviceType": "string - type of service",
  "status": "string - appointment status (pending, confirmed, completed, cancelled)",
  "note": "string - additional notes"
}
```

### 3. **API Endpoints**

#### Create Appointment
- **URL**: `POST /api/appointments`
- **Headers**: `Content-Type: application/json`
- **Body**: Appointment object (see structure above)
- **Response**: Created appointment object with ID

#### Example cURL Request:
```bash
curl -X POST http://localhost:5000/api/appointments \
  -H "Content-Type: application/json" \
  -d '{
    "customerId": "CUST-001",
    "customerName": "John Doe",
    "customerContactNumber": "+1-555-0123",
    "appointmentDate": "2026-02-15",
    "appointmentTime": "10:00",
    "vehicleNumber": "ABC-1234",
    "vehicleModel": "Toyota Camry",
    "serviceType": "Engine Service",
    "status": "pending",
    "note": "Check engine light is on"
  }'
```

### 4. **Frontend Components**

#### Booking Component
- **File**: `src/components/Booking.jsx`
- **Functionality**: 
  - Displays the appointment booking form
  - Collects customer and appointment information
  - Validates required fields
  - Submits appointment data to backend
  - Displays success/error toast notifications

#### Appointment Service
- **File**: `src/services/appointmentService.js`
- **Functions**:
  - `createAppointment()` - Create new appointment
  - `fetchAppointments()` - Get all appointments
  - `fetchAppointmentById()` - Get single appointment
  - `updateAppointment()` - Update existing appointment
  - `deleteAppointment()` - Delete appointment

### 5. **Configuration**

#### Environment Variables
Create a `.env` file in the project root with:
```
VITE_API_BASE_URL=http://localhost:5000/api
```

The API base URL defaults to `http://localhost:5000/api` if not specified.

### 6. **Error Handling**
The system includes comprehensive error handling:
- Validation of required fields before submission
- API error messages displayed to users
- Console logging for debugging
- Toast notifications for user feedback

### 7. **Status Values**
Appointments can have the following statuses:
- `pending` - Newly created appointment awaiting confirmation
- `confirmed` - Appointment confirmed by admin
- `completed` - Service has been completed
- `cancelled` - Appointment was cancelled

## Usage Example

### For Frontend Developers
To create an appointment programmatically:

```javascript
import { createAppointment } from '../services/appointmentService';

const appointmentData = {
  customerId: 'CUST-123',
  customerName: 'John Doe',
  customerContactNumber: '+1-555-0123',
  appointmentDate: '2026-02-15',
  appointmentTime: '10:00',
  vehicleNumber: 'ABC-1234',
  vehicleModel: 'Toyota Camry',
  serviceType: 'Engine Service',
  status: 'pending',
  note: 'Check engine light is on'
};

try {
  const response = await createAppointment(appointmentData);
  console.log('Appointment created:', response);
} catch (error) {
  console.error('Failed to create appointment:', error);
}
```

### For Backend Developers
Expected endpoint implementation:
```javascript
// Express.js example
app.post('/api/appointments', async (req, res) => {
  try {
    const appointmentData = req.body;
    // Validate required fields
    // Save to database
    // Return created appointment with ID
    res.status(201).json(createdAppointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
```

## Testing the Integration

1. **Start the backend server** on port 5000
2. **Update `.env`** with your backend URL if different
3. **Start the frontend development server**: `npm run dev`
4. **Navigate to the booking section** on the home page
5. **Fill out the form** with test data
6. **Submit the form** and check:
   - Console for successful API call
   - Toast notification for confirmation
   - Backend database for created record

## File Structure
```
src/
├── components/
│   └── Booking.jsx          # Appointment form component
├── services/
│   └── appointmentService.js # API service functions
└── pages/
    └── Appointments.jsx      # Appointments listing page
```

## Notes
- Default CustomerId is set to email if not provided
- All required fields must be filled before submission
- Appointment dates cannot be in the past
- Time slots are predefined (8 AM - 4 PM)
- Additional notes field supports multi-line text

## Future Enhancements
- Email confirmation after booking
- SMS notifications
- Appointment reminders
- Online payment integration
- Admin dashboard for appointment management
- Appointment rescheduling
- Customer reviews after service completion
