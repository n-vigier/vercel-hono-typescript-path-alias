import { Hono } from 'hono'

import auth from '@route/auth/index'

const routes = new Hono()

routes.route('/auth', auth)

export default routes
