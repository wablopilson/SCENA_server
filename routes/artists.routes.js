const express = require("express")
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Artist = require('./../models/Artist.model')


const saltRounds = 10

router.get('/', (req, res) => {

    Artist
        .find()
        .populate('label')
        .then((artists) => {

            res.status(200).json(artists)

        })
        .catch((err) => res.status(500).json(err))
})

router.get('/:artistId', (req, res) => {

    const { artistId } = req.params

    Artist
        .findById(artistId)
        .populate('label')
        .then((artist) => {
            res.status(200).json(artist)
        })
        .catch((err) => res.status(500).json(err))
})

router.get('/search/:artistName', (req, res) => {

    const { artistName } = req.params

    Artist
        .find(artistName)
        .populate('label')
        .then((artist) => {
            res.status(200).json(artist)
        })
        .catch((err) => res.status(500).json(err))
})

router.get('/search/style/:style', (req, res) => {

    const { style } = req.params

    Artist
        .find(style)
        .populate('label')
        .then((artist) => {
            res.status(200).json(artist)
        })
        .catch((err) => res.status(500).json(err))
})

router.post('/delete/:id', (req, res) => {

    const { id } = req.params

    Artist
        .findByIdAndDelete(id)
        .then(() => {

            res.status(200).json('Artista borrado correctamente')

        })
        .catch((err) => res.status(500).json())

})

module.exports = router;
