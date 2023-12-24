export default () => {
    return async (ctx, next) => {
        ctx.return = ({ data = {}, msg = 'success', code = 200 }) => {
            ctx.body = {
                code,
                data,
                msg
            }
        }
        await next()
    }
}