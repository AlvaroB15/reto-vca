import express from 'express';
import optionRoutes from './routes/option.route.js';

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/option', optionRoutes);

export default app;
