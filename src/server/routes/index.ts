import { Router } from 'express';

const router = Router();



router.get('/test', (_, res) => { return res.status(201).json({ id: 1 }) })



export { router };