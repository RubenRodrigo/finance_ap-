/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoAccountRepository')} obj.AccountRepository
 */
export default ({ AccountRepository }) => {
  return async ({ id }, { pay_credit }, { id_entity, currency, credit }) => {
    const Account = {
      id_entity: id_entity,
      currency: currency,
      credit: parseInt(pay_credit) + parseInt(credit)
    }
    return AccountRepository.update(id, Account)
  }
}