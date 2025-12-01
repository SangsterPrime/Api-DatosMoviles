import sql from "../config/db.js";

const TABLE = 'users'; // Cambia al nombre real de tu tabla

export async function listUsers() {
  const rows = await sql`select * from users`;
  return rows;
}

export async function getUserById(id) {
  const rows = await sql`select * from users where id = ${id}`;
  const row = rows[0];
  if (!row) {
    const err = new Error('User not found');
    err.status = 404;
    throw err;
  }
  return row;
}

export async function getUserByUsername(username) {
  const rows = await sql`select * from users where username = ${username}`;
  if(!rows) {
    const err = new Error("User not found");
    err.status = 404;
    throw err;
  }
  return rows;
}

export async function createUser(payload) {
  const rows = await sql`insert into users ${sql(payload)} returning *`;
  return rows[0];
}

export async function updateUser(id, payload) {
  const rows = await sql`update users set ${sql(payload)} where id = ${id} returning *`;
  return rows[0];
}

export async function deleteUser(id) {
  await sql`delete from users where id = ${id}`;
  return { id };
}

export default { listUsers, getUserById, createUser, updateUser, deleteUser };
