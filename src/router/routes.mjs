import HomeController from "../controller/home.mjs"
import Login from '../controller/login.mjs'

const routes = [
    {
        path: '/',
        method: 'get',
        controller: HomeController.get
    },
    {
        path: '/api/frent/register',
        method: 'post',
        controller: Login.register
    },
    {
        path: '/api/frent/login',
        method: 'post',
        controller: Login.login
    }
]

export default routes