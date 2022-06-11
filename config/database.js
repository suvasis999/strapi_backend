module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'db_memorial'),
      user: env('DATABASE_USERNAME', 'db_user'),
      password: env('DATABASE_PASSWORD', 'pass@1234'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});