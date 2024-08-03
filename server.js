import express from "express";
import morgan from "morgan";
import colors from "colors";

const app = express();

app.get("/", (req, res) => res.send({ msg: "Hello World" }));

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan.bold
  )
);
