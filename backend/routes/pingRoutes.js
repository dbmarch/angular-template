const express = require('express');
const router = express.Router({mergeParams: true});

router.get('/', (req, res, next) => {
	res.status(200).send({ message: 'ping healthcheck' })
})

module.exports = router