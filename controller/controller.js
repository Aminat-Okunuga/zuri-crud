const express = require ('express')
const router = express.Router()

// access all routes from view.js
const {
    getAllData, createASingleData, updateASingleData, deleteAData
} = require("../view/view")

// using the router package
router.route("/").get(getAllData).post(createASingleData)
router.route("/:id").patch(updateASingleData).delete(deleteAData)

module.exports = router