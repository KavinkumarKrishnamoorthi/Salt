import express, { Application } from 'express';
import indexRoutes from './routes/index';
import userRoutes from './routes/users';
import connectDB from './db';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/', indexRoutes);
app.use('/users', userRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});