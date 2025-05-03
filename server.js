require("dotenv").config();

const app = require("./app");

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
