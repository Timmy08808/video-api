import HomeController from "../controller/home.mjs"

const routes = [
    {
        path: '/',
        method: 'get',
        controller: HomeController.get
    },
]

export default routes