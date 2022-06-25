const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LDB0lSENQKmhKDI8z9ndR0n3m85cUZsw2DxCBu0b3BzVUIIkF6weHI80XJ7Rhxeei9XKBEU7OFvolP5RjO3tS3E00LXLMB8dW"
);  

const app = express();
app.use(cors({origin:true}));
app.use(express.json());

app.get('/',(request,response) => response.status(200).send("Hello World"))
app.post('/payments/create', async (request,response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency:'INR'
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app);