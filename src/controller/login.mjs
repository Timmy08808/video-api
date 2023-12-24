import user from '../service/user.mjs'

class Login {
    static async login(ctx) {
        const { name, password } = ctx.bbody
        if (!name) {
            ctx.return({ msg: '请输入用户名' })
        } else if (!password) {
            ctx.return({ msg: '请输入密码' })
        } else {
            const { res: _res } = await user.get({ name })
            if (_res) {
                const { password: pass } = _res
                if (pass !== ctx.md5(password)) {
                    ctx.return({ msg: '密码错误' })
                } else {
                    const { id, name } = _res
                    const sign = ctx.jwt.sign({ name, id })
                    ctx.return({ code: 200, data: {
                        token: sign,
                        name,
                        id
                    } })
                }
            } else {
                ctx.return({ msg: '用户不存在' })
            }
        }
    }
    static async register(ctx) {
        const { name, password } = ctx.bbody
        if (!name) {
            ctx.return({ msg: '请输入用户名' })
        } else if (!password) {
            ctx.return({ msg: '请输入密码' })
        } else {
            const { res: _res } = await user.get({ name })
            if (_res) {
                ctx.return({ msg: '用户名已存在' })
            } else {
                const { res } = await user.insert({ name, password: ctx.md5(password) })
                if (res) {
                    const id = res.insertId
                    const sign = ctx.jwt.sign({ name, id })
                    ctx.return({ code: 200, data: {
                        token: sign,
                        name,
                        id
                    } })
                }
            }
        }
    }
}

export default Login