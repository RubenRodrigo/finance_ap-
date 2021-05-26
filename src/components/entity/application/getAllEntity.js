/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoEntityRepository')} obj.EntityRepository
 */
export default ({ EntityRepository }) => {
  return async () => { // parameters
    // verify parameters
    // check exist
    //
    return EntityRepository.getAll()
    // notify?
  }
}
