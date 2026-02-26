# API Data Structure Reference

## Request Format

### Create Appointment Request
```
Method: POST
URL: /api/appointments
Content-Type: application/json
```

### Request Body
```javascript
{
  // Customer Information
  "customerId": "string",           // Unique identifier or email
  "customerName": "string",         // Customer's full name
  "customerContactNumber": "string", // Phone number (e.g., +1-555-0123)
  
  // Appointment Scheduling
  "appointmentDate": "string",      // Format: YYYY-MM-DD (e.g., 2026-02-15)
  "appointmentTime": "string",      // Format: HH:MM AM/PM (e.g., 10:00 AM)
  
  // Vehicle Information
  "vehicleNumber": "string",        // License plate or registration (e.g., ABC-1234)
  "vehicleModel": "string",         // Vehicle make and model (e.g., Toyota Camry)
  
  // Service Details
  "serviceType": "string",          // Type of service (e.g., Engine Service)
  
  // Appointment Status
  "status": "string",               // pending | confirmed | completed | cancelled
  
  // Additional Information
  "note": "string"                  // Optional notes from customer
}
```

## Response Format

### Success Response (201 Created)
```javascript
{
  "message": "Appointment created successfully",
  "data": {
    "_id": "ObjectId",              // Unique appointment ID
    "customerId": "string",
    "customerName": "string",
    "customerContactNumber": "string",
    "appointmentDate": "string",
    "appointmentTime": "string",
    "vehicleNumber": "string",
    "vehicleModel": "string",
    "serviceType": "string",
    "status": "pending",
    "note": "string",
    "createdAt": "timestamp",       // e.g., 2026-01-19T10:30:00Z
    "updatedAt": "timestamp"        // e.g., 2026-01-19T10:30:00Z
  }
}
```

### Error Response (400/500)
```javascript
{
  "message": "Error description",
  "error": "Detailed error message"
}
```

## Field Specifications

### customerId
- **Type**: String
- **Required**: No (Frontend defaults to email if not provided)
- **Format**: Can be a customer ID or email address
- **Examples**: "CUST-001", "john@example.com"

### customerName
- **Type**: String
- **Required**: Yes
- **Max Length**: Recommended 100 characters
- **Examples**: "John Doe", "Jane Smith"

### customerContactNumber
- **Type**: String
- **Required**: Yes
- **Format**: Phone number (with or without formatting)
- **Examples**: "+1-555-0123", "555-0123", "+44 20 7123 4567"

### appointmentDate
- **Type**: String
- **Required**: Yes
- **Format**: ISO 8601 (YYYY-MM-DD)
- **Validation**: Must be a future date
- **Examples**: "2026-02-15", "2026-12-31"

### appointmentTime
- **Type**: String
- **Required**: Yes
- **Format**: HH:MM AM/PM
- **Valid Options**: 08:00 AM through 04:00 PM
- **Examples**: "10:00 AM", "02:30 PM"

### vehicleNumber
- **Type**: String
- **Required**: Yes
- **Format**: License plate or registration number
- **Max Length**: 20 characters
- **Examples**: "ABC-1234", "XYZ 9876", "CA LICENSE1"

### vehicleModel
- **Type**: String
- **Required**: Yes
- **Format**: Vehicle make and model
- **Max Length**: 100 characters
- **Examples**: "Toyota Camry", "Ford F-150 2020", "BMW X5"

### serviceType
- **Type**: String
- **Required**: Yes
- **Valid Options**: 
  - "General Repairs"
  - "Engine Service"
  - "Transmission"
  - "Oil Change"
  - "Electrical"
  - "Body Work"
  - "Other"

### status
- **Type**: String
- **Required**: Yes (But always "pending" from frontend)
- **Valid Values**:
  - "pending" - New appointment, awaiting confirmation
  - "confirmed" - Confirmed by admin
  - "completed" - Service completed
  - "cancelled" - Appointment cancelled
- **Default**: "pending"

### note
- **Type**: String
- **Required**: No
- **Max Length**: Recommended 1000 characters
- **Format**: Free text, multi-line allowed
- **Examples**: "Check engine light is on", "Can't drive on highway"

## Examples

### Example 1: Basic Appointment
```json
{
  "customerId": "user@example.com",
  "customerName": "John Doe",
  "customerContactNumber": "+1-555-0123",
  "appointmentDate": "2026-02-15",
  "appointmentTime": "10:00 AM",
  "vehicleNumber": "ABC-1234",
  "vehicleModel": "Toyota Camry 2020",
  "serviceType": "Engine Service",
  "status": "pending",
  "note": ""
}
```

