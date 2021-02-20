const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    removeAllUsers
} = require('../../controllers/user-controller');

router
.route('/')
.get(getAllUsers)
.post(createUser)
.delete(removeAllUsers);

router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

module.exports = router;