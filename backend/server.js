//step1
const express = require("express");
const cors = require("cors"); //lal security
const dotenv = require("dotenv"); //kermel ma ybayen 3nd 7ada 8ayre
const userRoutes = require("./routes/userRoutes");
const quizRoutes = require("./routes/quizRoutes");
dotenv.config(); //to be able to use it
const app = express();
app.use(cors()); //middle wear lezem emshe fiyon wara ba3d
app.use(express.json()); //new version of body parser
app.use("/api/users", userRoutes); //routes
//app.use("/api/quiz", quizRoutes); //routes

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
