require('./index')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const config = require('./config')
const post = require('./routes/post')
const signup = require('./routes/signup')
const login = require('./routes/login')


const app = express()
app.use(bodyParser.json());
app.use(cors());



app.use(login);
app.use(post);
app.use(signup);











const port = config.port
app.listen(port, () => console.log(`server running on ${port}`))