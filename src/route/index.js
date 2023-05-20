const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {})

})

router.get('/intermarium-concept', function (req, res) {
  res.render('concept', {})

})

router.get('/about', function (req, res) {
  res.render('director', {})

})

router.get('/index', function (req, res) {
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

router.get('/institute', function (req, res) {
  res.render('institute', {})

})

router.get('/depanalit', function (req, res) {
  res.render('depanalit', {})

})


router.get('/contacts', function (req, res) {
  res.render('contacts', {})

})

router.get('/chaplygin', function (req, res) {
  res.render('chaplygin', {})

})

router.get('/yurchenko', function (req, res) {
  res.render('yurchenko', {})

})

router.get('/department', function (req, res) {
  res.render('department', {})

})

router.get('/andepyur', function (req, res) {
  res.render('andepyur', {})

})


router.get('/newsduda', function (req, res) {
  res.render('newsduda', {})

})

router.get('/tidings', function (req, res) {
  res.render('tidings', {})

})

module.exports = router
