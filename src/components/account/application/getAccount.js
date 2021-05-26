/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoAccountRepository')} obj.AccountRepository
 */
export default ({ AccountRepository }) => {
  return async ({ id }) => {
    return AccountRepository.get(id)
  }
}