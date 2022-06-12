module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            /*host: env('DATABASE_HOST', '127.0.0.1'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'db_memorial'),
            user: env('DATABASE_USERNAME', 'db_user'),
            password: env('DATABASE_PASSWORD', 'pass@1234'),
            ssl: env.bool('DATABASE_SSL', false),*/
            host: env('DATABASE_HOST', 'ec2-54-158-247-210.compute-1.amazonaws.com'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'd32u9i62edoe5c'),
            user: env('DATABASE_USERNAME', 'vxmnvhbpqgodfm'),
            password: env('DATABASE_PASSWORD', 'f35a8141a1cda52cdff6ef68758962f968ac0d491bbe9e1d15402c0adf42f241'),
            ssl: env.bool('DATABASE_SSL', false),

        },
    },
});
