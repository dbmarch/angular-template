const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).send({ message: 'api' })
})


router.use('/ping', require('./ping'));
// Add additional Routes here

module.exports = router