import express from "express";
import morgan from "morgan";
import colors from "colors";

import transactions from "./routes/transactions.js";

const app = express();

app.use("/api/transactions", transactions);

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan.bold
  )
);
