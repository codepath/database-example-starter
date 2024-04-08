const express = require('express')
const app = express()
const PORT = 3000

const userRoutes = require('./routes/userRoutes')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to the server!')
})

app.use('/users', userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
