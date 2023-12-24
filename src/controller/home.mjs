import md5 from 'md5'
class HomeController {
    static async get(ctx) {
        ctx.body = 'home ====' + md5('8888')
    }
}

export default HomeController