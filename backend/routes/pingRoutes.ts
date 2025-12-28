import express from 'express';
const pingRoutes = express.Router({mergeParams: true});

pingRoutes.get('/', (req, res, next) => {
	res.status(200).send({ message: 'ping healthcheck' })
})

export {pingRoutes};