import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()


app.get('/favicon.ico', serveStatic({ path: './favicon.ico' }))
app.get('/', serveStatic({ path: './html/index.html' }))


export default app
