const express = require('express');
const router = express.Router();//initialize express into var called router 
// @route   GET (THE END POINT IS) api/gestion-des-formations
// @desc    get all users courses(formation)
// @access  Private because you habe to be logged in to get a course
router.get('/', (req, res) => {    //get request is when you get data from the server post request is when your submiting somthing to the server your filling a form or somthing like that a put rezquest is to update somthing already on the server and delete to ddelete something from the server
    res.send('get all courses');
});

// @route   POST (THE END POINT IS) api/gestion-des-formations
// @desc    ADD new course(formation)
// @access  Private because you habe to be logged in to add a course
router.post('/', (req, res) => {    //get request is when you get data from the server post request is when your submiting somthing to the server your filling a form or somthing like that a put rezquest is to update somthing already on the server and delete to ddelete something from the server
    res.send('add courses');
});

// @route   PUT (THE END POINT IS) api/gestion-des-formations
// @desc    Update course(formation)
// @access  Private because you have to be logged in to update a course
router.put('/:id', (req, res) => {    //get request is when you get data from the server post request is when your submiting somthing to the server your filling a form or somthing like that a put rezquest is to update somthing already on the server and delete to ddelete something from the server
    res.send('update courses');
});

// @route   delete (THE END POINT IS) api/gestion-des-formations
// @desc    delete course(formation)
// @access  Private because you have to be logged in to update a course
router.delete('/:id', (req, res) => {    //get request is when you get data from the server post request is when your submiting somthing to the server your filling a form or somthing like that a put rezquest is to update somthing already on the server and delete to ddelete something from the server
    res.send('delete courses');
});

module.exports = router;
