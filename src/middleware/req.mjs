import log from '../log/index.mjs'

export default () => {
    return async (ctx, next) => {
        const startTime = +new Date()
        await next()
        const endTime = +new Date()
        const tt = endTime - startTime
        const { method, url, query } = ctx
        const info = `${url} ${method} ${JSON.stringify(query)} ${tt}ms`
        log.log(info)
        log.info(info)  
    }
}