import log from '../log/index.mjs'
import MySql from './mysql.mjs'

const sql = new MySql()
class SqlFn extends MySql {
    table = ''
    constructor() {
        super()
    }
    list() {
        const sql = `select * from ${this.table}`
       return this.query(sql)
    }
}

export default SqlFn

