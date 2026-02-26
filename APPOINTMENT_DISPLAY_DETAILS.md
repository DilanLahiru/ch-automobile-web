# 📋 Appointment Details Display - Data Structure

## What Gets Displayed on the Appointments Page

Here's exactly what information is shown for each appointment:

---

## 📌 Appointment Card Layout

```
┌─────────────────────────────────────────────────────┐
│ SERVICE TYPE                        [STATUS BADGE]  │
├─────────────────────────────────────────────────────┤
│ 📅 Date: [Formatted Date]  ⏰ Time: [Time Slot]    │
├─────────────────────────────────────────────────────┤
│ VEHICLE                  │ CUSTOMER                 │
│ Model: [Vehicle Model]   │ Name: [Customer Name]    │
│ Plate: [Vehicle Number]  │ Phone: [Contact Number]  │
├─────────────────────────────────────────────────────┤
│ NOTES                                               │
│ [Customer's additional notes about the service]     │
├─────────────────────────────────────────────────────┤
│ Booked on [Booking Date]                            │
│                    [CANCEL APPOINTMENT BUTTON]      │
└─────────────────────────────────────────────────────┘
```

---

## 🔍 Data Field Mapping

The page displays data from your appointment object:

### Service Information
```javascript
{
  serviceType:           // What service is needed
  service:               // Alternative field name (fallback)
  status:                // Current status (pending, confirmed, etc.)
}
```

### Date & Time
```javascript
{
  appointmentDate:       // Date scheduled for service
  appointment_date:      // Alternative field name (fallback)
  appointmentTime:       // Time slot selected
  appointment_time:      // Alternative field name (fallback)
}
```

### Vehicle Details
```javascript
{
  vehicleModel:          // Make and model of vehicle
  vehicle_model:         // Alternative field name (fallback)
  vehicleNumber:         // License plate or registration
  vehicle_number:        // Alternative field name (fallback)
}
```

### Customer Information
```javascript
{
  customerName:          // Full name of customer
  customer_name:         // Alternative field name (fallback)
  customerContactNumber: // Phone number
  customer_contact_number: // Alternative field name (fallback)
}
```

### Additional Info
```javascript
{
  note:                  // Customer's special notes
  notes:                 // Alternative field name (fallback)
  createdAt:             // When appointment was booked
  created_at:            // Alternative field name (fallback)
  _id:                   // Unique appointment ID
}
```

---

## 📊 Example Appointment Display

### Input Data (from API)
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "customerId": "CUST-001",
  "customerName": "John Doe",
  "customerContactNumber": "+1-555-0123",
  "appointmentDate": "2026-02-15",
  "appointmentTime": "10:00 AM",
  "vehicleNumber": "ABC-1234",
  "vehicleModel": "Toyota Camry 2020",
  "serviceType": "Engine Service",
  "status": "pending",
  "note": "Check engine light is on",
  "createdAt": "2026-01-19T10:30:00Z"
}
```

### How It's Displayed on Page

```
Engine Service                              [PENDING]
📅 Date: Sunday, February 15, 2026          ⏰ Time: 10:00 AM

VEHICLE                          CUSTOMER
Toyota Camry 2020                John Doe
ABC-1234                         +1-555-0123

NOTES
Check engine light is on

Booked on Sunday, January 19, 2026
                    [CANCEL APPOINTMENT]
```

---

## 🎨 Status Badge Colors

The status is displayed with different colors:

```
Pending    → Yellow background (awaiting confirmation)
Confirmed  → Green background (approved)
Completed  → Blue background (done)
Cancelled  → Red background (cancelled)
```

---

## 📱 Responsive Display

### Desktop (lg screens)
- Service and vehicle info on left
- Cancel button on right
- Grid layout for vehicle & customer info

### Tablet (md screens)
- Everything stacked but organized in columns
- Two-column layout for vehicle/customer

### Mobile (sm screens)
- Full-width card display
- Stacked vertically
- Cancel button below all info

---

## ✨ Special Features

### Formatting
- 📅 Dates formatted as "Monday, January 19, 2026"
- ⏰ Times shown as submitted (e.g., "10:00 AM")
- 🎯 All field names humanized for readability

### Fallbacks
- If field doesn't exist, shows "Not specified" or "-"
- Supports multiple field name formats (camelCase and snake_case)
- Gracefully handles missing data

### Icons
- 📅 Calendar icon next to date
- ⏰ Clock icon next to time
- 🏷️ Status badge with color coding
- 🗑️ Delete/Cancel button with icon

---

## 🔄 Update Frequency

Appointments are loaded:
- ✅ On page load
- ✅ When user changes
- ✅ After cancellation (automatic refresh)
- ✅ Can be manually refreshed

---

## 🚀 Best Practices

When viewing appointments:
1. **Check Status** - See if appointment is confirmed
2. **Verify Details** - Ensure all info is correct
3. **Note Time** - Don't miss your appointment
4. **Cancel Early** - If you need to reschedule, cancel early
5. **Contact Shop** - For any changes, contact shop directly

---

## 📞 Contact Information

Each appointment shows:
- Your contact number (so they can reach you)
- Date and time (so you know when to arrive)
- Vehicle details (so they know which car)
- Your notes (so they understand what needs attention)

---

**All your appointment details at a glance! 🎯**
