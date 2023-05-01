const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {})

})

router.get('/direction', function (req, res) {
  res.render('direction', {})

})

router.get('/concept', function (req, res) {
  res.render('concept', {})

})

router.get('/activities', function (req, res) {
  res.render('activities', {})

})

router.get('/contacts', function (req, res) {
  res.render('contacts', {})

})

router.get('/andepchap', function (req, res) {
  res.render('andepchap', {})

})

module.exports = router
