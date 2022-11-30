const express = require('express')
const { dbModel } = require('./db')
const router = express.Router()

router.get('/all', async (req, res) => {
    const getAll = await dbModel.find({})
    res.send(getAll)
})
router.get('/all/:id', async (req, res) => {
    const id = req.params.id
    const getId = await dbModel.findById(id)
    res.send(getId)
})

module.exports = router