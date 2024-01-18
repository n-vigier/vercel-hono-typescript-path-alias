import { Hono } from 'hono'

import { login } from '@auth/login'
import { handle } from 'hono/vercel';

export const config = {
  runtime: 'edge',
};

const auth = new Hono().basePath('/api/auth')

auth.post('/', login)

export default handle(auth)
