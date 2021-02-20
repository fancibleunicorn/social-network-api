const { User } = require('../models');

const userController = {
    // get all users
    getAllUsers (req, res) {
        User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // get one user by id
    getUserById ({ params }, res) {
        User.findOne({ _id: params.id})
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No user found with this id 🙃'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // create a User
    createUser ({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },

    // update a User by id
    updateUser ({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No user found with this id 🙃'})
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },

    // Delete a user by id
    deleteUser ({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id 🙃'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },

    // Delete ALL users
    removeAllUsers(req, res) {
        User.remove({})
       .then(dbUserData => res.json(dbUserData))
       .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
    },

    // Add a friend to user's friendlist
    addFriend({ params, body }, res) {
        User.findOneAndUpdate(
            { _id: params.userId},
            { $push: { friends: params.friendId}},
            { new: true }
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id 🙃'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    }

};

module.exports = userController;