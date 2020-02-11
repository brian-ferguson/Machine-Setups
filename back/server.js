const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const secret = require("./config/secret");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const Data = require("./data");

const Setup = require("./setup");

const app = express();
app.use(cors());

//connect to the mongoose database
mongoose.Promise = global.Promise;
var db = mongoose.connect(secret("dbUri"), { useUnifiedTopology: true, useNewUrlParser: true }).
  then(() => console.log('Connected')).
  catch(err => console.log('Caught', err.stack));

  mongoose.connection.on("open", function(){



    console.log("mongodb is connected!!");
  });




app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(logger("dev"));

const API_PORT = 3001;
app.use("/api", router);
//get route
router.get("/getData", (req, res) => {
  Setup.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data});
  });
});

//post route: create
router.post("/putData", (req, res) => {
  console.log("putData reqBody: ", req.body);
  var data = new Setup(req.body);

  data.save()
    .then(item => {
      res.send("item saved to the database");
    });
});



app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
