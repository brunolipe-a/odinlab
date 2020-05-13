module.exports = {
  type: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  dropSchema: false,
  // logging: true,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: ['src/app/models/**/*.ts', 'dist/app/models/**/*.js'],
  migrations: [
    'src/database/migrations/**/*.ts',
    'dist/database/migrations/**/*.js',
  ],
  subscribers: [
    'src/database/subscriber/**/*.ts',
    'dist/database/subscriber/**/*.js',
  ],
  cli: {
    entitiesDir: 'src/app/models',
    migrationsDir: 'src/database/migrations',
    subscribersDir: 'src/database/subscriber',
  },
};
