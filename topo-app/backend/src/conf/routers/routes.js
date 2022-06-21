const express = require('express')

module.exports = function(server){
    const router = express.Router()
    server.use('/api', router)

    const topoService = require('../../api/topo/topoServer')
    topoService.register(router, '/todos')
}