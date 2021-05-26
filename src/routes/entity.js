import express from 'express'
import { getAllEntities, newEntity, getOneEntity, updateOneEntity, deleteOneEntity } from '../components/entity/controller'

// import { newPerson, getAllPerson } from '../components/persons/controller'

const router = express.Router()

router.get('/', async (_, response, next) => {
  response.send('<h1>Hello World!</h1>')
})

router.get('/api/entity', getAllEntities)
router.post('/api/entity', newEntity)

router.get('/api/entity/:id', getOneEntity)
router.put('/api/entity/:id', updateOneEntity)
router.delete('/api/entity/:id', deleteOneEntity)

export default router
