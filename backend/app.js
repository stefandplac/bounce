const express = require("express");
const countryRouter = require("./api/countryRouter");

const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/country", countryRouter);

app.listen(5035, () => {
  console.log(`server is running on http://localhost:5035`);
});
