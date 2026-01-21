# Hotel Satyendra Palace - Static Website (Backend Connected)

A modern, responsive frontend version of the Hotel Satyendra Palace booking website, now connected to a MySQL database via a Node.js backend.

## Features

- ✅ **Shared Database** - Bookings are now stored in MySQL and visible across all browsers
- ✅ **Hash-based Routing** - Client-side navigation without page reloads
- ✅ **Secure Authentication** - JWT-based login for users and admin
- ✅ **Responsive Design** - Works on mobile, tablet, and desktop
- ✅ **Admin Dashboard** - Manage bookings, update status, and add notes
- ✅ **Real-time Availability** - Interactive calendar linked to the database
- ✅ **Vibrant UI** - Beautiful design with Tailwind CSS

## How to Use

### Option 1: Open Locally
Simply open `index.html` in your web browser:
- Double-click `index.html`, or
- Right-click → Open with → Your Browser

### Option 2: Deploy to Static Hosting

Deploy the `static/` folder to any static hosting service:

#### GitHub Pages
1. Create a new repository
2. Upload all files from the `static/` folder
3. Go to Settings → Pages
4. Select branch and save
5. Your site will be live at `https://yourusername.github.io/repo-name`

#### Netlify
1. Drag and drop the `static/` folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site is instantly live!

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the `static/` folder
3. Follow the prompts

### Option 3: Local Server (Optional)
For testing with a local server:

```bash
# Using Python 3
cd static
python -m http.server 8000

# Using Node.js
cd static
npx serve

# Using PHP
cd static
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Admin Credentials

**Admin Login:**
- User ID: `narayansk`
- Password: `Narayan@2003`

> ⚠️ **Security Note**: These credentials are hardcoded in the client-side JavaScript and visible to anyone. For production use, implement proper backend authentication.

## File Structure

```
static/
├── index.html          # Main HTML file
├── styles.css          # Custom styles
├── app.js             # Application entry point
├── pages/
│   ├── home.js        # Home page
│   ├── gallery.js     # Gallery page
│   ├── booking.js     # Booking page
│   ├── login.js       # Login page
│   ├── admin.js       # Admin dashboard
│   ├── privacy.js     # Privacy policy
│   └── terms.js       # Terms of service
└── utils/
    ├── storage.js     # LocalStorage service
    ├── router.js      # Hash-based router
    └── auth.js        # Authentication service
```

## Browser Compatibility

Works in all modern browsers:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Data Storage

All data is stored in the browser's `localStorage`:
- **Bookings**: `snarayan_bookings`
- **User Session**: `sn_user`

> 📝 **Note**: Data is stored locally in the browser and will be lost if you clear browser data. For production, consider implementing a backend API.

## Features Overview

### For Users
- Browse gallery of venue photos
- Check date availability in real-time
- Book dates for events
- View booking status
- Login to see your bookings

### For Admin
- View all bookings
- Update booking status (pending/confirmed/cancelled)
- Update payment status (paid/unpaid)
- Add notes to bookings
- Search and filter bookings
- Manually add bookings

## Customization

### Change Colors
Edit the color values in `index.html` and page files:
- Primary color: `#FF002B` (red)
- Replace with your brand color

### Update Content
- **Contact Info**: Edit in `index.html` footer
- **Gallery Images**: Edit `pages/gallery.js`
- **Features**: Edit `pages/home.js`

### Admin Credentials
Change in `pages/login.js`:
```javascript
if (formData.userId === 'YOUR_USERNAME' && formData.password === 'YOUR_PASSWORD') {
  // ...
}
```

## Support

For questions or issues:
- 📞 Call: +91 9939200913
- 📍 Location: Nimdihra Road, Kargahar, Rohtas, Bihar

## License

© 2025 Hotel Satyendra Palace. All rights reserved.
