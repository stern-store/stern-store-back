import pkg from "pg";

const { Pool }= pkg;

const connection = new Pool ({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "1234",
    database: "sternstore"
});

export { connection };