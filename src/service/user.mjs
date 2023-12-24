import Sql from '../db/index.mjs'

class User extends Sql {
    table = 'user'
}

export default new User()