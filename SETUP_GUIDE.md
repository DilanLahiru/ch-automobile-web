# Appointment Booking - Quick Setup Guide

## What Was Implemented

✅ **Complete Appointment Booking System** with the following components:

### 1. **Appointment Service** (`src/services/appointmentService.js`)
- API functions for creating, fetching, updating, and deleting appointments
- Configurable API base URL via environment variables
- Proper error handling and logging

### 2. **Enhanced Booking Form** (`src/components/Booking.jsx`)
Updated with all required fields to match your backend requirements:
- Customer ID (optional)
- Customer Name (required)
- Contact Number (required)
- Email (required)
- Vehicle Number (required)
- Vehicle Model (required)
- Service Type (required)
- Appointment Date (required)
- Appointment Time (required)
- Additional Notes (optional)

### 3. **Data Structure Sent to Backend**
```javascript
{
  customerId: "string",           // Customer ID or email
  customerName: "string",         // Full name
  customerContactNumber: "string", // Phone number
  appointmentDate: "YYYY-MM-DD",  // Date in ISO format
  appointmentTime: "HH:MM AM/PM",  // Time from dropdown
  vehicleNumber: "string",        // Vehicle plate/registration
  vehicleModel: "string",         // Vehicle make and model
  serviceType: "string",          // Selected service
  status: "pending",              // Always "pending" for new appointments
  note: "string"                  // Customer notes
}
```

## Setup Instructions

### 1. **Environment Configuration**
Create a `.env` file in the project root:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Or use the provided `.env.example` as a template.

### 2. **Install Dependencies** (if not already done)
```bash
npm install
```

### 3. **Start the Development Server**
```bash
npm run dev
```

### 4. **Backend Requirements**
Your backend needs to have an endpoint:
- **URL**: `POST /api/appointments`
- **Accepts**: JSON body with the data structure above
- **Returns**: Created appointment object with an ID

## Testing the Integration

### Local Testing
1. Go to http://localhost:5173 (or your dev server URL)
2. Navigate to the "Booking" section on the homepage
3. Fill out the form with test data:
   - Full Name: "John Doe"
   - Phone: "+1-555-0123"
   - Email: "john@example.com"
   - Vehicle Number: "ABC-1234"
   - Vehicle Model: "Toyota Camry"
   - Service Type: "Engine Service"
   - Date: Pick a future date
   - Time: Select a time slot
4. Click "Confirm Booking"
5. Check for:
   - ✅ Success toast notification
   - ✅ Console logs showing the API call
   - ✅ Backend receiving the data

### cURL Test (Optional)
```bash
curl -X POST http://localhost:5000/api/appointments \
  -H "Content-Type: application/json" \
  -d '{
    "customerId": "CUST-001",
    "customerName": "John Doe",
    "customerContactNumber": "+1-555-0123",
    "appointmentDate": "2026-02-15",
    "appointmentTime": "10:00 AM",
    "vehicleNumber": "ABC-1234",
    "vehicleModel": "Toyota Camry",
    "serviceType": "Engine Service",
    "status": "pending",
    "note": "Test appointment"
  }'
```

## File Structure
```
CHAutomobileWeb/
├── src/
│   ├── components/
│   │   ├── Booking.jsx          ← Updated with all required fields
│   │   └── ui/
│   │       └── textarea.tsx      ← Used for notes field
│   ├── services/
│   │   └── appointmentService.js ← New API service
│   ├── pages/
│   │   └── Appointments.jsx      ← For viewing appointments (future enhancement)
│   └── App.jsx
├── .env.example                  ← Environment template
├── APPOINTMENT_BOOKING_GUIDE.md  ← Detailed documentation
└── package.json
```

## Key Features

✅ **Form Validation** - All required fields are validated before submission
✅ **Error Handling** - Proper error messages displayed to users
✅ **Loading State** - Button shows "Booking..." while submitting
✅ **Toast Notifications** - Success and error feedback
✅ **Form Reset** - Clears all fields after successful submission
✅ **Date/Time Validation** - Can't select past dates, predefined time slots
✅ **Responsive Design** - Works on mobile and desktop

## Troubleshooting

### "Failed to create appointment" Error
- Check if your backend is running on port 5000
- Verify the API endpoint path is `/api/appointments`
- Check browser console for detailed error messages
- Ensure backend expects POST request with JSON body

### Textarea Component Not Found
- The Textarea component is already included in `src/components/ui/`
- If you get import errors, ensure the file exists

### API Not Responding
- Verify `VITE_API_BASE_URL` environment variable is set correctly
- Check if backend server is running
- Look for CORS issues in browser console

## Next Steps

1. **Test with your backend** - Submit the form and verify data reaches your database
2. **Add email notifications** - Confirm appointments with email
3. **Create Appointments page** - Display user's appointments (already exists as route)
4. **Add payment integration** - If you need deposit/payment
5. **Admin dashboard** - Manage appointments, reschedule, etc.

## Support Files

- `APPOINTMENT_BOOKING_GUIDE.md` - Complete technical documentation
- `src/services/appointmentService.js` - All API functions with JSDoc comments
- `.env.example` - Environment variable template

---

**Happy Booking! 🚗**
