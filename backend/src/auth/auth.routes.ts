import express from 'express';
import { getUser } from './auth.controller';

const router = express.Router();

router.get('/me', getUser);

export default router;
