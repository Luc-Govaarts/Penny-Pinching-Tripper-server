const { Router } = require("express");
const User = require("../models").user
const Trip = require("../models").trip
const axios = require("axios")
//const authMiddleware = require("../auth/middleware");

const router = new Router();


router.post("/:city", async (req, res, next) => {
    //const token = req.headers.authorization.split(" ");
    const apiKey = "gwkMmrd3q6U2AxZ-g6cZFKT50Za7qNTnRuYAFmM1LgwY-OohsbMBt1vknZQUK5Vbvdor_FC2-QpU5ml3B0WHLiiqaDWo8RESfoHs4D1o7Wq-XfknGR6OV_R7MIANX3Yx"
    try {
        const { businessType, priceCategory } = req.body;
        const city = req.params.city
        //console.log(city, priceCategory, businessType)

        if (!businessType || !priceCategory) {
            return res
                .status(400)
                .send({ message: "Please provide business and/or price category" });
        }

        const apiUrl = `https://api.yelp.com/v3/businesses/search?term=${businessType}&location=${city}&price=${priceCategory}`
        const yelpResponse = await axios.get(apiUrl, {
            headers: { Authorization: `Bearer ${apiKey}` }
        })

        console.log("YELP RESPONSE", yelpResponse.data)
        return res.status(200).send(yelpResponse.data)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;