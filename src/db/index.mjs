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
    async get(obj) {
        const { and } = this.joinObj(obj)
        const sql = `select * from ${this.table} where ${and.join(' and ')}`
        const { res } = await this.query(sql)
        return res?.length ? { res: res[0] } : { res: null }
    }
    insert(obj) {
        const { keys, vals } = this.joinObj(obj)
        const sql = `insert into ${this.table} (${keys.join(',')}) values (${vals.join(',')})`
        return this.query(sql)
    }
    joinObj(obj) {
        const keys = []
        const vals = []
        const and = []
        for(const [key, val] of Object.entries(obj)) {
            keys.push(key),
            vals.push(typeof val === 'string' ? `"${val}"` : val)
            and.push(`${key}=${val}`)
        }
        return {
            keys,
            vals,
            and
        }
    }
}

export default SqlFn

