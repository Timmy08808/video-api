import log from '../log/index.mjs'

export default () => {
    return async (ctx, next) => {
        const startTime = +new Date()
        // 全局错误捕获
        try{
            await next()
        } catch(e) {
            ctx.return({ msg: 'Server Error', code: 500 })
            log.error('server system error ===>', e)
        }
        const endTime = +new Date()
        const tt = endTime - startTime
        const { method, url, query, request } = ctx
        const info = `${url} ${method} ${JSON.stringify(request.body)} ${JSON.stringify(query)} ${tt}ms`
        log.info(info)
    }
}