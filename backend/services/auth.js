const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs');

export function login(req, res) {
   const {
    username,
    password
  } = req.body;

  const user = users.find(user => user.username === username);

  if (!user) {
    return res.status(404).json({
      message: 'User not found'
    });
  }

  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({
      message: 'Invalid credentials'
    });
  }

  const token = jwt.sign({
    username: user.username,
    role: user.role
  },
  process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.status(200).json({
    token
  });

}


module.exports = auth