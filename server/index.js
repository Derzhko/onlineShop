require(`dotenv`).config()

const express = require('express');
const sequelize = require('./db');
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000
const app = express()
app.use(cors()) // доступ с сайта
app.use(express.json()) // парсить json строки от браузера
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({})) // загружать картинки
app.use('/api', router);

// обработка ошибок последний middleware
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()