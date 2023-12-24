import mysql from 'mysql'
import config from './config.mjs'

class MySql {
    connection = mysql.createConnection(config)

    init() {
        if (this.connection) this.end()
        this.connection.connect(err => {
            if (err) console.error('error =====', err)
        })
        this.connection.on('error', err => {

        })
    }

    query(sql) {
        return new Promise((resolve, reject) => {
            
        })
    }

    end() {
        this.connection.end()
    }
}

