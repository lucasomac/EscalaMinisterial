import dotenv from "dotenv";
import path from "path";

dotenv.config();

module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: path.resolve(__dirname, "src", "database", String(process.env.DB_DATABASE_DEV))
        },
        migrations: {
            directory: path.resolve(__dirname, "src", "database", "migrations")
        },
        useNullAsDefault: true
    },

    staging: {
        client: "postgresql",
        connection: {
            database: "my_db",
            user: "username",
            password: "password"
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations"
        }
    },

    production: {
        client: "postgresql",
        connection: {
            database: "my_db",
            user: "username",
            password: "password"
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations"
        }
    }
};
