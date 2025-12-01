import sql from "../config/db.js";

const TABLE = 'usuarios';
const PK = 'id';

export async function list() {
  const rows = await sql`select * from ${ sql(TABLE) }`;
  return rows;
}

export async function getById(id) {
  const rows = await sql`select * from ${ sql(TABLE) } where ${ sql(PK) } = ${ id }`;
  return rows[0] || null;
}

export async function create(payload) {
  const rows = await sql`insert into ${ sql(TABLE) } ${ sql(payload) } returning *`;
  return rows[0];
}

export async function update(id, payload) {
  const rows = await sql`update "${TABLE}" set ${sql(payload)} where "${PK}" = ${id} returning *`;
  return rows[0];
}

export async function remove(id) {
  await sql`delete from "${TABLE}" where "${PK}" = ${id}`;
  return { id };
}

export async function getUserByUsername(username) {
  const rows = await sql`select * from ${sql(TABLE)} where nombre = ${username}`;
  if(!rows) {
    const err = new Error("User not found");
    err.status = 404;
    throw err;
  }
  return rows;
}

export default { list, getById, create, update, remove, getUserByUsername };
