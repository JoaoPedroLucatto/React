const topo = require('./topo')

topo.methods(['get', 'post', 'put', 'delete '])
topo.updateOptions({new: true, runValidators: true})

module.exports = topo