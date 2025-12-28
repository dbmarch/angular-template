const express = require('express');
const router = express.Router({mergeParams: true});

router.get('/', (req, res, next) => {
	res.status(200).send({ message: 'api' })
})

router.use('/ping', require('./pingRoutes'));
router.use('/auth', require('./authRoutes'));
// Add additional Routes here

module.exports = router
