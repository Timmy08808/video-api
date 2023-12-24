import mysql from 'mysql'
import config from './config.mjs'
import log from '../log/index.mjs'

class MySql {
    connection = mysql.createConnection(config)
    constructor() {
        this.init()
    }
    init() {
        if (this.connection) this.end()
        this.connection.connect(err => {
            if (err) {
                log.error('db connect error ===>', err)
            }
        })
        this.connection.on('error', err => {
            if (err) {
                log.error('db onerror error ===>', err)
            }
        })
    }

    query(sql) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, (err, res) => {
                if (err) {
                    log.error('sql query error ===>', err)
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })
    }

    end() {
        this.connection.end()
    }
}

export default MySql