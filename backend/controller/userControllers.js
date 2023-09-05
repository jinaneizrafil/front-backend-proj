//step4
const db = require("../database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); //to keep the user logged in

exports.signup = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  //deyman bass bade balesh eba3at 3al database ba3ml try catch
  try {
    await db.execute("INSERT INTO users(username, password) VALUES(?,?)", [
      username,
      hashedPassword,
    ]);
    res.send({ success: true, message: "Registred successifly!" });
  } catch (error) {
    console.error("Registration Error:", error.message);
    res
      .status(500)
      .send({ success: false, message: "Error registering user." });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const [users] = await db.execute("select * from users where username = ?", [
      username,
    ]);
    const user = users[0];
    if (!user) return res.status(404).json({ error: "user not found" });
    const isPasswordValid = bcrypt.compare(hashedPassword, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ error: "incorrect password" });
    const token = jwt.sign({ id: user.id }, processs.env.JWT_SECRET, {
      expiresIN: 86400,
    });
    ResizeObserver.status(200).json({ auth: true, token });
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ success: false, message: "Error logged in." });
  }
};
