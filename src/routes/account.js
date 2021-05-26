import express from 'express'
import { deleteOneAccount, getAllAccounts, getOneAccount, newAccount, payOneAccount, updateOneAccount } from '../components/account/controller'

const router = express.Router()

router.get('/', async (_, response, next) => {
  response.send('<h1>Hello World!</h1>')
})

router.get('/api/account', getAllAccounts)
router.post('/api/account', newAccount)

router.get('/api/account/:id', getOneAccount)
router.put('/api/account/:id', updateOneAccount)
router.delete('/api/account/:id', deleteOneAccount)
router.put('/api/account/:id', updateOneAccount)

router.put('/api/account/pay/:id', payOneAccount);

export default router
