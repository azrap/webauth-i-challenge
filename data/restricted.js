const bcrypt = require('bcryptjs');

const Users = require('./user-model');

// middleware
module.exports = function restricted(req, res, next) {
  const { username, password } = req.headers;

  if (req.session && req.session.user) {
    // Users.findBy({ username })
    //   .first()
    //   .then(user => {
    //     if (user && bcrypt.compareSync(password, user.password)) {
    //       next();
    //     } else {
    //       res.status(401).json({ message: 'Invalid Credentials' });
    //     }
    //   })
    //   .catch(error => {
    //     res.status(500).json(error);
    //   });
    next();
  } else {
    res.status(400).json({ message: 'Please provide valid credentials' });
  }
};
