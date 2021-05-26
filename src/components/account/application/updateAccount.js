/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoAccountRepository')} obj.AccountRepository
 */
export default ({ AccountRepository }) => {
  return async ({ id }, { id_entity, currency, credit }) => {
    const newAccount = {
      id_entity: id_entity,
      currency: currency,
      credit: credit
    }
    return AccountRepository.update(id, Account)
  }
}