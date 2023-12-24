import md5 from 'md5'

export default () => {
    return async (ctx, next) => {
        ctx.return = ({ data = {}, msg = 'success', code = 201 }) => {
            ctx.body = {
                code,
                data,
                msg
            }
        }
        ctx.md5 = text => {
            const solt = md5(`timmy ${text}`)
            return md5(`timmy ${solt}`)
        }
        ctx.bbody = ctx.request.body
        await next()
    }
}