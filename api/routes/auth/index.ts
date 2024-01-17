import { Hono } from 'hono'

import { login } from '@route/auth/login'

const auth = new Hono()

auth.post('/', login)

export default auth
