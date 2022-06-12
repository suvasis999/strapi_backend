const fs = require("fs");
module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT || 5432,
            database: process.env.DATABASE_NAME || 'postgres',
            user: process.env.DATABASE_USERNAME || 'postgres',
            password: process.env.DATABASE_PASSWORD || '123456789',
            // ssl: env.bool('DATABASE_SSL', false),
            ssl: {
                ca: fs.readFileSync('./config/env/production/server-ca.pem').toString(),
                cert: fs.readFileSync('./config/env/production/client-cert.pem').toString(),
                key: fs.readFileSync('./config/env/production/client-key.pem').toString(),
                rejectUnauthorized: false,
            },
        },
        debug: false
    },
});