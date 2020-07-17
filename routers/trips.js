const { Router } = require("express");
const User = require("../models").user
const Trip = require("../models").trip
//const authMiddleware = require("../auth/middleware");

const router = new Router();


router.get("/:userId", async (req, res, next) => {
    const userId = parseInt(req.params.userId)
    try {
        const trips = await Trip.findAll({ where: { userId } })
        return res.status(200).send(trips)
    } catch (error) {
        console.log(error)
    }
})


router.post("/", async (req, res, next) => {
    try {
        const { userId, destinationCountry, startDate, endDate, budget } = req.body;
        console.log("REQ", req.body)

        if (userId, destinationCountry, startDate, endDate, budget) {
            const trip = await Trip.create({ userId, destinationCountry, startDate, endDate, budget })
            return res.status(200).send(trip)
        } else {
            return res.
                status(401).
                send(`Missing parameters`)
        }
    } catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Something went wrong, sorry" });
    }
});

module.exports = router;