const express = require('express');
const router = express.Router();//initialize express into var called router 
// @route   POST (THE END POINT IS) api/inscription
// @desc    Register a user 
// @access  public
router.post('/', (req, res) => {    //get request is when you get data from the server post request is when your submiting somthing to the server your filling a form or somthing like that a put rezquest is to update somthing already on the server and delete to ddelete something from the server
    res.send('register a user');
});

module.exports = router;
