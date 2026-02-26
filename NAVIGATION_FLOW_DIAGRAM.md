# 🎯 Navigation & Authentication Flow

## Complete User Journey Map

```
┌─────────────────────────────────────────────────────────┐
│                    VISIT WEBSITE                         │
│                   (Home Page)                            │
│  ┌─────────────────────────────────────────────────┐   │
│  │ See Navigation Header                           │   │
│  │ • Logo (Top Left)                              │   │
│  │ • Home | Services | About | Contact (Center)  │   │
│  │ • [Login / Sign Up] Button (Top Right)         │   │
│  │ • Menu Icon (Mobile)                           │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                          ↓
                   CLICK LOGIN BUTTON
                          ↓
┌─────────────────────────────────────────────────────────┐
│                   AUTHENTICATION PAGE                    │
│  ┌─────────────────────────────────────────────────┐   │
│  │         SIGN IN / CREATE ACCOUNT                │   │
│  │                                                 │   │
│  │  Have Account?  → SIGN IN                      │   │
│  │  └─ Email                                       │   │
│  │  └─ Password                                    │   │
│  │  └─ [Sign In] Button                            │   │
│  │                                                 │   │
│  │  New User?  → CREATE ACCOUNT                   │   │
│  │  └─ Full Name                                   │   │
│  │  └─ Email                                       │   │
│  │  └─ Password (min 6 chars)                      │   │
│  │  └─ [Create Account] Button                     │   │
│  │                                                 │   │
│  │  ⚠️ Validation:                                 │   │
│  │  • Valid email format required                  │   │
│  │  • Password minimum 6 characters                │   │
│  │  • Name required for signup                     │   │
│  │  • Clear error messages shown                   │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
        ↓                               ↓
    LOGIN/SIGNUP                    INVALID INPUT
    (Success)                       Show Error Message
        ↓                               ↓
        └───────────────────┬───────────┘
                            ↓
        ┌───────────────────────────────┐
        │  AUTHENTICATION SUCCESSFUL    │
        │  • Token stored               │
        │  • User data saved            │
        │  • Redirect to appointments   │
        └───────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                  APPOINTMENTS PAGE                       │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Header Updated:                                 │   │
│  │ • Logo (Top Left)                              │   │
│  │ • Navigation Links                             │   │
│  │ • [My Appointments] Button (NEW!)              │   │
│  │ • [Logout] Button (NEW!)                       │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  MY APPOINTMENTS                                │   │
│  │  ┌───────────────────────────────────────────┐  │   │
│  │  │  APPOINTMENT 1                            │  │   │
│  │  │  Service: Engine Service         [PENDING]   │   │
│  │  │  Date: Sunday, Feb 15, 2026                 │   │
│  │  │  Time: 10:00 AM                            │   │
│  │  │  Vehicle: Toyota Camry, ABC-1234           │   │
│  │  │  Customer: John Doe, +1-555-0123           │   │
│  │  │  Notes: Check engine light                 │   │
│  │  │  [CANCEL APPOINTMENT]                      │   │
│  │  └───────────────────────────────────────────┘  │   │
│  │                                                 │   │
│  │  ┌───────────────────────────────────────────┐  │   │
│  │  │  APPOINTMENT 2                            │  │   │
│  │  │  Service: Oil Change         [CONFIRMED]    │   │
│  │  │  Date: Tuesday, Feb 20, 2026               │   │
│  │  │  Time: 2:00 PM                             │   │
│  │  │  Vehicle: Honda Civic, XYZ-5678            │   │
│  │  │  Customer: John Doe, +1-555-0123           │   │
│  │  │  [CANCEL APPOINTMENT]                      │   │
│  │  └───────────────────────────────────────────┘  │   │
│  │                                                 │   │
│  │  [BOOK MORE APPOINTMENTS]                     │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                            ↓
                      USER ACTIONS
                            ↓
        ┌───────────────────┬───────────────────┐
        ↓                   ↓                   ↓
  [My Appointments]   [Book Appointment]    [Logout]
        ↓                   ↓                   ↓
    Refresh         Booking Form          Logged Out
    Appointments                          Redirected Home
                                          Token Removed
                                          [Login] Shows Again
```

---

## Header Navigation States

### Before Login (Not Authenticated)
```
Header:
┌──────────────────────────────────────────────────┐
│ [Logo]  Home  Services  About  Contact  [LOGIN]  │
└──────────────────────────────────────────────────┘
```

### After Login (Authenticated)
```
Header:
┌─────────────────────────────────────────────────────────────┐
│ [Logo]  Home  Services  About  Contact  [MY APPOINTMENTS]  [LOGOUT]  │
└─────────────────────────────────────────────────────────────┘
```

### Mobile - Before Login
```
[Logo]                                    [☰]
Home
Services
About
Contact
[LOGIN / SIGN UP]
```

### Mobile - After Login
```
[Logo]                                    [☰]
Home
Services
About
Contact
[MY APPOINTMENTS]
[LOGOUT]
```

