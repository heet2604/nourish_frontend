// require('dotenv').config({path:'C:/Users/Heet/Desktop/Nourish/project/.env'});
// const express = require('express');
// const mongoose = require('mongoose');
// const path = require('path')
// const cors = require('cors');
// const authRoutes = require('./routes/auth');

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(express.static(path.join(__dirname,"public")))
// app.use(cors({
//     origin: '*', // Or set your Flutter app URL here for stricter control
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type'],
//   }));

// // Routes
// app.use('/api/auth', authRoutes);
// app.use((req, res, next) => {
//   res.setHeader("Content-Security-Policy", "default-src 'self'; font-src 'self';");
//   next();
// });


// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log('✅ MongoDB Connected'))
//     .catch(err => console.error('❌ MongoDB Connection Error:', err));

// // Start server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

