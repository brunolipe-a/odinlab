import { ConnectionOptions } from 'typeorm'
import {User} from './src/app/models/User'

module.exports =  {
  type: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  dropSchema: false,
  // logging: true,
  ssl: true,
  entities: [User],
  migrations: ['{dist, .}/src/database/migrations/**/*.{js, ts}'],
  subscribers: ['{dist, .}/src/database/subscriber/**/*.{js, ts}'],
  cli: {
    entitiesDir: "src/app/models",
    migrationsDir: "src/database/migrations",
    subscribersDir: "src/database/subscriber"
 }
} as ConnectionOptions;
