# MERN Luxury Van Booking Website in Istanbul

This is a full-stack web application built with the MERN stack that allows users to book luxury vans in Istanbul, Turkey. Users can browse through available vans, select their preferred van, and fill out a form to book it. The website also provides information about the company and how to contact them, take a look at it: https://gotraveles.com/.

# Features

- Browse through available luxury vans in Istanbul
- View information about each van, including features and images
- Fill out a form to book a van with specific pickup and dropoff locations, dates, and times
- Receive an email confirmation of your booking
- Learn more about the company through the "About Us" page
- Contact the company through the contact form

# Technologies Used

# Backend

- Node.js and Express.js for the server and API
- Compression, CORS, and Helmet middleware for security and performance
- Nodemailer for sending email confirmations
- Nodemon for automatic server restarts during development

# Frontend

- React.js for building the user interface
- Bootstrap and Reactstrap for responsive design and styling
- Framer Motion for animations
- React Icons for iconography
- Formik and Yup for form validation
- Axios for handling API requests
- React Google Maps API for displaying maps and locations
- Country Flags SVG for displaying country flags
- React Toastify for displaying notifications
- Web Vitals for measuring web performance

# Installation and Usage

To install and use this project, follow these steps:

1. Clone the repository to your local machine using git clone https://github.com/<username>/<repository>
2. Navigate to the project directory using cd <repository>
3. Install dependencies for the backend using npm install
4. Install dependencies for the frontend using cd client && npm install
5. Create a .env file in the root directory and fill in the necessary environment variables (e.g., PORT, MONGODB_URI, EMAIL_USER, EMAIL_PASS, EMAIL_RECEIVER, 6. REACT_APP_GOOGLE_MAPS_API_KEY). Note that you'll need to obtain a Google Maps API key and add it to the .env file in order to use the Google Maps functionality.
7. Run the development server using npm run dev
8. Open your browser and navigate to http://localhost:3000
