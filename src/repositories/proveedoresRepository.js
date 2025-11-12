import sql from "../config/db.js";

const TABLE = 'proveedores';
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
  const rows = await sql`update ${ sql(TABLE) } set ${ sql(payload) } where ${ sql(PK) } = ${ id } returning *`;
  return rows[0];
}

export async function remove(id) {
  await sql`delete from ${ sql(TABLE) } where ${ sql(PK) } = ${ id }`;
  return { id };
}

export default { list, getById, create, update, remove };
