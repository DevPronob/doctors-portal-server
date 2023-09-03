const router = require("express").Router();

const stripe = require("stripe")('sk_test_51HVdTWBLa4QtAMbznzEswTignv3iL3yWJnOkMj93jdiTl4e9zU2JQscuIEp9WgWM4CigxRHTbvVD894kZxxCnPiI008fkwqrcF');


router.post("/", async(req, res) => {
    const booking = req.body;
    const price = parseInt(booking[0].price);
    const amount = price * 100;

const paymentIntent = await stripe.paymentIntents.create({
    currency: 'usd',
    amount: amount,
    "payment_method_types": [
        "card"
    ]
});
res.send({
    clientSecret: paymentIntent.client_secret,
});
  });

module.exports = router;