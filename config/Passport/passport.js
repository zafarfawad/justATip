//load bcrypt
var bCrypt = require('bcrypt-nodejs');

module.exports = function (passport, user) {

    var User = user;
    var LocalStrategy = require('passport-local').Strategy;


    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });


    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        User.findById(id).then(function (user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });

    });


    passport.use('local-signup', new LocalStrategy(

        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },

        function (req, username, password, done) {
            console.log(req);
            //hash password 
            var generateHash = function (password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            User.findOne({
                where: {
                    username: username
                }
            }).then(function (user) {

                if (user) {
                    return done(null, false, {
                        message: 'That username is already taken'
                    });
                } else {
                    var userPassword = generateHash(password);
                    var data = {
                        username: username,
                        password: userPassword,
                        zipCode: req.body.zipCode,
                        jobTitle: req.body.jobTitle,
                        hourlyWage: req.body.hourlyWage

                    };


                    User.create(data).then(function (newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }

                        if (newUser) {
                            return done(null, newUser);

                        }

                    });
                }

            });

        }

    ));

    //Local signin
    passport.use('local-signin', new LocalStrategy(

        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },

        function (req, username, password, done) {
            console.log(username);
            var User = user;

            var isValidPassword = function (userpass, password) {
                return bCrypt.compareSync(password, userpass);
            }

            User.findOne({
                where: {
                    username: username
                }
            }).then(function (user) {

                if (!user) {
                    return done(null, false, {
                        message: 'User does not exist'
                    });
                }

                if (!isValidPassword(user.password, password)) {

                    return done(null, false, {
                        message: 'Incorrect password.'
                    });

                }

                var userinfo = user.get();
                console.log('fawadtest11', userinfo);

                return done(null, userinfo);

            }).catch(function (err) {

                console.log("Error:", err);

                return done(null, false, {
                    message: 'Login error'
                });

            });

        }
    ));

}