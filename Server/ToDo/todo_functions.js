import db from "../db/index.js";

const create = async ({ title, status }) => {
    const query = `
        INSERT INTO todos (title, status)
        VALUES ($1, $2)
        RETURNING *
    `;
    // execute the query and return the result in array format
    const result = await db.query(query, [title, status]); // passed the array for the placeholders in the query
    return result.rows[0];
}

const readOne = async (id) => {
    const query = `
        SELECT * FROM todos
        WHERE id = $1
    `;
    const result = await db.query(query, [+id]);
    return result.rows[0];
}

const readAll = async () => {
    const query = `
        SELECT * FROM todos
    `;
    const result = await db.query(query);
    return result.rows;
}

const updateOne = async (id, { title, status }) => {
    const query = `
        UPDATE todos
        SET title = $2, status = $3
        WHERE id = $1
        RETURNING *
    `;
    const result = await db.query(query, [+id, title, status]);
    return result.rows[0];
}

const deleteOne = async (id) => {
    const query = `
        DELETE FROM todos
        WHERE id = $1
        RETURNING *
    `;
    const result = await db.query(query, [+id]);
    return result.rows[0]
}

export default {create, readOne, readAll, updateOne, deleteOne};