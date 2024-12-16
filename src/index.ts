import { pool } from './config/database'
import app from './app'

const port = 3000

const main = async () => {
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


