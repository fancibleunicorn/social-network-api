const router = require('express').Router();
const { 
    addThought,
    removeThought,
    getAllThoughts,
    removeAllThoughts,
    updateThought,
    addReaction,
    removeReaction
} = require ('../../controllers/thought-controller');

router.route('/')
.get(getAllThoughts)
.delete(removeAllThoughts);

router.route('/:userId').post(addThought);

router.route('/:userId/:thoughtId')
.put(updateThought)
.delete(removeThought);

router.route('/:thoughtId/reactions')
.post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;