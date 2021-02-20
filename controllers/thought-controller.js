const { User, Thought } = require('../models');

const thoughtController = {
    // get all thoughts
    getAllThoughts (req, res) {
        Thought.find({})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },


    // add a thought to the associated user
    addThought({ params, body }, res) {
        console.log(body);
        Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                { _id: params.userId},
                { $push: { thoughts: _id }},
                { new: true }
            );
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id 🙃'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },

    // update a Thought by id
    updateThought ({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.thoughtId }, body, { new: true })
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({ message: 'No thought with this id 💬'})
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    },

    // remove one thought
    removeThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
        .then(deletedThought => {
            if (!deletedThought) {
                return res.status(404).json({ message: 'No thought with this id 💬'})
            }
            return User.findOneAndUpdate(
                { _id: params.userId },
                { $pull: { thoughts: params.thoughtId }},
                { new: true }
            );
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id 🙃'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },

    // remove all thoughts
    removeAllThoughts(req, res) {
        Thought.remove({})
       .then(dbThoughtData => res.json(dbThoughtData))
       .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
    }
};

module.exports = thoughtController;