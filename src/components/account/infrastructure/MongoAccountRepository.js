import MongoLib from '../../../lib/mongo'

class MongoAccountRepository {
  constructor() {
    this.collection = 'account'
    this.mongoDB = new MongoLib()
  }

  async add(account) {
    const id = await this.mongoDB.create(this.collection, account)
    return { id, ...account }
  }

  async getAll() {
    const query = null
    return this.mongoDB.getAll(this.collection, query)
  }

  async get(id) {
    const query = null
    return this.mongoDB.get(this.collection, id)
  }

  async update(id, account) {
    const id_account = await this.mongoDB.update(this.collection, id, account)
    return { id_account, ...account }
  }

  async delete(id) {
    const id_account = await this.mongoDB.delete(this.collection, id)
    return id_account
  }
}

export default MongoAccountRepository
