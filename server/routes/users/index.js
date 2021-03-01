import express from 'express'
import { newUser, updateUser, findOne, findOneByMobile } from '../../controller/users/index.js'
const userRouter = express.Router()



userRouter.post('/user/create',  newUser)
userRouter.get('/user/find/:id',  findOne)
userRouter.get('/user/mobile/:mob',  findOneByMobile)
userRouter.put('/user/update',  updateUser)

export default userRouter