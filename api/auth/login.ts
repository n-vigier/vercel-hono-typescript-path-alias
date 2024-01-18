import { Context } from 'hono'

export async function login (ctx: Context) {
  return ctx.body(null, 202)
}
