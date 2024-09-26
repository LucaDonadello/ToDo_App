import db from "../index.js";
import createTableTodos from "./createTodosTable.js";

const runDBMigrations = async () => {
    const client = await db.connect();
    try {
        await client.query(createTableTodos);
    } catch (error) {
        console.log(error);
    } finally {
        client.release();
    }
}

export default runDBMigrations;