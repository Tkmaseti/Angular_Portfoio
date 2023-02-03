const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
admin.initializeApp();
require("dotenv").config();

const {SENDER_EMAIL, SENDER_PASSWORD} = process.env;

exports.sendEmailNotice=functions.firestore.document("submissions/{docId}")


    .onCreate((snap, ctx) => {
      const data = snap.data();


      const authData = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 645,
        secure: true,
        auth: {
          user: SENDER_EMAIL,
          pass: SENDER_PASSWORD,
        },
      });
      authData.sendMail({
        from: "maseti.tsepang@gmail.com",
        to: `${data.email}`,
        subject: "Test email",
        text: `${data.email}`,
        http: `${data.email}`,
      }).then((res) => (console.log("successful")))
          .catch((err) => (console.log(err)));
    });


