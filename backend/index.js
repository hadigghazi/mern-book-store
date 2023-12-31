import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  //   cors({
  //     origin: "http://localhost:3000",
  //     methods: ["GET", "POST", "PUT", "DELETE"],
  //     allowedHeaders: ["Content-Type"],
  //   })
  cors()
);

app.get("/", (req, res) => {
  res.send("hii");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
