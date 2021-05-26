import MongoEntityRepository from './infrastructure/MongoEntityRepository'
import getAllEntity from './application/getAllEntity'
import getEntity from './application/getEntity'
import createEntity from './application/createEntity'
import updateEntity from './application/updateEntity'
import deleteEntity from './application/deleteEntity'

const EntityRepository = new MongoEntityRepository()

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const getAllEntities = async (_, res, next) => {
  try {
    const query = getAllEntity({ EntityRepository })
    const entities = await query()
    res.status(200).json({
      data: entities,
      message: 'Entities listed'
    })
  } catch (e) {
    next(e)
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const newEntity = async (req, res, next) => {
  try {
    const query = createEntity({ EntityRepository })
    const entity = await query(req.body)
    res.status(201).json({
      data: entity,
      message: 'Entity created'
    })
  } catch (e) {
    next(e)
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const getOneEntity = async (req, res, next) => {
  try {
    const query = getEntity({ EntityRepository })
    const entity = await query(req.params)
    res.status(201).json({
      data: entity,
      message: 'Entity listed'
    })
  } catch (e) {
    next(e)
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const updateOneEntity = async (req, res, next) => {
  try {
    const query = updateEntity({ EntityRepository })
    const entity = await query(req.params, req.body)
    res.status(201).json({
      data: entity,
      message: 'Entity updated'
    })
  } catch (e) {
    next(e)
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const deleteOneEntity = async (req, res, next) => {
  try {
    const query = deleteEntity({ EntityRepository })
    const entity = await query(req.params)
    res.status(201).json({
      data: entity,
      message: 'Entity deleted'
    })
  } catch (e) {
    next(e)
  }
}