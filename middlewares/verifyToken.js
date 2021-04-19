const jwt = require('jsonwebtoken');

function jwtAuthMiddleWare(req, res, next) {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).send('Access Denied');
  }

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.staus(400).send('Invalid Token');
  }
}

module.exports = jwtAuthMiddleWare;
