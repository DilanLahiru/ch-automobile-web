// ============================================
// BACKEND API EXAMPLE - Appointment Endpoint
// ============================================
// This is a reference implementation for your backend
// Implement this endpoint to receive appointment data

// Express.js + MongoDB Example
// ============================================

// 1. Mongoose Schema (models/Appointment.js)
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  customerId: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  customerContactNumber: {
    type: String,
    required: true,
  },
  appointmentDate: {
    type: String, // Format: YYYY-MM-DD
    required: true,
  },
  appointmentTime: {
    type: String, // Format: HH:MM AM/PM
    required: true,
  },
  vehicleNumber: {
    type: String,
    required: true,
  },
  vehicleModel: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending',
  },
  note: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Appointment', appointmentSchema);

// ============================================
// 2. Routes (routes/appointments.js)
// ============================================

const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// Create Appointment
router.post('/appointments', async (req, res) => {
  try {
    const {
      customerId,
      customerName,
      customerContactNumber,
      appointmentDate,
      appointmentTime,
      vehicleNumber,
      vehicleModel,
      serviceType,
      status,
      note,
    } = req.body;

    // Validate required fields
    if (
      !customerId ||
      !customerName ||
      !customerContactNumber ||
      !appointmentDate ||
      !appointmentTime ||
      !vehicleNumber ||
      !vehicleModel ||
      !serviceType
    ) {
      return res.status(400).json({
        message: 'Please provide all required fields',
      });
    }

    // Create new appointment
    const appointment = new Appointment({
      customerId,
      customerName,
      customerContactNumber,
      appointmentDate,
      appointmentTime,
      vehicleNumber,
      vehicleModel,
      serviceType,
      status: status || 'pending',
      note: note || '',
    });

    // Save to database
    const savedAppointment = await appointment.save();

    // Send success response
    res.status(201).json({
      message: 'Appointment created successfully',
      data: savedAppointment,
    });

    // Optional: Send email confirmation
    // await sendConfirmationEmail(customerEmail, appointment);

  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({
      message: 'Error creating appointment',
      error: error.message,
    });
  }
});

// Get All Appointments
router.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ appointmentDate: 1 });
    res.status(200).json({
      data: appointments,
      count: appointments.length,
    });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({
      message: 'Error fetching appointments',
      error: error.message,
    });
  }
});

// Get Single Appointment
router.get('/appointments/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        message: 'Appointment not found',
      });
    }

    res.status(200).json({
      data: appointment,
    });
  } catch (error) {
    console.error('Error fetching appointment:', error);
    res.status(500).json({
      message: 'Error fetching appointment',
      error: error.message,
    });
  }
});

// Update Appointment
router.put('/appointments/:id', async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        updatedAt: new Date(),
      },
      { new: true, runValidators: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({
        message: 'Appointment not found',
      });
    }

    res.status(200).json({
      message: 'Appointment updated successfully',
      data: updatedAppointment,
    });
  } catch (error) {
    console.error('Error updating appointment:', error);
    res.status(500).json({
      message: 'Error updating appointment',
      error: error.message,
    });
  }
});

// Delete Appointment
router.delete('/appointments/:id', async (req, res) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);

    if (!deletedAppointment) {
      return res.status(404).json({
        message: 'Appointment not found',
      });
    }

    res.status(200).json({
      message: 'Appointment deleted successfully',
      data: deletedAppointment,
    });
  } catch (error) {
    console.error('Error deleting appointment:', error);
    res.status(500).json({
      message: 'Error deleting appointment',
      error: error.message,
    });
  }
});

module.exports = router;

// ============================================
// 3. Main Server Setup (server.js or app.js)
// ============================================

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/chautomobile')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', require('./routes/appointments'));

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : '',
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// ============================================
// 4. Optional: Email Service (services/emailService.js)
// ============================================

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendConfirmationEmail = async (customerEmail, appointment) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: customerEmail,
    subject: 'Appointment Confirmation - CH Automobile',
    html: `
      <h2>Appointment Confirmation</h2>
      <p>Dear ${appointment.customerName},</p>
      
      <p>Your appointment has been confirmed!</p>
      
      <h3>Appointment Details:</h3>
      <ul>
        <li><strong>Date:</strong> ${appointment.appointmentDate}</li>
        <li><strong>Time:</strong> ${appointment.appointmentTime}</li>
        <li><strong>Vehicle:</strong> ${appointment.vehicleModel}</li>
        <li><strong>Service:</strong> ${appointment.serviceType}</li>
      </ul>
      
      <p>We look forward to serving you!</p>
      
      <p>Best regards,<br>CH Automobile Team</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent to:', customerEmail);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = { sendConfirmationEmail };

// ============================================
// 5. Environment Variables (.env)
// ============================================
/*
MONGODB_URI=mongodb://localhost:27017/chautomobile
PORT=5000
NODE_ENV=development

# Email Configuration (for confirmations)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
*/

// ============================================
// 6. Testing with cURL
// ============================================
/*
# Create Appointment
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
    "note": "Check engine light is on"
  }'

# Get All Appointments
curl -X GET http://localhost:5000/api/appointments

# Get Single Appointment
curl -X GET http://localhost:5000/api/appointments/APPOINTMENT_ID

# Update Appointment
curl -X PUT http://localhost:5000/api/appointments/APPOINTMENT_ID \
  -H "Content-Type: application/json" \
  -d '{
    "status": "confirmed"
  }'

# Delete Appointment
curl -X DELETE http://localhost:5000/api/appointments/APPOINTMENT_ID
*/

// ============================================
// Notes for Implementation
// ============================================
/*
1. Install dependencies:
   npm install express cors mongoose nodemailer dotenv

2. Update CORS if needed:
   app.use(cors({
     origin: 'http://localhost:5173', // your frontend URL
     credentials: true
   }));

3. For production, add authentication/validation:
   - Input validation
   - Rate limiting
   - Authentication
   - Authorization

4. Add logging for debugging:
   - Morgan for request logging
   - Winston for file logging

5. Database considerations:
   - Add indexes for frequent queries
   - Implement pagination for large result sets
   - Add timezone handling for dates

6. Optional enhancements:
   - Availability checking
   - Email notifications
   - SMS reminders
   - Payment integration
*/