---

## Authentication Status Indicators

```
✅ LOGGED IN              ❌ NOT LOGGED IN
├─ Token in localStorage  ├─ No token
├─ User data in Redux     ├─ Empty user state
├─ [My Appointments]      ├─ [Login / Sign Up]
├─ [Logout] visible       └─ Restricted pages redirect
└─ Can access protected        to auth
   pages
```

---

## Login Form - Sign In Path

```
┌─────────────────────────────────┐
│     SIGN IN TO YOUR ACCOUNT     │
├─────────────────────────────────┤
│                                 │
│ Email:                          │
│ [________________@example.com]  │
│                                 │
│ Password:                       │
│ [________________________]       │
│                                 │
│ [SIGN IN BUTTON]                │
│                                 │
│ Don't have an account?          │
│ [Create Account]                │
│                                 │
│ [← Back to Home]                │
└─────────────────────────────────┘

Validation Errors:
• "Invalid Email" - if email format wrong
• "Password Too Short" - if < 6 characters
• "Wrong Credentials" - if email/password wrong
```

---

## Login Form - Sign Up Path

```
┌──────────────────────────────────┐
│     CREATE YOUR ACCOUNT          │
├──────────────────────────────────┤
│                                  │
│ Full Name:                       │
│ [_________________________]      │
│                                  │
│ Email:                           │
│ [________________@example.com]   │
│                                  │
│ Password:                        │
│ [________________________]        │
│                                  │
│ [CREATE ACCOUNT BUTTON]          │
│                                  │
│ Already have an account?         │
│ [Sign In]                        │
│                                  │
│ [← Back to Home]                 │
└──────────────────────────────────┘

Validation Errors:
• "Invalid Email" - if email format wrong
• "Password Too Short" - if < 6 characters
• "Name Required" - if name empty
• "Email Already Registered" - if exists
```

---

## Appointment Card Details

```
┌────────────────────────────────────────────┐
│ SERVICE TYPE TITLE         [STATUS BADGE]  │
├────────────────────────────────────────────┤
│ 📅 Date: Sun, Feb 15, 2026                │
│ ⏰ Time: 10:00 AM                         │
├────────────────────────────────────────────┤
│ VEHICLE             │ CUSTOMER            │
│ Toyota Camry 2020   │ John Doe            │
│ ABC-1234            │ +1-555-0123         │
├────────────────────────────────────────────┤
│ NOTES                                      │
│ Check engine light is on                   │
├────────────────────────────────────────────┤
│ Booked on: Sun, Jan 19, 2026              │
│                  [CANCEL APPOINTMENT]     │
└────────────────────────────────────────────┘
```

---

## Status Badge Colors

```
🟡 PENDING
   └─ Yellow background
   └─ Awaiting confirmation

🟢 CONFIRMED
   └─ Green background
   └─ Appointment confirmed

🔵 COMPLETED
   └─ Blue background
   └─ Service completed

🔴 CANCELLED
   └─ Red background
   └─ Appointment cancelled
```

---

## Error Handling Flow

```
User Action
    ↓
Validation Check
    ↓
Invalid? → Show Toast Error ← Yes ↺ (User can correct)
    ↓ No
Send to Backend
    ↓
Backend Response
    ├─ Success ✅
    │   ├─ Show Success Toast
    │   ├─ Save Data
    │   └─ Redirect/Update UI
    │
    └─ Error ❌
        ├─ Show Error Toast
        ├─ Display Error Message
        └─ Allow User to Retry
```

---

## Complete User Journey Example

### New User Journey (Day 1)
```
1. Visit CHAutomobile.com
   ↓
2. Click [LOGIN / SIGN UP]
   ↓
3. Click [CREATE ACCOUNT]
   ↓
4. Fill Form:
   - Name: John Doe
   - Email: john@example.com
   - Password: secure123
   ↓
5. Click [CREATE ACCOUNT]
   ↓
6. ✅ Account Created!
   ↓
7. Redirected to Appointments Page
   ↓
8. See "No Appointments Yet"
   ↓
9. Click "Book Your First Appointment"
   ↓
10. Fill Booking Form & Submit
    ↓
11. ✅ Appointment Created!
    ↓
12. Back to Appointments
    ↓
13. See New Appointment Details
```

### Returning User Journey (Day 2)
```
1. Visit CHAutomobile.com
   ↓
2. Click [LOGIN / SIGN UP]
   ↓
3. Fill Sign In Form:
   - Email: john@example.com
   - Password: secure123
   ↓
4. Click [SIGN IN]
   ↓
5. ✅ Logged In!
   ↓
6. Redirected to Appointments Page
   ↓
7. See All Previous Appointments
   ↓
8. Review Details, Cancel if needed,
   or Book More
   ↓
9. Click [LOGOUT] when done
   ↓
10. ✅ Logged Out!
    ↓
11. Back to Home Page
```

---

**This flow ensures users must login before accessing their appointments!** 🔐
