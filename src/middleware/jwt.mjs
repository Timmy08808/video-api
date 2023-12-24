import jwt from 'jsonwebtoken'

const jwtS = 'timmy08808'

export default () => {
    return async (ctx, next) => {
        ctx.jwt = {
            sign(
                msg = {}, // 信息
                expiresIn = 60 * 60 * 12 // 过期时间
            ) {
                return jwt.sign(msg, jwtS, { expiresIn })
            },
            verify(text) {
                return new Promise((resolve, reject) => {
                    jwt.verify(text, jwtS, (err, res) => {
                        err ? reject(err) : resolve(res)
                    })
                }).then(res => ({ res }), err => ({ err }))
            }
        }
        await next()
    }
}