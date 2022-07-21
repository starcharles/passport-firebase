const express = require("express");
const passport = require("passport");
const FirebaseStrategy = require("passport-firebase").Strategy;

const app = express();

passport.use(
  new FirebaseStrategy(
    {
      issuer: "https://securetoken.google.com/<YOUR_PROJECT_ID>",
      audience: "<YOUR_PROJECT_ID>",
    },
    function (jwt_payload, done) {
      console.log(jwt_payload);
      done(null, true);
    }
  )
);

app.get(
  "/hello",
  passport.authenticate("firebase", { session: false }),
  (req, res) => {
    console.log(req.user);
    res.status(200).json({ message: "hello" });
  }
);

app.listen(3003, () => {
  console.log("listen");
});
