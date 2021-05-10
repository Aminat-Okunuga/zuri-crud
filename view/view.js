const express =  require ('express')
const router = express.Router()
const model = require('../model/model')

// view all data
exports.getAllData = async(req, res) =>{
    const data = await model.find()
    res.status(200).json({
        developer: "AminatCanCode",
        report: true,
        data: data
    })
}

// create data
exports.createASingleData = async(req, res) => {
    const data = await model.create(req.body)
    res.status(201).json(data)
}

// update data
exports.updateASingleData = async(req, res) => {
    const data = await model.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
        report: "Item Updated Successfully!",
        data: data
    })
}

// delete data
exports.deleteAData = async(req, res) =>{
    const data = await model.findByIdAndDelete(req.params.id)
    res.status(200).json({
        report: "Item Deleted Successfully!"
    })
}