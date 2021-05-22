const express = require('express');
const router = express.Router();//initialize express into var called router 
// @route   GET (THE END POINT IS) api/connexion
// @desc    get logged in user 
// @access  Private
router.get('/', (req, res) => {    //get request is when you get data from the server post request is when your submiting somthing to the server your filling a form or somthing like that a put rezquest is to update somthing already on the server and delete to ddelete something from the server
    res.send('get logged in user');
});

// @route   POST (THE END POINT IS) api/auth
// @desc    Auth user and get token
// @access  Public
router.post('/', (req, res) => {    //get request is when you get data from the server post request is when your submiting somthing to the server your filling a form or somthing like that a put rezquest is to update somthing already on the server and delete to ddelete something from the server
    res.send('log in user');
});

module.exports = router;