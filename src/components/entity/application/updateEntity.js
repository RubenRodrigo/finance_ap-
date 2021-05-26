/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoEntityRepository')} obj.EntityRepository
 */
export default ({ EntityRepository }) => {
  return async ({ id }, { name, type, nro }) => {
    const Entity = {
      name: name,
      type: type,
      nro: nro
    }
    return EntityRepository.update(id, Entity)
  }
}