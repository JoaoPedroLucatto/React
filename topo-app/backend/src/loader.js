const server = require('./conf/server')

require('./conf/server')
require('./conf/database')
require('./conf/routers/routes')(server)
