const router = require('express').Router();
const { 
    addThought,
    removeThought,
    getAllThoughts,
    removeAllThoughts,
    updateThought
} = require ('../../controllers/thought-controller');

router.route('/')
.get(getAllThoughts)
.delete(removeAllThoughts);

router.route('/:userId').post(addThought);

router.route('/:userId/:thoughtId')
.put(updateThought)
.delete(removeThought);

module.exports = router;