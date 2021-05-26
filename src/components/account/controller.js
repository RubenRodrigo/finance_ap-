import MongoAccountRepository from './infrastructure/MongoAccountRepository'
import getAllAccount from './application/getAllAccount'
import createAccount from './application/createAccount'
import getAccount from './application/getAccount'
import updateAccount from './application/updateAccount'
import deleteAccount from './application/deleteAccount'
import payAccount from './application/payAccount'

const AccountRepository = new MongoAccountRepository()

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const getAllAccounts = async (_, res, next) => {
  try {
    const query = getAllAccount({ AccountRepository })
    const accounts = await query()
    res.status(200).json({
      data: accounts,
      message: 'Accounts listed'
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
export const newAccount = async (req, res, next) => {
  try {
    const query = createAccount({ AccountRepository })
    const account = await query(req.body)
    res.status(201).json({
      data: account,
      message: 'Account created'
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
export const getOneAccount = async (req, res, next) => {
  try {
    const query = getAccount({ AccountRepository })
    const account = await query(req.params)
    res.status(201).json({
      data: account,
      message: 'Account listed'
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
export const updateOneAccount = async (req, res, next) => {
  try {
    const query = updateAccount({ AccountRepository })
    const account = await query(req.params, req.body)
    res.status(201).json({
      data: account,
      message: 'Account updated'
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
export const deleteOneAccount = async (req, res, next) => {
  try {
    const query = deleteAccount({ AccountRepository })
    const account = await query(req.params)
    res.status(201).json({
      data: account,
      message: 'Account deleted'
    })
  } catch (e) {
    next(e)
  }
}


// PAY API

export const payOneAccount = async (req, res, next) => {
  try {
    var query = getAccount({ AccountRepository })
    const oldAccount = await query(req.params)
    if (oldAccount == null) res.status(200).json({ message: 'Account not found' })
    var newQuery = payAccount({ AccountRepository })
    const account = await newQuery(req.params, req.body, oldAccount)
    res.status(200).json({
      data: account,
      message: 'Credit paid',
    })
  } catch (e) {
    next(e)
  }
}