# 📋 How to Navigate to Your Appointments

Your CH Automobile website now has a complete authentication flow with login and appointment navigation. Here's how to use it:

---

## 🔐 Step 1: Login to Your Account

### For First-Time Users (Sign Up)
1. **Click "Login / Sign Up"** in the header (top right)
2. **Toggle to "CREATE ACCOUNT"** if you don't have an account
3. **Fill in your details:**
   - Full Name (e.g., "John Doe")
   - Email address
   - Password (minimum 6 characters)
4. **Click "Create Account"**
5. Account created! You'll be redirected to your appointments

### For Existing Users (Sign In)
1. **Click "Login / Sign Up"** in the header
2. **Sign In form is shown by default**
3. **Enter your credentials:**
   - Email address
   - Password
4. **Click "Sign In"**
5. You'll be logged in and redirected to appointments

---

## 📍 Step 2: Navigate to Your Appointments

### After You're Logged In, You'll See:
- ✅ "My Appointments" link in the header (Desktop & Mobile)
- ✅ "Logout" button next to appointments

### To View Your Appointments:

#### Desktop Users
1. Look at the top right of the header
2. Click the **"My Appointments"** button
3. You'll see all your booked appointments

#### Mobile Users
1. Click the **hamburger menu** (☰) in top right
2. Tap **"My Appointments"**
3. View all your appointments

#### Direct URL
- Type `/appointments` in the browser

---

## 🎯 What You'll See on Appointments Page

Once logged in, you can view:

✅ **Service Type** - What service you booked
✅ **Date & Time** - When your appointment is scheduled
✅ **Vehicle Details** - Your vehicle make, model, and plate number
✅ **Status** - Current appointment status (Pending, Confirmed, etc.)
✅ **Notes** - Any special notes you added
✅ **Booking Date** - When you made the appointment
✅ **Cancel Button** - To cancel if needed

---

## 🔄 Complete Navigation Flow

```
Home Page
    ↓
Click "Login / Sign Up" (in header)
    ↓
Auth Page
    ↓
Choose: Sign In OR Create Account
    ↓
Enter credentials
    ↓
Click "Sign In" or "Create Account"
    ↓
Redirected to Appointments Page
    ↓
View All Your Appointments ✅
```

---

## 🔑 Authentication Features

### Login/Signup Validation
- ✅ Email validation (must be valid email format)
- ✅ Password validation (minimum 6 characters)
- ✅ Name required for signup
- ✅ Error messages for invalid input

### Security
- ✅ Token stored securely in localStorage
- ✅ Authentication checked on page load
- ✅ Automatic logout button
- ✅ Protected routes (redirects if not logged in)

### Error Handling
- ✅ Email already registered message
- ✅ Invalid password message
- ✅ Network error messages
- ✅ Clear error feedback

---

## 📱 Header Navigation (After Login)

### Desktop View
```
Home    Services    About    Contact    [My Appointments]    [Logout]
```

### Mobile View
```
Home
Services
About
Contact
[My Appointments]
[Logout]
```

---

## 🚨 Before You Can Access Appointments

⚠️ **You MUST be logged in to:**
- View your appointments
- Book new appointments
- Cancel appointments
- Access protected pages

💡 **If you're not logged in:**
- You'll be redirected to the auth page
- You won't be able to view appointments
- Login first, then access appointments

---

## ✨ Quick Steps Summary

| Step | Action |
|------|--------|
| 1 | Visit website |
| 2 | Click "Login / Sign Up" button in header |
| 3 | Sign in or create account |
| 4 | Click "My Appointments" to view |
| 5 | See all your appointment details |
| 6 | Click "Logout" when done |

---

## 🎓 Important Notes

### First Time Users
1. Create an account with your email and password
2. You'll be automatically logged in
3. Redirected to appointments page
4. You can start booking appointments!

### Returning Users
1. Click "Login / Sign Up"
2. Sign in with existing credentials
3. You'll see all your previous appointments
4. You can book more appointments or cancel existing ones

### Password Management
- Minimum 6 characters required
- Should be unique and secure
- Cannot be recovered - choose carefully

### Email Verification
- Enter a valid email address
- You'll receive confirmations here
- Used for account recovery

---

## 🔒 What Happens When You Logout

- ✅ You'll be logged out
- ✅ Redirected to home page
- ✅ Authentication token removed
- ✅ Need to login again to view appointments
- ✅ Your data is still saved (appointments won't be deleted)

---

## 📞 Troubleshooting

### Can't Login
- Check email is correct
- Check password is correct
- Check if account exists (use Sign Up if not)

### Can't Access Appointments
- Make sure you're logged in
- Check if browser allowed localStorage
- Try refreshing page
- Clear browser cache if needed

### Forgot Password
- Contact support or create new account
- Use the same email to register again
- Your previous appointments will still be there

### Button Not Working
- Make sure you're logged in
- Try refreshing the page
- Check browser console (F12) for errors

---

## 🎉 You're All Set!

You now have:
✅ Working login/signup system
✅ Secure authentication
✅ Easy navigation to appointments
✅ Full appointment management

**Start by logging in and viewing your appointments!** 🚗

---

*Need help? Check the header - it will show you "My Appointments" once you're logged in!*
