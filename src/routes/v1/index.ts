import {Router} from 'express'
import userRouter from './user.router.js';

const v1router = Router();

v1router.use('/users' ,userRouter)
export default v1router