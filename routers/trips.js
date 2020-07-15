const { Router } = require("express");
const User = require("../models").user
const Trip = require("../models").trip
//const authMiddleware = require("../auth/middleware");

const router = new Router();

router.post("/", async (req, res, next) => {
    try {
        const { userId, destinationCountry, startDate, endDate, budget } = req.body;
        //console.log("REQ", req.body)

        if (destinationCountry, startDate, endDate, budget) {
            const trip = await Trip.create(destinationCountry, startDate, endDate, budget, userId)
            return res.status(200).send(trip)
        } else {
            return res.
                status(400).
                send(`Missing parameters`)
        }
    } catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Something went wrong, sorry" });
    }
});

module.exports = router;