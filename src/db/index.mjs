import log from '../log/index.mjs'
import MySql from './mysql.mjs'

const sql = new MySql()
class SqlFn {
    table = ''
    query(sql) {
        return sql.query(sql)
    }

}

export default SqlFn

