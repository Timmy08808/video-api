import md5 from 'md5'
import user from '../service/user.mjs'
class HomeController {
    static async get(ctx) {
        const { res: r } = await user.list()
        const token = ctx.jwt.sign({ name: 'timmy' }, 0)
        const { res, err } = await ctx.jwt.verify(token)
        ctx.return({ data: {
            token,
            dd: res, 
            err,
            r
        } })
    }
}

export default HomeController