import MongoLib from '../../../lib/mongo'

class MongoEntityRepository {
  constructor() {
    this.collection = 'entity'
    this.mongoDB = new MongoLib()
  }

  async add(entity) {
    const id = await this.mongoDB.create(this.collection, entity)
    return { id, ...entity }
  }

  async getAll() {
    const query = null
    return this.mongoDB.getAll(this.collection, query)
  }

  async get(id) {
    const query = null
    return this.mongoDB.get(this.collection, id)
  }

  async update(id, entity) {
    const id_entity = await this.mongoDB.update(this.collection, id, entity)
    return { id_entity, ...entity }
  }

  async delete(id) {
    const id_entity = await this.mongoDB.delete(this.collection, id)
    return id_entity
  }
}

export default MongoEntityRepository
