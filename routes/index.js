var express = require('express');
const { response } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'main'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About Me page. */
router.get('/about-me', function(req, res, next) {
  res.render('about', { title: 'About Me'});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

 //POST Contact page. 
router.post('/contact', function(req, res) {
  console.log('Submitted');
  //res.render('about', { title: 'About'});
  res.render('/about-me', { title: 'Contact'});
  //res.redirect('/about-me')
});

module.exports = router;
