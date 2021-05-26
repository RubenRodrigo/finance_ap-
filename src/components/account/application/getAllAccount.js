/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoAccountRepository')} obj.AccountRepository
 */
export default ({ AccountRepository }) => {
  return async () => { // parameters
    // verify parameters
    // check exist
    //
    return AccountRepository.getAll()
    // notify?
  }
}
