const express = require("express");
const cors = require("cors");
const NewError = require("./models/new-error");
const helmet = require("helmet");
const compression = require("compression");
const bookRoutes = require("./routes/book");

const app = express();

app.use(cors());

app.use(helmet());

app.use(compression());

app.use(express.json());

app.use("/book", bookRoutes);

app.use((req, res, next) => {
  return next(new NewError("Could not find this route.", 404));
});

app.use(async (error, req, res, next) => {
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(5000);
