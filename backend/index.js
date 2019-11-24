const mongoose = require('mongoose')
const config = require ('./config')

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(config.dbport, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('Mongodb connection Ok ...')
    })
    .catch((err) => {
        console.log(err)
    })