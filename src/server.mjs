import Koa from 'koa'
import koaStatic from 'koa-static'
import router from './router/index.mjs'
import req from './middleware/req.mjs'

import { _dirname, _resolve } from './utils/index.mjs'

export const createServer = (port = 6900) => {
    const app = new Koa()

    app
    .use(req())
    .use((koaStatic(_resolve(_dirname(), './public'))))
    .use(router.routes())

    app.listen(port, () => console.log(`server on http://localhost:${port}`))
}