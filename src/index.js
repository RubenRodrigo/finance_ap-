import express from 'express'
import apiEntity from './routes/entity'
import apiAccount from './routes/account'
import helmet from 'helmet'
import morgan from 'morgan'

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())

app.use('/entity', apiEntity)
app.use('/account', apiAccount)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).send('Sorry cant find that!');
});


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})
