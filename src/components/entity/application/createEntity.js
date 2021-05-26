/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoEntityRepository')} obj.EntityRepository
 */
export default ({ EntityRepository }) => {
  return async ({ name, type, nro }) => {
    const newEntity = {
      name: name,
      type: type,
      nro: nro
    }
    return await EntityRepository.add(newEntity)
  }
}
