const User = require("./models").User;

module.exports = {

    createUser(newUser, callback) {
        return User.create({
            email: newUser.email,
            password: newUser.password
        })
        .then((user) => {
            callback(null, user);
        })
        .catch((err) => {
            callback(err);
        })
    },


}