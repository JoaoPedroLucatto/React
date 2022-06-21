const restful = require('node-restful')
const mongoose = restful.mongoose

const topoShema = new mongoose.Schema({
    description: {type: String, required: true},
    done: {type: Boolean, required: true, default: true},
    createdAt:{type: Date, default: Date.now}
})

module.exports = restful.model('Topo', topoShema)