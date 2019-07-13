let exp = require("express");
let bd = require("body-parser");
let multer = require("multer");
let fs = require("fs");
var nodemailer = require("nodemailer");
let Business = require("./models/business");
let User = require("./models/user");
require("./db/config");
let app = exp();

app.use(bd.urlencoded());
app.use(bd.json());

let maxDistance = 6;

app.post("/email", (req, res) => {
  // console.log(req.body);
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mujahid122418@gmail.com",
      pass: "Mujahidiqbal2"
    }
  });
  var mailOptions = {
    ...req.body
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});
app.get("/allUser", (req, res) => {
  User.find(function(err, users) {
    res.json(users);
  });
});
app.get("/allBusiness", (req, res) => {
  Business.find(function(err, business) {
    res.send(business);
  });
});
// app.post('uploadAd', (req, res) => {

// });

function getDistance(lat1, lon1, lat2, lon2) {
  var R = 6371; // km (change this constant to get miles)
  var dLat = ((lat2 - lat1) * Math.PI) / 180;
  var dLon = ((lon2 - lon1) * Math.PI) / 180;
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
  // if (d > 1) return Math.round(d) + "km";
  // else if (d <= 1) return Math.round(d * 1000) + "m";
  return d;
}

// Business.find({
//     location: {
//      $near: {
//       $maxDistance: 9000,
//       $geometry: {
//        type: "Point",
//     //    31.4189064442580
//        coordinates: [parseFloat(31.4189061419380),  73.0717697806911]
//       }
//      }
//     }
//    },(error, results) => {
//     if (error) console.log(error);
//     console.log(results);
//    });

app.get("/getnearestlocations", (req, res) => {
  //fsd
  let cLongtitude = 31.418906141938;
  let cLatitude = 73.0717697806911;

  //gojra
  // let cLongtitude = 31.137899;
  // let cLatitude = 72.662622;

  Business.find({}, function(err, businesses) {
    let distance = 0;
    let nearByLocations = businesses.filter(business => {
      distance = parseFloat(
        getDistance(
          cLongtitude,
          cLatitude,
          business.location.coordinates[0],
          business.location.coordinates[1]
        )
      );
      return distance < maxDistance;
    });
    nearByLocations.distance = distance.toPrecision(4);
    nearByLocations = nearByLocations.map(business => {
      let obj = JSON.parse(JSON.stringify(business));
      obj.distance = getDistance(
        cLongtitude,
        cLatitude,
        business.location.coordinates[0],
        business.location.coordinates[1]
      );
      console.log(distance);
      return obj;
    });
    console.log(nearByLocations);
    res.json(nearByLocations);
  });
});

app.post("/login", (req, res) => {
    User.findOne(
        {
            username: req.body.username,
            password: req.body.password
        },
        function(err, user) {
            res.json(user);
        }
        );
    });
    
    // const upload = multer({ storage: Storage });
    // upload.array("photo", 3)
app.post("/signup", (req, res) => {
  if (req.body.type == "Business") {
    let newBusiness = new Business(req.body);
    newBusiness.save(function(err, business) {
      res.json(err || business);
    });
  } else {
    let newUser = new User(req.body);
    newUser.save();
  }
});
// let storage = multer.diskStorage({
//     destination: function (req, file, next) {
//         next(null, './uploads')
//     },
//     filename: function (req, file, next) {
//         next(null, file.originalname)
//     }
// });

// var config = multer({ storage: storage });
// app.get('/files', function (req, res) {
//     fs.readdir('./uploads', function (err, files) {
//         let images = files.map(function (filename) {
//             return '<img src=' + filename + '/>';
//         })
//         let mergtags = images.join('');
//         res.json(mergtags);
//         res.end("<script>window.onload = function(){ document.body.innerHTML = '" + mergedTags + "'; }</script>");
//     });
// });
app.use(exp.static('./static'));
const PORT = process.env.PORT || 7080;
app.listen(PORT, () => {
  console.log("server started at localhost:7080");
});
