import cluster from 'node:cluster'
import { cpus } from 'node:os'

import { createServer } from './server.mjs'

const numCpus = cpus().length

console.log('isPrimary ====', cluster.isPrimary, numCpus)
if (cluster.isPrimary) {
    for(let i = 0; i < numCpus; i++) {
        cluster.fork()
    }
} else {
    createServer(7800)
}