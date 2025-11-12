import 'dotenv/config'
import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL
const sql = postgres(connectionString, {
  ssl: 'require',
  prepare: true,
  max_lifetime: 30_000,
})

export default sql