### Example 2: Complete Appointment with Notes
```json
{
  "customerId": "CUST-005",
  "customerName": "Jane Smith",
  "customerContactNumber": "555-9876",
  "appointmentDate": "2026-03-20",
  "appointmentTime": "02:00 PM",
  "vehicleNumber": "XYZ-5678",
  "vehicleModel": "Honda Civic 2019",
  "serviceType": "Electrical",
  "status": "pending",
  "note": "Battery issues and headlight not working properly. Please check alternator as well."
}
```

### Example 3: Oil Change
```json
{
  "customerId": "john.doe@mail.com",
  "customerName": "John Doe",
  "customerContactNumber": "555-0123",
  "appointmentDate": "2026-02-10",
  "appointmentTime": "09:00 AM",
  "vehicleNumber": "ABC-1234",
  "vehicleModel": "Ford F-150",
  "serviceType": "Oil Change",
  "status": "pending",
  "note": "Use synthetic oil, 5W-30"
}
```

## cURL Command Examples

### Create Appointment
```bash
curl -X POST http://localhost:5000/api/appointments \
  -H "Content-Type: application/json" \
  -d '{
    "customerId": "user@example.com",
    "customerName": "John Doe",
    "customerContactNumber": "+1-555-0123",
    "appointmentDate": "2026-02-15",
    "appointmentTime": "10:00 AM",
    "vehicleNumber": "ABC-1234",
    "vehicleModel": "Toyota Camry",
    "serviceType": "Engine Service",
    "status": "pending",
    "note": "Check engine light"
  }'
```

### Fetch All Appointments
```bash
curl -X GET http://localhost:5000/api/appointments
```

### Fetch Single Appointment
```bash
curl -X GET http://localhost:5000/api/appointments/APPOINTMENT_ID
```

### Update Appointment
```bash
curl -X PUT http://localhost:5000/api/appointments/APPOINTMENT_ID \
  -H "Content-Type: application/json" \
  -d '{
    "status": "confirmed"
  }'
```

### Delete Appointment
```bash
curl -X DELETE http://localhost:5000/api/appointments/APPOINTMENT_ID
```

## JavaScript/Fetch Examples

### Create Appointment
```javascript
const appointmentData = {
  customerId: "user@example.com",
  customerName: "John Doe",
  customerContactNumber: "+1-555-0123",
  appointmentDate: "2026-02-15",
  appointmentTime: "10:00 AM",
  vehicleNumber: "ABC-1234",
  vehicleModel: "Toyota Camry",
  serviceType: "Engine Service",
  status: "pending",
  note: "Check engine light"
};

const response = await fetch('http://localhost:5000/api/appointments', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(appointmentData)
});

const result = await response.json();
console.log(result);
```

## HTTP Status Codes

| Code | Meaning | Response |
|------|---------|----------|
| 201 | Created | Appointment successfully created with ID |
| 400 | Bad Request | Missing or invalid fields |
| 404 | Not Found | Appointment ID not found (on GET/PUT/DELETE) |
| 500 | Server Error | Database or server error |

## Validation Rules

### Required Fields
- ✓ customerName
- ✓ customerContactNumber
- ✓ appointmentDate (must be future date)
- ✓ appointmentTime (must be valid time slot)
- ✓ vehicleNumber
- ✓ vehicleModel
- ✓ serviceType

### Optional Fields
- customerId (defaults to email if not provided)
- note (can be empty string)

### Format Validation
- appointmentDate: Must match YYYY-MM-DD
- appointmentTime: Must match HH:MM AM/PM
- customerContactNumber: Standard phone formats
- serviceType: Must be one of predefined values

## Frontend to Backend Flow

```
User fills form
    ↓
Form validation (client-side)
    ↓
Create appointmentData object
    ↓
POST /api/appointments
    ↓
Backend validation
    ↓
Save to database
    ↓
Return appointment with ID
    ↓
Show success message
    ↓
Reset form
```

## Database Schema (MongoDB)

```javascript
{
  _id: ObjectId,
  customerId: String,
  customerName: String,
  customerContactNumber: String,
  appointmentDate: String,
  appointmentTime: String,
  vehicleNumber: String,
  vehicleModel: String,
  serviceType: String,
  status: String,
  note: String,
  createdAt: Date,
  updatedAt: Date,
  __v: Number
}
```

---

**Keep this file handy for API implementation reference!**
