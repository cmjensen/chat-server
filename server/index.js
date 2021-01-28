const express = require('express')

const app = express()

app.use(express.json())

port = 3001

app.listen(port, () => `Server is running on port ${port}`)

