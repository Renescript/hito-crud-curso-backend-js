import express from  'express'
import userRoute from './routes/user.route'
import authRoute from './routes/auth.route'
import profileRoute from './routes/profile.route'
import { pool } from './config/database'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port = 3000

app.use('/api/v1/users', userRoute);

app.use('/api/v1/auth', authRoute)

app.use('/api/v1/profile', profileRoute)

const main = async () =>{
  try {
    const {rows} =  await pool.query("SELECT NOW()")
    console.log(rows[0].now, 'Conectado a la BD por docker')
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (error) {
    
  }
}

main()


