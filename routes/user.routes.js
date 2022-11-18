const express = require('express');
const { Strategy } = require('passport-google-oauth20');
const router = express.Router();

router.get('/logged', (req, res) => {
    if (req.user) {
        res.render('logged', {
            username: req.user.displayName,
            avatar: req.user.photos[0].value
        });Strategy
    } else {
        res.redirect('/no-permission');
    }
});

router.get('/no-permission', (req, res) => {
    res.render('noPermission');
});

router.get('/profile', (req, res) => {
    if (req.user) {
        res.render('profile', {
            username: req.user.displayName,
            avatar: req.user.photos[0].value
        });

    } else {
        res.redirect('/no-permission');
    }
})

router.get('/profile/settings', (req, res) => {
    if (req.user) {
        res.render('settings');

    } else {
        res.redirect('/user/no-permission');
    }
});

router.get('/logout', (req, res) => {
    res.render('logout');
});

module.exports = router;