const router = require('express').Router();
const verify = require('../middlewares/verifyToken');

router.get('/', verify, (req, res) => {
  res.json({
    posts: [
      {
        title: 'First post',
        content: 'lalalalala',
      },
    ],
  });
});

module.exports = router;
