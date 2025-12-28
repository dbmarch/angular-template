import * as express from 'express';
import {pingRoutes} from './pingRoutes.ts';
import {authRoutes} from './authRoutes.ts';

const router = express.Router({mergeParams: true});

router.get('/', (req, res, next) => {
	res.status(200).send({ message: 'api' })
})

router.use('/ping', pingRoutes);
router.use('/auth', authRoutes);
// Add additional Routes here

export { router};
