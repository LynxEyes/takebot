import './env.config'
import Context from './Context'
import server from './web/server'

const config = {
  env: process.env
}

const run = () => server(Context, config).run()

module.exports = { run }
