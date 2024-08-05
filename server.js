import express from 'express';
import morgan from 'morgan';
import colors from 'colors';
import cors from 'cors';
import transactions from './routes/transactions.js';
import connectDB from './config/db.js';

const app = express();

// use CORS middleware
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

connectDB();

app.use('/api/transactions', transactions);

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan.bold
  )
);
