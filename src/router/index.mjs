import Router from "@koa/router"

import routes from './routes.mjs'

const router = new Router()

routes.forEach(({ path, controller, method }) => {
    router[method](path, controller)
})

export default router